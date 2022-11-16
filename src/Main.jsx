import React, { useState } from 'react'

import Header from "./SWK_React_Template/src/components/Header/Header";

import AccountWidget from './SWK_React_Template/src/components/AccountWidget/AccountWidget';
import apiUser from './SWK_React_Template/src/api_handler/user'
import apiLogin from './SWK_React_Template/src/api_handler/login'

export default function Main({name, icon, config}) {

	const [details, setDetails] = useState();
	const [user, setUser] = useState();

	//used when page change to 0
	React.useEffect(() => {
			
		//fetch user
		apiUser.get_user(config)
			.then(response => {
				//check if is empty
				let response_lenght = Object.keys(response).length
				
				console.log(response)
				if (response_lenght === 0) {
					apiLogin.with_konstanz(config)
					return
				}

				else{
					setDetails(response);
					setUser(response);	
				}

				

			});
		
	}, []);

	

	return (

		<div className='Fill Column'>

			<Header name={name} icon={icon} ></Header>

			<div className='Spacer'></div>

			<AccountWidget details={details} user={user}  config={config}></AccountWidget>

			<div className='Spacer'></div>
			<div className='Spacer'></div>

		</div>

	);
}

