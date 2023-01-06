import React, { useState } from 'react'

import Header from "./SWK_React_Template/src/components/Header/Header";

import AccountWidget from './SWK_React_Template/src/components/AccountWidget/AccountWidget';

export default function Main({name, icon, config}) {

	const server_requests = require('./SWK_React_Template/src/server_handler/server_requests')(config)
	

	const [details, setDetails] = useState();
	const [user, setUser] = useState();

	//used when page change to 0
	React.useEffect(() => {
		server_requests.user().then(_ => {
			console.log(_);
		})
		//fetch user
		server_requests.user()
			.then(response => {
				
				//check if is empty
				let response_lenght = Object.keys(response).length
				
				console.log(response)
				if (response_lenght === 0) {
					location.href = `${config.device_ip}:${config.port}/login`
					return
				}

				else{
					let response_copy = Object.assign({}, response)
					Object.entries(response_copy).forEach(entry => {
						response_copy[entry[0]] = entry[0]
					})
					setDetails(response_copy);
					setUser(response);	
				}

				

			});
		
	}, []);

	

	return (

		<div className='Fill Column'>

			<Header name={name} icon={icon} ></Header>

			<div className='Spacer'></div>

			<AccountWidget title={"Response"} details={details} user={user}  config={config}></AccountWidget>

			<div className='Spacer'></div>

		</div>

	);
}

