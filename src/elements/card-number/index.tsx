import React from 'react';
import classNames from 'classnames';

import './styles.scss';

type PropsType = {
  className?: string;
};

const CardNumber = ({ className }: PropsType) => {
  const placeholderSymbol = '#';

  const cardNumberArray = placeholderSymbol.repeat(20).split('');

  return (
    <span className={classNames('card-number', className)}>
      <span className="card-number__section">
        {cardNumberArray.slice(0, 4).map((symbol: string) => (
          <span className="card-number__symbol">{symbol}</span>
        ))}
      </span>
      <span className="card-number__section">
        {cardNumberArray.slice(5, 9).map((symbol: string) => (
          <span className="card-number__symbol">{symbol}</span>
        ))}
      </span>
      <span className="card-number__section">
        {cardNumberArray.slice(10, 14).map((symbol: string) => (
          <span className="card-number__symbol">{symbol}</span>
        ))}
      </span>
      <span className="card-number__section">
        {cardNumberArray.slice(15, 19).map((symbol: string) => (
          <span className="card-number__symbol">{symbol}</span>
        ))}
      </span>
    </span>
  );
};

export default CardNumber;
