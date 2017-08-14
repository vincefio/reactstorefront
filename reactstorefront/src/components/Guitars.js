import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import style from '../css/style.css'

//create our Guitar component
class Guitar extends React.Component {
	//set a generic state
	constructor(){
		super();

		this.state = {
				list: ""
		};
	}


		//this function is not being used as of now
		componentDidUpdate(props){
			console.log("Component Updated");
			// console.log("props " + this.props.available);
			// var guitarList = this.props.available.map((guitar) =>
			// 	<li>{guitar}</li>
			// );
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

export default Guitar;