import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';

function Wallet({wallet, preloader}) {

  const [balanse, setBalanse] = useState('');

  useEffect(() => {
    if (wallet.type === "Bitcoin") {
      const currency = wallet.balance / 100000000
      setBalanse(`${currency} BTC`)
    }
    if (wallet.type === "Binance-coin") {
      const currency = wallet.balance / 1000000000000000000
      setBalanse(`${currency} BNB`)
    }

  }, [wallet])

  return (
    <div className="wallet">
      {preloader ? <Preloader/> : <div className="wallet__container">
        <h2 className="wallet__header">Результат:</h2>
        <p className="wallet__text">Тип валюты: {wallet.type}</p>
        <p className="wallet__text">Адрес кошелька: {wallet.address}</p>
        <p className="wallet__balance">Баланс: {balanse}</p>
      </div>}
    </div>
  );
}

export default Wallet;
