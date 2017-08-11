//include React
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import style from '../css/style.css'
import Guitar from './Guitars'
import helper from '../utils/helpers'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

//create our main component
class Main extends React.Component {
	//set a generic state
	constructor(){
		super();

		this.state = {
			items: [],
			itemPrice: []
		};
	}

	displayItems = () => {
		// event.preventDefault();
    return axios.get('api/guitars').then(results => {	

    			var newItems=[]
    			var newItemPrice=[]
    			//for loop to push all of the results into the state
		    	for(var i = 0; i < results.data.length; i++){
		  				// var itemString = results.data[i].product_name
		    			// console.log(results.data[i].product_name + " $" + results.data[i].price)
		    			newItems.push(results.data[i].product_name)
		    			newItemPrice.push(results.data[i].price)
		    	}

		    	this.setState({ 
		    			items: newItems,
		    			itemPrice: newItemPrice
		    	})
		    	// console.log('results ' + results.data)		    	
		    	console.log('items ' + this.state.itemPrice)
		    });
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
						 {/*Passing items to Guitar component as props */}
							<Guitar available={this.state.items}/>
						 
						</Col>

					</Row>
				</div>
			</div>
		)
	}
}

//export the component back for use in other files
export default Main;