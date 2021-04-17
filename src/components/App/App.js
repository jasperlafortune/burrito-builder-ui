import React, { Component } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    this.addOrders();
  }

  addOrders() {
    getOrders()
      .then(newOrders => this.setState({orders: newOrders}))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrders={() => this.addOrders()} />
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
