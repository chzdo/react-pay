import { CSSProperties, FC } from "react"
import * as React from 'react';
export default function PayButton({ buttonStyle, verifying, VerifyComponent, text, action }: {
  buttonStyle?: CSSProperties| undefined,
  verifying?: boolean | false,
  VerifyComponent?: FC<any> ,
  text?: string |undefined,
  action: Function
}){
  
  
  return <button
  style={buttonStyle || {}}
  disabled={verifying || false}
    onClick={(e) => {
    e.preventDefault()
   action()
  }}>
  {verifying ?  (VerifyComponent!=undefined? <VerifyComponent   />  :'Verifying Payment') : (text || "Pay")}
</button> 
}

