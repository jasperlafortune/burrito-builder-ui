import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleIngredientChange = (event) => {
    // prevent buttons from submitting the form
    event.preventDefault();
    // temporary local handles
    let ingredients = [...this.state.ingredients];
    const ingredient = event.target.name;
    // check if we've already added this ingredient
    if (ingredients.includes(ingredient)) {
      // if so, remove it
      this.setState({ingredients: ingredients.filter((item) => item !== ingredient)})
    } else {
      // if not, add it
      ingredients.push(ingredient)
      this.setState({ingredients: ingredients})
    }
  }

  validateOrder = () => {
    let isInvalid = false;
    if (!this.state.name) {
      isInvalid = true;
    }
    if (!this.state.ingredients.length) {
      isInvalid = true;
    }
    return isInvalid;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button disabled={this.validateOrder()} onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
