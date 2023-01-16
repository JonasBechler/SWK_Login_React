import React from 'react'


import './App.css'
import './SWK_React_Template/src/styles/App.css'

import Main_Kn_Login from './Main_Kn_Login';

function App() {
	const name = "Login";
	const icon = require("./KonstanzLoginLogo.png");
	let config = null;
	try{
		config = require( "../../../config.json");
	}catch(error){
		config = require( "../config.json");
	}
	config.port = config.login.port
	config.port_react = config.login.port_react

	return (

		<Main_Kn_Login name={name} icon={icon} config={config}></Main_Kn_Login>

	);
}

export default App;
