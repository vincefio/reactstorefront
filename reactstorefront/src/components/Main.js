//include React
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import style from '../css/style.css'
import Guitar from './Guitars'

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