# Proxy-ChannelApp
Simple Express.JS server that can add custom headers and proxy all the traffic.

## How to run
1. `yarn install` or `npm install`
2. Edit config in app.js
```
    domainToRedirect: target domain
    bearerKey: key to add in headers
    proxyByHttps: (boolean) set for true if your domain requires encrypted connection
    headersSettings: do not change
```
3. `npm run start`
4. Open http://localhost:3030 in your browser and all the traffic will be proxy straight to your domain with custom headers.

or modify as you want 🤷🏻‍♂️

## Useful links
* http://localhost:3030/vodeno-platform-web/payment-channel/dashboard

&copy; 10/2019
