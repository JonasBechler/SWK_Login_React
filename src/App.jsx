import React from 'react'


import './App.css'
import './SWK_React_Template/src/styles/App.css'

import MainKnLogin from './MainKnLogin';

function App() {
	const name = "Login";
	const icon = require("./KonstanzLoginLogo.png");
	const config = require( "../../config.json");

	config.port = config.login.port
	config.port_react = config.login.port_react

	return (

		<MainKnLogin name={name} icon={icon} config={config}></MainKnLogin>

	);
}

export default App;
