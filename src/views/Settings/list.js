import React from 'react';
import './settings.css';
import PageContainer from '../../components/PageContainer/pageContainer';
import SettingsAll from '../../components/SettingsAll/settingsAll';

export default () => {
  return (
    <PageContainer>
      <div className="settings">
        <SettingsAll />
      </div>
    </PageContainer>
  );
};
