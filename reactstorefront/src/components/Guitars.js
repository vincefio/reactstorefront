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

	showGuitars = (props) =>{
			var guitarList = "<div>";
	    for(var i =0; i < props.available.length; i++){
	    	guitarList += "<h2>" + props.available[i] + "</h2>"

	    }
	  
	}

		componentDidUpdate(props){
		console.log("Component Updated");
		console.log(this.props.available);
		var guitarList = "<div>";
	    for(var i =0; i < this.props.available.length; i++){
	    	guitarList += "<h2>" + this.props.available[i] + "</h2>"
	    }
	    console.log("list " + guitarList)
		}

	render (){
		return(

			
				<div className="container">
				<h1>Guitars</h1>
					<Row bsClass="row">
						<Col xs={8} md={8} className="guitarBox"> 
							<div className="guitars">

							</div>
							{/*this.props.available*/}
						</Col>
					</Row>
				</div>
		);
	}
}

export default Guitar;