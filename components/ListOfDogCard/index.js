import React, { useState, useEffect } from 'react';
import DogCard from '../DogCard';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './ListofDogCard.module.scss';
import getDogs from '../../lib/api/services/getDogs';

SwiperCore.use([Navigation]);

const ListOfDogCard = ({ title, endpoint }) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs(endpoint).then(res => {
      console.log(res);
      console.log(res.data.message);
      setDogs(res.data.message);
    });
  }, []);

  return (
    <>
      <div className={styles.listDog}>
        <p className={styles.titleSection}> {title} </p>
        <Swiper
          navigation
          spaceBetween={16}
          slidesPerView={'auto'}
          freeMode={true}
        >
          {dogs.map((dog, i) => (
            <SwiperSlide key={i} className={styles.carousel}>
              <DogCard src={dog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ListOfDogCard;
