import React, { useEffect, useState } from 'react';

function Сryptocurrency({ slug, symbol, price }) {

  return (
    <div className="cryptocurrency">
      <div>
        <p className="cryptocurrency__slug">{slug}</p>
        <p className="cryptocurrency__symbol">{symbol}</p>
      </div>
      <p className="cryptocurrency__price">$ {price.toFixed(2)}</p>
    </div>
  );
}

export default Сryptocurrency;
