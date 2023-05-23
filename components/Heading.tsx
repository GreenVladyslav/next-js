import { FC } from 'react';

type headingProps = {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
};

const Heading: FC<headingProps> = ({ tag, text }) => {
  const Tag = tag || 'h1';
  return <Tag>{text}</Tag>;
};

export default Heading;
