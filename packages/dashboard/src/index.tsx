import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SnackbarProvider } from "notistack";
import ContexxtProvider from "./Store";

import App from './App';

const routing = (
    <ContexxtProvider>
        <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
            <App />
        </SnackbarProvider>
    </ContexxtProvider>
)

ReactDOM.render(routing, document.getElementById('root'));
