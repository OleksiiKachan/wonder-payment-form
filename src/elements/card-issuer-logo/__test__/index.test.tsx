import React from 'react';
import { shallow } from 'enzyme';
import CardIssuerLogo from '../';

describe('CardIssuerLogo', () => {
  it('Visa', () => {
    const component = shallow(<CardIssuerLogo issuer="visa" />);

    expect(component).toMatchSnapshot();
  });
  it('Mastercard', () => {
    const component = shallow(<CardIssuerLogo issuer="mastercard" />);

    expect(component).toMatchSnapshot();
  });
  it('Amex', () => {
    const component = shallow(<CardIssuerLogo issuer="amex" />);

    expect(component).toMatchSnapshot();
  });
  it('Discover', () => {
    const component = shallow(<CardIssuerLogo issuer="discover" />);

    expect(component).toMatchSnapshot();
  });
});
