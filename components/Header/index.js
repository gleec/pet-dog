import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.title}>Pet Dog</span>
    </header>
  );
};

export default Header;
