import React from 'react';
import s from './Sliders.module.css';
import Slider1 from './components/Slider1/Slider1';
import Slider2 from './components/Slider2/Slider2';

function Sliders() {
  return (
    <div className={s.sliders_wrapper}>
      <div className={s.sliders}>
        <div className={s.slider_item}>
          <Slider1 />
        </div>
        
        <div className={s.slider_item}>
          <Slider2 />
        </div>
      </div>
     
    </div>
  );
}

export default Sliders;
