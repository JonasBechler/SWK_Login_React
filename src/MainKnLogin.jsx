import React, { useState } from 'react'

import Header from "./SWK_React_Template/src/components_intern/Header/Header";
import AccountWidget from './SWK_React_Template/src/components_intern/AccountWidget/AccountWidget';


export default function MainKnLogin({name, icon, config}) {

	const server_requests = require('./SWK_React_Template/src/server_handler/server_requests')(config)
	

	const [details, setDetails] = useState();
	const [user, setUser] = useState();

	function fetch_user () {
		server_requests.user()
			.then(response => {
				if (response.details && response.user){
					
					setDetails(response.details);
					setUser(response.user);	
				}
				else{
					window.location.href = `${config.device_ip}:${config.port}/kn/login`
				}
			})
			.catch(error => {
				console.log("Server error");
				return
			})
	}


	React.useEffect(() => {
		fetch_user()

		const interval = setInterval(() => {
			
		}, 10000);

		return () => clearInterval(interval);
		
		
	}, []);

	

	return (

		<div className='Fill Column'>

			<Header name={name} icon={icon} ></Header>

			<div className='Spacer'></div>

			<AccountWidget title={"FusionAuth Daten"} details={details} user={user}  config={config}></AccountWidget>

			<div className='Spacer'></div>

		</div>

	);
}

