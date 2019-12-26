import React from 'react';
import classNames from 'classnames';

import CardIssuerLogo from '../card-issuer-logo';
import CardNumber from '../card-number';

import Image_CardChip from '../../assets/images/card-chip.svg';

import './styles.scss';

type PropsType = {
  className?: string;
};

const CreditCard = ({ className }: PropsType) => {
  return (
    <div className={classNames('credit-card', className)}>
      <span className="credit-card__top-section">
        <img src={Image_CardChip} className="credit-card__chip-image" />
        <CardIssuerLogo issuer="visa" className="credit-card__issuer-logo" />
      </span>
      <span className="credit-card__bottom-section">
        <CardNumber />
        <span className="credit-card__card-info">
          <span className="credit-card__info-section">
            <p className="credit-card__info-label">Card Holder</p>
            <p className="credit-card__info-value">Full Name</p>
          </span>
          <span className="credit-card__info-section">
            <p className="credit-card__info-label">Expires</p>
            <p className="credit-card__info-value">MM/YY</p>
          </span>
          <span className="credit-card__info-section">
            <p className="credit-card__info-label">CVC/CVV</p>
            <p className="credit-card__info-value">###</p>
          </span>
        </span>
      </span>
    </div>
  );
};

export default CreditCard;
