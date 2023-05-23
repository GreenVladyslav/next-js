import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import ContactInfo from '../../components/Contactinfo';
import { contactType } from '../../types';

type contactTypeProps = {
  contact: contactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log(context); // содержит данные о запросе и ответе (важное: query and params)
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data }, // данные определяем в пропс контакты
  };

  // по сути данная функция возвращает пропсы для копонента
};

const Contact: FC<contactTypeProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
