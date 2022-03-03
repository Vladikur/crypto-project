import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import Сryptocurrency from '../Сryptocurrency/Сryptocurrency';

function Сurrencies({preloader, cruptos}) {

  return (
    <div className="сurrencies">
      <h2 className="currencies__header">Ведущие криптовалюты</h2>
      {preloader ? <Preloader/> : 
        <div className="currencies__cryptocurrency-container">
          {cruptos.map((crypto) => (
            <Сryptocurrency
              key={crypto.id}
              slug={crypto.slug}
              symbol={crypto.symbol}
              price={crypto.metrics.market_data.price_usd}
            />
          ))}
        </div>
      }
    </div>
  );
}

export default Сurrencies;
