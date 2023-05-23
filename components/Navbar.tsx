import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar: FC = () => {
  const { pathname } = useRouter(); // содержит путь к текущей странице

  return (
    <nav className={styles.nav}>
      <div className={styles.log}>
        <Image src="/logo.png" width={60} height={60} alt="VladDev" />
      </div>

      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => {
          return (
            <Link key={id} href={path}>
              <a className={pathname === path ? styles.active : null}>{title}</a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
