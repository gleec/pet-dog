import React from 'react';
import Image from 'next/image';
import styles from './DogCard.module.scss';

const DEFAULT_IMAGE = '/images/dog.jpg';

const DogCard = ({ src = DEFAULT_IMAGE }) => {
  const image = src;

  return (
    <>
      <div className={styles.dogCard}>
        <Image src={image} width={220} height={330} objectFit="cover" />
      </div>
    </>
  );
};

export default DogCard;
