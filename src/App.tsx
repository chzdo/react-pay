import React from 'react';

import './App.css';
import PayStack from './lib/components/PayStack';
import { setConstantValue } from 'typescript';
import useState from 'react';
import { usePaystackPayment } from 'react-paystack';
import FlutterWave from './lib/components/FlutterWave';
import useEffect from 'react';
import axios from 'axios';

type user = string



interface props {
  message?: string
}

interface form {

  email: string,
  amount: number | null,
  name: string,
  phone: string
}

function App({ message }: props) {

  const [state, setState] = React.useState<form>({
    email: '',
    amount: null,
    name: '',
    phone: '',
  })

  React.useEffect(() => {

 

  }, [])




  return (

    <>
 
        <input type="email" name="email" onChange={(evt) => setState(e => ({ ...e, email: evt.target.value }))} />
        <input type="text" name="name" onChange={(evt) => setState(e => ({ ...e, name: evt.target.value }))} />
        <input type="text" name="phone" onChange={(evt) => setState(e => ({ ...e, phone: evt.target.value }))} />
        <input type="number" name="amount" onChange={(evt) => setState(e => ({ ...e, amount: parseInt(evt.target.value) }))} />



        <FlutterWave

          customer={{
            email: state.email,
            phonenumber: state.phone,
            name: state.name

          }
          }
          amount={state.amount}
          currency="NGN"
          verify={{
            url: "http://localhost:3001/flutter",
            options: {
              method: 'get',
             
            },
            Component:()=> <p>hello</p>
          }}
          publicKey="FLWPUBK_TEST-91c5110ca5f67f173d6366756a90ba5e-X"
          onSuccess={(r) => console.log(r)}
          onClose={(e) => console.log('closed',e)}
          text={'Flutter Product'}
          buttonStyle={{
            background: 'red',
            borderWidth: 0,
            boxShadow: "0px 1px 2px 5px black",
            cursor: 'grab'
          }}





        />


        <PayStack

          config={{
            email: state.email,
            amount: state.amount,


          }
          }
          verify={{
            url: "http://localhost:3001/paystack",
            options: {
            method: 'get',
             
            },
            Component: ()=><i>hello</i>
          }}
        
          currency="NGN"
          publicKey="pk_test_a20e878518fa72e765226f0b2cebcece08d2cedb"
          onSuccess={(r) => console.log(r)}
          onClose={() => console.log('closed')}
          text={'PayStack Product'}
          buttonStyle={{
            background: 'blue',
            borderWidth: 0,
            boxShadow: "0px 1px 2px 5px black",
            cursor: 'grab'
          }}

          channels={["bank", "card"]}



        />
  
    </>
  );
}

export default App;
