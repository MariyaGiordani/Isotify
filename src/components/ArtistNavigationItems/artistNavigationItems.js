import React, { Component } from 'react';
import './artistNavigationItems.css';
import { getClassModifier } from '../../utils/getClassName';

class NavigationItem extends Component {
  state = {
    selectedItem: 'Albums'
  };

  componentDidUpdate = () => {};

  getCurrentItem = (selectedItem) => {
    const { items = [] } = this.props;
    const selected = items.find((item) => item.name === selectedItem);
    const component = selected && selected.component;
    return component;
  };

  handleItemChange = (selectedItem) => {
    this.setState({ selectedItem });
  };

  renderTabs = () => {
    const { items = [] } = this.props;
    return items.map(({ name }) => {
      const { selectedItem } = this.state;
      const elementClasses = `navigation__item ${selectedItem === name &&
        getClassModifier('navigation__item', 'active')}`;
      return (
        <div
          key={name}
          className={elementClasses}
          onClick={() => this.handleItemChange(name)}
        >
          {name}
        </div>
      );
    });
  };

  render = () => {
    const { selectedItem } = this.state;
    return (
      <div className="artist-navigation-items">
        <div className="navigation-tab">{this.renderTabs()}</div>
        {this.getCurrentItem(selectedItem)}
      </div>
    );
  };
}

export default NavigationItem;
