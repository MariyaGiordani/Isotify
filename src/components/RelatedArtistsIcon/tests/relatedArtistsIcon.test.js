import React from 'react';
import { shallow } from 'enzyme';
import RelatedArtistsIcon from '../relatedArtistsIcon';

describe('<RelatedArtistsIcon />', () => {

  it('should render without throwing an error', () => {
    const wrapper = shallow(<RelatedArtistsIcon />);
    expect(wrapper.is('.related-artists-icon')).toBe(true);
  });

  it('should have a link that points to correct page', () => {
    const props = {
      id: '123456'
    }
    const expectedValue = `/artists/${props.id}`;

    const wrapper = shallow(<RelatedArtistsIcon { ...props }/>);
    const Link = wrapper.find('Link');

    expect(Link.prop('to')).toBe(expectedValue);
  });

  it('should render proper alt and src for artist icon image', () => {
    const props = {
      artistName: 'Led Zeplin',
      src: './image/fake/path/image.png'
    }
    const expectedValues = {
      alt: `Related: ${props.artistName}`,
      src: props.src
    };

    const wrapper = shallow(<RelatedArtistsIcon { ...props }/>);
    const image = wrapper.find('img');

    expect(image.prop('alt')).toBe(expectedValues.alt);
    expect(image.prop('src')).toBe(expectedValues.src);
  });

});