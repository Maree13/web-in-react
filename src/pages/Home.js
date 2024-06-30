import { useState, useEffect } from 'react';
import './Home.css';
import logo from '../img/logo.png';
import { allCards } from '../data';
import CardComponent from '../components/CardComponent';
import TabsComponent from '../components/TabsComponent';

const texts = [
  'Lorem ipsum dolor sit amet consectetur adipisicing.',
  'Another set of yellow words here for testing.',
  'Different yellow words here now and forever.',
];

const getRandomText = () => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
};

const Home = () => {
  const [highlightedText, setHighlightedText] = useState('');

  useEffect(() => {
    const randomText = getRandomText();
    const [firstPart, secondPart, ...rest] = randomText.split(' ');
    const highlighted = `${firstPart} ${secondPart}`;
    setHighlightedText({ highlighted, rest: rest.join(' ') });
  }, []);

  return (
    <div className="home">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Na priklad nieco nieco</h1>
      {highlightedText && (
        <h2>
          <span className="highlight">{highlightedText.highlighted}</span>{' '}
          {highlightedText.rest}
        </h2>
      )}
      <div className="cards-container">
        {allCards.map(({ id, title, description, image }) => (
          <CardComponent
            key={id}
            title={title}
            description={description}
            imageSrc={image}
            imageAlt={`Image ${id}`}
          />
        ))}
      </div>
      <TabsComponent />
    </div>
  );
};

export default Home;
