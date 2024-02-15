import React, { useRef } from 'react';
import Card from '../card/Card'; // Adjust the path to match your project structure
import './CardContainer.scss';

function CardContainer({ items, openModal }) {
  const scrollContainer = useRef(null);
  const cardWidth = 320; // Adjust this to the actual width of your cards (including margins)

  const scrollLeft = () => {
    scrollContainer.current.scrollLeft -= cardWidth * 2.5;
  };

  const scrollRight = () => {
    scrollContainer.current.scrollLeft += cardWidth * 3;
  };

  return (
<div className="card-container-outer">
  <button onClick={scrollLeft}></button>
  <div className="card-container-inner" ref={scrollContainer}>
    {items.map((item, index) => (
      <Card key={index} item={item} openModal={openModal} />
    ))}
  </div>
  <button onClick={scrollRight}></button>
</div>
  );
}

export default CardContainer;