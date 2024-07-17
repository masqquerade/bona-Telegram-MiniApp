import { SDKProvider } from '@telegram-apps/sdk-react';
import { App } from './App';

export const Root = () => (
    <SDKProvider>
        <App />
    </SDKProvider>
);