import Header from '../components/Header';
import Hero from '../components/Hero';
import ListOfDogCard from '../components/ListOfDogCard';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ListOfDogCard title="Random" endpoint="/breeds/image/random/30" />
    </div>
  );
}
