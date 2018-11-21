import React from 'react';
import './pageContainer.css';

const PageContainer = ({ children, noPadding }) => (
  <div className={noPadding ? 'page-container page-container--no-padding' : 'page-container'}>{children}</div>
);

export default PageContainer;
