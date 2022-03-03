import React, { useEffect, useState } from 'react';
import Example from '../Example/Example';
import Wallet from '../Wallet/Wallet';

function Form({ onSeeBalance, wallet, preloader }) {

  const initialForm = {
    address: '', 
    type: 'None',
  }

  const [data, setData] = useState(initialForm);
  const [valid, setValid] = useState(false);
  const [visibleWalletInfo, setVisibleWalletInfo] = useState(false);

  useEffect(() => {
    if(data.type !== 'None' && data.address.length !== 0) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [data]);

  function handleChange(e) {
    setVisibleWalletInfo(false)
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSeeBalance(data);
    setData(initialForm)
    setVisibleWalletInfo(true)
  }

  const submitButtonClassName = (
    `form__submit ${!valid ? 'form__submit_type_disactive' : ''}`
  );

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      <h2 className="form__header">Узнайте баланс кошелька</h2>
      <div className="form__input-container">
        <span className="form__input-name">Тип валюты кошелька</span>
        <select value={data.type || ''} onChange={handleChange} className="form__select" name="type">
          <option value="None">Не выбрано</option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Binance-coin">Binance-coin</option>
        </select>
      </div>
      <div className="form__input-container">
        <span className="form__input-name">Адрес кошелька</span>
        <input value={data.address || ''} onChange={handleChange} className="form__input" type="text" name="address" required />
      </div>
      <button disabled={!valid} type="submit" className={submitButtonClassName} >Показать баланс кошелька</button>
      { visibleWalletInfo ? <Wallet wallet={wallet} preloader={preloader} />: <Example/>}
    </form>
  );
}

export default Form;
