import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Form from '../Form/Form';
import Сurrencies from '../Сurrencies/Сurrencies';
import Header from '../Header/Header';

function App() {

  const [allCruptos, setAllCruptos] = useState([]);
  const [walletData, setWalletData] = useState({
    type: '',
    address: '',
    balance: '',
  });
  const [isReceiving, setIsReceiving] = React.useState(false);

  useEffect(() => {
    setIsReceiving(true)
    axios.get(`https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`)
    .then(res => {
      const data = res.data.data;
      setAllCruptos(data)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setIsReceiving(false)
    });

  }, [])

  function onSeeBalance(data) {
    if(data.type === "Binance-coin") {
      setIsReceiving(true)
      axios.get('https://api.bscscan.com/api', {
        params: {
          module: "account",
          action: "balance",
          address: `${data.address}`,
          apikey: "AP4ISPUXMFKVYRU3P1QKRGD5BH9NFW46RX"
        }
      })
      .then(res => {
        const responce = res.data;
        setWalletData({
          type: data.type,
          address: data.address,
          balance: responce.result,
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsReceiving(false)
      });
    }
    if(data.type === "Bitcoin") {
      setIsReceiving(true)
      axios.get(`https://blockchain.info/q/addressbalance/${data.address}`)
      .then(res => {
        const responce = res.data;
        setWalletData({
          type: data.type,
          address: data.address,
          balance: responce,
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsReceiving(false)
      });
    }
  }

  return (
    <div className="app">

    <Header/>

      <Switch>

        <Route exact path='/'>
          <Сurrencies
            preloader={isReceiving}
            cruptos={allCruptos}
          />
        </Route>

        <Route path='/form'>
          <Form
            onSeeBalance={onSeeBalance}
            wallet={walletData}
            preloader={isReceiving}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
