import React from 'react';
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
  return (
    <div className="photoslider">
      <div className="photoslider__header">Lorem ipsum dolor sit amet</div>
      <did className="photoslider__slider">
        <img className="photoslider__slider__Photo1" src={Photo1} alt="photo1" />
        <img className="photoslider__slider__Photo2" src={Photo2} alt="photo2" />
        <img className="photoslider__slider__Photo3" src={Photo3} alt="photo3" />
        <img className="photoslider__slider__Photo4" src={Photo4} alt="photo4" />
        <img className="photoslider__slider__Photo5" src={Photo5} alt="photo5" />
        <img className="photoslider__slider__Photo6" src={Photo6} alt="photo6" />
        <img className="photoslider__slider__Photo7" src={Photo7} alt="photo7" />
        <img className="photoslider__slider__Photo8" src={Photo8} alt="photo8" />
        <img className="photoslider__slider__Photo9" src={Photo9} alt="photo9" />
        <img className="photoslider__slider__Photo10" src={Photo10} alt="photo10" />
        <img className="photoslider__slider__Photo11" src={Photo11} alt="photo11" />
        <img className="photoslider__slider__Photo12" src={Photo12} alt="photo12" />
      </did>

    </div>
  );
}
