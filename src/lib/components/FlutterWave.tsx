
import axios from 'axios';
import React, { CSSProperties, useEffect, useState } from 'react'

import useLoadScript from '../loadscript';
import onPay from '../pay';
import { FlutterWaveProps, Type } from '../types';
import PayButton from './btn';

declare global {
  interface Window {
    globalThis: any
  }
}



export default function FlutterWave({ onSuccess, onClose, buttonStyle, text, amount,
  publicKey, currency, verify, reference, payment_options, customer, ...rest }: FlutterWaveProps) {


  let [verifying, setVerify] = useState<boolean>(false)
  let [loaded, error] = useLoadScript('https://checkout.flutterwave.com/v3.js')



  if (error) {

    throw new Error('could not load Flutter wave')

  }
  function action() {
    let type: Type = "flutter"
    let c = {
      public_key: publicKey,
      tx_ref: reference || new Date().getTime().toString(),
      customer,
      ...rest,
      amount: amount,
      currency: currency,
      payment_options: payment_options || "card,ussd,qr,barter",

      callback: onPay({ verify, onSuccess, setVerify, type }),
      onClose: onClose
    }


    window.globalThis.FlutterwaveCheckout(c);

  }





  return <>

    {loaded ?
      <PayButton buttonStyle={buttonStyle} text={text} verifying={verifying} action={action} /> : <> </>}


  </>





}



