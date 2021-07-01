



import React, { CSSProperties, ElementType, FC, ReactElement, useEffect, useState } from 'react'

type currency = "NGN" | "USD" | "GHA" | "ZAR";
type channels = 'bank' | 'card' | 'qr' | 'ussd' | 'mobile_money';
type bearer = 'account' | 'subaccount'
type subaccount = {

  id: string,
  transaction_split_ratio: number,

}
export  type Type ="flutter"|"paystack" 
export interface PayStackProps extends PaymentProps {
  config: {
    email: string,
    amount: number | null,
  }

  currency?: currency
  label?: string,
  channels?: channels[],
  onBankTransferConfirmationPending?: Function
  subaccount?: string,
  transaction_charge?: number,
  bearer?: bearer,
  split_code?: string,
  plan?: string,
  quantity?: number,
  metadata?: object,
 

}

interface PaymentProps {
  publicKey: string,
  onSuccess: (reference: any) => any,
  onClose: (reference? : any) => any,   
  buttonStyle?: CSSProperties,
  text?: string,
  verify?: {
    url: RequestInfo,
    options: RequestInit,
    Component: FC<any>
  },
  reference?: string,
 

}



export interface FlutterWaveProps extends PaymentProps {
  tx_ref?: string
  amount: number|null
  currency?: currency
  integrity_hash?: string
  payment_options?: string
  payment_plan?: string
  redirect_url?: string
  customer: {
    'email': string
    'phonenumber': string | number,
    'name': string
  }
  subaccounts?: subaccount[]
  meta?: object
  customizations?: {
    'title': string,
    'description': string
    'logo': string
  }
}


type fetch = RequestInfo | undefined

/**{
  url: string,
  method: 'post' | 'get' | 'patch' | 'put',
  body?: JSON,
  mode?: 'cors'| 'no-cors' | 'same-origin', // no-cors, *cors, same-origin
  cache?: 'no-cache' | 'default' | 'reload' | 'force-cache' | 'only-if-cached', // *default, no-cache, reload, force-cache, only-if-cached
  credentials?: 'same-origin' | 'include' | 'omit', // include, *same-origin, omit
  headers?: {
    'Content-Type': 'application/json' | 'application/x-www-form-urlencoded' | string
     
  },
  redirect?: 'follow' | 'manual', // manual

  
}
**/