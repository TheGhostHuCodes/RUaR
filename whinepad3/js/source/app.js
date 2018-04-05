/* @flow */

'use strict'; // always a good idea!


import CRUDStore from './flux-imm/CRUDStore';
import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';
import Whinepad from './components/Whinepad';
import schema from './schema';

CRUDStore.init(schema);

var pad = document.getElementById('pad')
if (pad === null) {
    throw new Error("no pad element");
}

ReactDOM.render(
    <div>
        <div className="app-header">
            <Logo /> Welcome to Whinepad!
        </div>
        <Whinepad />
    </div>,
    pad
);