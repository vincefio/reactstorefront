import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import style from '../css/style.css'

//create our Guitar component
class Bass extends React.Component {
	//set a generic state
	constructor(){
		super();

		this.state = {
				list: ""
		};
	}

	render (){
		return(

			
				<div className="container">			
					<Row bsClass="row">
						<Col  className="guitarBox">
							<h1>{this.props.header}</h1> 
							{this.props.available}
						</Col>
					</Row>
				</div>
		);
	}
}

export default Bass;