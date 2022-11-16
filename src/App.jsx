import React from 'react'

import config from "../../config.json"

import './App.css'
import Main from './Main';

function App() {
	const name = "Login";
	const icon = require("./KonstanzLoginLogo.jpeg");
	config.port = config.login.port
	config.port_react = config.login.port_react

	return (

		<Main name={name} icon={icon} config={config}></Main>

	);
}

export default App;
