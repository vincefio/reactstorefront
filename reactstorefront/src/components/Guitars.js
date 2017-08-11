import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import style from '../css/style.css'

//create our Guitar component
class Guitar extends React.Component {
	//set a generic state
	constructor(){
		super();

		this.state = {
			// visible: false
		};

		
	}

	render (){
		return(

			
				<div className="container">
				<h1>Guitars</h1>
					<Row bsClass="row">
						<Col xs={8} md={8} className="guitarBox"> 
							<div className="guitars"></div>
							<p>{this.props.available}</p>
						</Col>
					</Row>
				</div>
		);
	}
}

export default Guitar;