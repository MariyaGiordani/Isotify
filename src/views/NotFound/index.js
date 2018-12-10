import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/PageContainer/pageContainer';

export default () => (
  <PageContainer>
    <h1>Not Found</h1>
    <Link to="/artists">Back to Artists</Link>
  </PageContainer>
);
