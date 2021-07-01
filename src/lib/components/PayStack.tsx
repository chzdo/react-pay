
import axios from 'axios';
import React, { CSSProperties, useEffect, useState } from 'react'
import PayButton from './btn';
import onPay from '../pay';
import useLoadScript from '../loadscript';
import { PayStackProps, Type } from '../types';
import { FC } from 'react';

declare global {
  interface Window {
    globalThis: any
  }
}





export default function PayStack({ onSuccess, onClose, buttonStyle, text, config,
  publicKey, currency, verify, reference,  ...rest }: PayStackProps) {

  const [state, setState] = useState({
   
    email: config.email,
    amount: config.amount,
      
  })
  let [verifying, setVerify] = useState<boolean>(false)
  let [loaded, error] =  useLoadScript('https://js.paystack.co/v1/inline.js')




  useEffect(() => {
    if (!error) {
      setState(c => ({ ...c, ...config, ...rest  }))
    }

  }, [config])



  if (error) {

    throw new Error('could not load paystack')

  }




  
  function action() {
    let type: Type = "paystack";
      let c = {
      key: publicKey,
      ...config,
      ...rest,
      currency: currency || "NGN",
      ref: reference || '' + Math.floor((Math.random() * 1000000000) + 1),     
      callback: onPay({ verify, onSuccess, setVerify , type}), 
      onClose: onClose
    }

     var handler = window.globalThis.PaystackPop.setup(c);
     handler && handler.openIframe();
  }

  return <>

    {loaded ?
      <PayButton buttonStyle={buttonStyle} text={text} VerifyComponent={verify?.Component} verifying={verifying} action={action} />
     : <> </>}


  </>





}


