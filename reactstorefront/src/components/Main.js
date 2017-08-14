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
			current: ""
		};
	}

	displayGuitars = () => {
		// event.preventDefault();
    return axios.get('api/guitars').then(results => {	

    			var newItems=[]
    			var newItemPrice=[]
    			
    			//for loop to push all of the results into the state
    			//this combines the price and name into a string
		    	for(var i = 0; i < results.data.length; i++){
		  				var itemString = results.data[i].product_name + " $" + results.data[i].price + " "
		    			newItems.push(itemString)
		    	}
		    	//set the item list to an array to render with guitar component
		    	//.map sets every item in the items Array to a li
		    	var guitarList = newItems.map((guitar) =>
		    		//.toString is used bc a key is needed in React
						<li key={guitar.toString()}>{guitar}</li>
					);

		    	this.setState({ 
		    			items: guitarList,
		    			current: "Guitars"
		    	})
		    	// console.log('results ' + results.data)		    	
		    	// console.log('items ' + this.state.itemPrice)
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
						<Col xs={4} xsOffset={1} className="directoryBox"> 
							<Button bsSize="lg" onClick={this.displayGuitars}
							block>
								Guitars
							</Button>
							<Button bsSize="lg" onClick={this.displayGuitars}
							block>
								Bass Guitars
							</Button>
							<Button bsSize="lg" onClick={this.displayGuitars}
							block>
								Drums
							</Button>
						</Col>

						<Col xs={5} xsOffset={2} className="itemList">
						 {/*Passing items to Guitar component as props */}
							<Guitar available={this.state.items} header={this.state.current}/>
						 
						</Col>

					</Row>
				</div>
			</div>
		)
	}
}

//export the component back for use in other files
export default Main;