import React from 'react';
import './pageContainer.css';

const PageContainer = ({ children, noPadding }) => (
  <div
    className={`page-container ${noPadding && 'page-container--no-padding'}`}
  >
    {children}
  </div>
);

export default PageContainer;
