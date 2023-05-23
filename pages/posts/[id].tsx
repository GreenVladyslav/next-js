import { GetStaticProps, GetStaticPaths } from 'next';
import { FC } from 'react';
import Head from 'next/head';
import PostInfo from '../../components/PostInfo';
import { postType } from '../../types';

type postProps = {
  post: postType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // статика
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    //формируем массив путей
    params: { id: id.toString() }, // каждый элемент массива это специальный обьект со свойством params ( обязательно строка)
  }));

  return {
    paths, // спец обьект
    fallback: false, // в случае ошибки будет возвращена 404
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
};

const Post: FC<postProps> = ({ post }) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default Post;
