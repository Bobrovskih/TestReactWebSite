import React, { useState, useEffect } from 'react';

import './PhotoSlider.css';

import Photo1 from './PhotoSlider_img/1-jasmin-chew-UBeNYvk6ED0-unsplash.jpg';
import Photo2 from './PhotoSlider_img/2-angelica-echeverry-mI82mfLu538-unsplash 1.png';
import Photo3 from './PhotoSlider_img/3-joeyy-lee-3TnDfD2hIxg-unsplash.png';
import Photo4 from './PhotoSlider_img/4-cat-han-BJ3grTerqY4-unsplash.jpg';
import Photo5 from './PhotoSlider_img/5-andres-vera-CmmYT6Mm948-unsplash 1.jpg';
import Photo6 from './PhotoSlider_img/6-andres-vera-CmmYT6Mm948-unsplash 1 (1).jpg';
import Photo7 from './PhotoSlider_img/7-andres-vera-CmmYT6Mm948-unsplash 1.png';
import Photo8 from './PhotoSlider_img/8-andres-vera-CmmYT6Mm948-unsplash 1 (1).png';
import Photo9 from './PhotoSlider_img/9-andres-vera-CmmYT6Mm948-unsplash 1 (3).png';
import Photo10 from './PhotoSlider_img/10-andres-vera-CmmYT6Mm948-unsplash 1 (4).png';
import Photo11 from './PhotoSlider_img/11-andres-vera-CmmYT6Mm948-unsplash 1 (5).png';
import Photo12 from './PhotoSlider_img/12-andres-vera-CmmYT6Mm948-unsplash 1 (6).png';

export default function PhotoSlider() {
  const [inViewport, setInViewport] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [moveCount, setMoveCount] = useState(0);

  const imagesSrc = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
    Photo10,
    Photo11,
    Photo12,
  ];

  const IMAGES_COUNT = imagesSrc.length;
  const IMAGE_SIZE = 320;
  const IMAGE_IN_VIEWPORT = 4; // TODO 4.5
  const IMAGE_PER_MOVE = 2;

  const MOVE_COUNT = (IMAGES_COUNT - IMAGE_IN_VIEWPORT) / IMAGE_PER_MOVE;

  function sliderMove() {
    setTranslateX(translateX - (IMAGE_SIZE * IMAGE_PER_MOVE));
    setMoveCount(moveCount + 1);
  }

  const images = imagesSrc.map((src) => (
    <img className="photoslider__slider__Photo" src={src} alt="" key={src} />
  ));

  const photosliderElement = React.createRef();

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInViewport(true);
        sliderMove();
      } else {
        setInViewport(false);
        setTranslateX(0);
      }
    });

    io.observe(photosliderElement.current);
  }, []);

  useEffect(() => {
    if (moveCount < MOVE_COUNT && inViewport) {
      setTimeout(() => {
        sliderMove();
      }, 1500);
    }
  }, [translateX]);

  return (
    <div className="photoslider">
      <div className="photoslider__header">Lorem ipsum dolor sit amet</div>
      <div className="photoslider__slider" ref={photosliderElement}>
        <div className="photoslider__sliderWrap" style={{ transform: `translateX(${translateX}px)` }}>
          <div className="photoslider__images">{ images }</div>
        </div>
      </div>
    </div>
  );
}
