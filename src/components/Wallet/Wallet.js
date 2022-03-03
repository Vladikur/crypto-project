import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';

function Wallet({wallet, preloader}) {

  return (
    <div className="wallet">
      {preloader ? <Preloader/> : <div className="wallet__container">
        <h2 className="wallet__header">Результат:</h2>
        <p className="wallet__text">Тип валюты: {wallet.type}</p>
        <p className="wallet__text">Адрес кошелька: {wallet.address}</p>
        <p className="wallet__balance">Баланс: {wallet.balance}</p>
      </div>}
    </div>
  );
}

export default Wallet;
