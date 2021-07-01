/// <reference types="react" />
import { FlutterWaveProps } from '../types';
declare global {
    interface Window {
        globalThis: any;
    }
}
export default function FlutterWave({ onSuccess, onClose, buttonStyle, text, amount, publicKey, currency, verify, reference, payment_options, customer, ...rest }: FlutterWaveProps): JSX.Element;
