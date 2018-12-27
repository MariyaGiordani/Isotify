import React from 'react';
import './pageContainer.css';
import Spinner from '../../components/Spinner/spinner';

const PageContainer = ({ children, noPadding, loaded = true, error }) => (
  <div
    className={`page-container ${noPadding && 'page-container--no-padding'}`}
  >
    {error || loaded ? children : <Spinner />}
  </div>
);

export default PageContainer;
