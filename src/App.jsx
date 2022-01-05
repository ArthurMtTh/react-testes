import React from 'react';

import Primeiro from "./components/basicos/Primeiro.js";
import Segundo from "./components/basicos/Segundo";

export default () => (
    <div id="app">
        <Primeiro />

        <Segundo
            registro={9703}
            nome="Adam Kallister"
            idade={28} />
    </div>
)