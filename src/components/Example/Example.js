import React, { useEffect, useState } from 'react';

function Example() {

  return (
    <div className="example">
      <div className="example__bitcoin-container">
        <h2 className="example__header">Примеры адресов для Bitcoin:</h2>
        <p className="example__text">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p>
        <p className="example__text">	1AjPJ1eq4VMt3NxBZwAD5BvpajxoGUJ89n</p>
        <p className="example__text">1aXzEKiDJKzkPxTZy9zGc3y1nCDwDPub2</p>
      </div>
      <div className="example__ethereum-container">
        <h2 className="example__header">Примеры адресов для Binance-coin:</h2>
        <p className="example__text">0x3f349bBaFEc1551819B8be1EfEA2fC46cA749aA1</p>
        <p className="example__text">0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7</p>
        <p className="example__text">0x70F657164e5b75689b64B7fd1fA275F334f28e18</p>
      </div>
    </div>
  );
}

export default Example;
