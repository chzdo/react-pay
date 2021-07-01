import { PayStackProps } from "./types";


export default function onPay({ verify, setVerify, onSuccess , type}: {
  verify: PayStackProps['verify'],
  setVerify: Function, onSuccess: PayStackProps['onSuccess'],
  type: 'flutter' | 'paystack'
}) {

  return function (ref: any) {
    
   
    
    (async () => {
      let resp: any = ref;
      let params  =   type =='flutter'? resp.transaction_id : resp.reference
      if (verify) {
        setVerify(true)
        try {
          let r = await fetch(verify?.url + "?tx_ref="+params || "", verify?.options)
          resp = await r.json()
          resp.OriginalResponse = ref
        } catch (e) {
          resp = e
        }
        setVerify(false)
      }

      onSuccess(resp)
    })()
  }
}