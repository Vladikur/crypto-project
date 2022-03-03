import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import Сurrencies from '../Сurrencies/Сurrencies';

function App() {

  const [allCruptos, setAllCruptos] = useState([]);
  const [walletData, setWalletData] = useState({
    type: '',
    address: '',
    balance: '',
  });
  const [isReceiving, setIsReceiving] = React.useState(false);

  // useEffect(() => {
  //   setIsReceiving(true)
  //   axios.get(`https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`)
  //   .then(res => {
  //     const data = res.data.data;
  //     setAllCruptos(data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  //   .finally(() => {
  //     setIsReceiving(false)
  //   });

  // }, [])

  function onSeeBalance(data) {
    if(data.type === "Ethereum") {
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
      <Сurrencies
        preloader={isReceiving}
        cruptos={allCruptos}
      />
      <Form
        onSeeBalance={onSeeBalance}
        wallet={walletData}
        preloader={isReceiving}
      />
    </div>
  );
}

export default App;
