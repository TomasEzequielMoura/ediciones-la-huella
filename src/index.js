import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GraphQLClient, ClientContext } from 'graphql-hooks'
const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "content-type": "application/json",
    "Authorization": `Bearer ${process.env.REACT_APP_DATO_CMS_API}`,
    // "Authorization": "Bearer c2a51fe4f20491c83d662c506ff1be",
  }
});

console.log(process.env.DATO_CMS_API)
console.log(client)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
