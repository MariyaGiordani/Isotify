import React from 'react';

import HeaderLine from '../headerLine/headerLine';
import CheckBox from '../CheckBox/checkBox';

import './appearance.css';

const InterfaceTheme = ({ changeViewTheme, theme }) => {
  const isChecked = theme === 'DARK';
  const subtitle = isChecked ? 'Dark' : 'Light';
  return (
    <HeaderLine
      {...{
        title: 'Interface theme',
        subtitle: subtitle,
        size: 'small'
      }}
    >
      <CheckBox
        {...{
          onChange: changeViewTheme,
          isChecked: isChecked
        }}
      />
    </HeaderLine>
  );
};

export default InterfaceTheme;
