//include React
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import style from '../css/style.css'
import Guitar from './Guitars'
import helper from '../utils/helpers'
import axios from 'axios'

//create our main component
class Main extends React.Component {
	//set a generic state
	constructor(){
		super();

		this.state = {
			
		};
	}

	displayItems = () => {
		// event.preventDefault();
    console.log('clic works')
    return axios.get('api/guitars').then(results => {	
    			console.log(results.data[0])	    	
    			//loop through dbPost to get relevant information
		    	for(var i = 0; i < results.data.length; i++){
		    			console.log(results.data[i].product_name + " $" + results.data[i].price)
		    	}
		    })
  }

	render() {
		return (
			<div className="wrapper">
				<div className="jumbotron text-center">
					<h2>Vince's Music Store</h2>
				</div>
				
				<div className="container">
					<Row bsClass="row">
						<Col xs={4} md={4} className="directoryBox"> 
							<Button bsSize="lg" onClick={this.displayItems}
							block>
								Guitars
							</Button>
						</Col>

						<Col xs={8} className="itemList">

						</Col>

					</Row>
				</div>
			</div>
		)
	}
}

//export the component back for use in other files
export default Main;