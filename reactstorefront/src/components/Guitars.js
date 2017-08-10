import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import style from '../css/style.css'

//create our Guitar component
class Guitar extends React.Component {
	//set a generic state
	constructor(){
		super();

		this.state = {

		};
	}

	render (){
		return(
			<h1>Guitars</h1>
		);
	}
}

export default Guitar;