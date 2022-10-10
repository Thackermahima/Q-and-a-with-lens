import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import { MoralisProvider } from 'react-moralis';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LensAuthContextProvider } from './Context/LensContext';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
// var cors = require('cors')
// var express = require('express')
// var app = express()
// app.use(cors())

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = document.getElementById("root");
// const serverUrl = process.env.REACT_APP_MORALIS_SERVER;
//   const appId = process.env.REACT_APP_MORALIS_KEY;

ReactDOM.render(
  
  // <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <LensAuthContextProvider>
        <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
      </ThemeProvider>
    </LensAuthContextProvider>,
  // </MoralisProvider>,
  document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

