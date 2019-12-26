import React from 'react';

import Logo_Visa from '../../assets/images/visa.svg';
import Logo_Mastercard from '../../assets/images/mastercard.svg';
import Logo_Amex from '../../assets/images/amex.svg';
import Logo_Discover from '../../assets/images/discover.svg';

type PropsType = {
  issuer: 'visa' | 'mastercard' | 'amex' | 'discover';
  className?: string;
};
const CardIssuerLogo = ({ issuer, className }: PropsType) => {
  let issuerLogo = Logo_Visa;

  switch (issuer) {
    case 'visa':
      issuerLogo = Logo_Visa;
      break;
    case 'mastercard':
      issuerLogo = Logo_Mastercard;
      break;
    case 'amex':
      issuerLogo = Logo_Amex;
      break;
    case 'discover':
      issuerLogo = Logo_Discover;
      break;
  }

  return <img src={issuerLogo} alt={issuer} className={className} />;
};

export default CardIssuerLogo;
