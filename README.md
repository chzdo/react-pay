# Getting Started with React-Paystack-Flutter-Payment

This is a Component for Paystack and Flutter Wave Payments.

## About

Yes, there are options for react component for several gateways. However, this component combines 
Paystack and Flutter Wave with an addition Feature.

You can pass your verification uri to the component and it verifies your payment and returns response from your API.

## Installation

NPM
``` 
npm install @chzdo_apps/react-paystack-flutter-payment

```
or Yarn 
``` 
yarn add @chzdo_apps/react-paystack-flutter-payment

```



Yes, there are options for react component for several gateways. However, this component combines 
Paystack and Flutter Wave with an addition Feature.

You can pass your verification uri to the component and it verifies your payment and returns response from your API.




## Example

``` javascript
 import { PayStack , FlutterWave } from "@chzdo_apps/react-paystack-flutter-payment"

...
          <PayStack

            config={{
            email: state.email,
            amount: state.amount,
               }}
          verify={{
            url: "<your API URL>",
            options: {
            method: "<Your Prefered Request Method>"             
            },
            Component: ()=><i  class="fas fa-spin"></i>
          }}
          currency="NGN"
          publicKey="Your Paystack public Key"
          onSuccess={(r) => console.log(r)}
          onClose={() => console.log('closed')}
          text={'Pay'}
          buttonStyle={{
            background: 'blue',
            borderWidth: 0,
            boxShadow: "0px 1px 2px 5px black",
       
          }}
          channels={["bank", "card"]}
        />

        <FlutterWave

          customer={{
            email: state.email,
            phonenumber: state.phone,
            name: state.name  }}
            amount={state.amount}
            currency="NGN"
           verify={{
            url: "<your API URL>",
            options: {
            method: "<Your Prefered Request Method>",
            },
            Component: ()=><i  class="fas fa-spin"></i>
          }}
          publicKey="Your Flutter wave Key"
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
```

## Props

#### General
| Prop          | Description   | Expected Value  |
| ------------- |:-------------:| ---------------:|
| publicKey     | Your payment Public Key | string            |
| onSuccess     | The callback function after payment     |   Function          |
| onClose       | The callback function when user closes the dialog     |    Function           |
| buttonStyle   | Styles for the payment button | CSSProperties          |
| text          | Caption on the button      |  default : pay         |
| verify        | This is used if you want the component to verify the transaction. The Response Object will be return in the onSuccess ***Note: Do not pass this prop if you do not want the component to handle the verification***     |    url : uri, options: All Request Params,Component: A react Functional Component           |
| reference        | Unique reference for each transaction     |   default : The component generates ref if prop is not passed           |


#### Paystack
| Prop          | Description   | Expected Value  |
| ------------- |:-------------:| ---------------:|
| config        | This contains information about the payer | check paystack documentation for possible optios           |

You can check [paystack documentation](https://paystack.com/docs/)  for props you can pass to the component.
You can check [Flutter Wave documentation](https://developer.flutterwave.com/docs/)  for props you can pass to the component.

