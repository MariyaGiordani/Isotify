import React from 'react';
import './spinner.css';
import vinyl from '../../assets/img/vinyl.svg';
import needle from '../../assets/img/needle.svg';

const Spinner = () => (
  <div className="spinner">
    <img src={needle} className="spinner__needle" alt="loading" />
    <img src={vinyl} className="spinner__record" alt="loading" />
  </div>
);

export default Spinner;
