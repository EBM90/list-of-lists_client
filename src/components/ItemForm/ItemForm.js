import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { createProduct } from '../../actions'
import './ItemForm.css'


class ItemForm extends Component {
  renderError({error, touched}){
    if(touched && error){
      return (
        <div className='error_message'>
            <div>
              {error}
            </div>
        </div>
      )
    }
  }

  renderInput = ({input, label, meta}) =>{
    return(
      <div>
        <label>{label}</label>
        <input {...input} autoComplete='off'/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) =>{
     this.props.createProduct(formValues);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div >
          <form className='product_form' onSubmit={handleSubmit(this.onSubmit)}>
                <Field name="item" component={this.renderInput} type="text" label='Item: '/>
                <Field name="price" component={this.renderInput} type="text" label='Price: '/>
                <Field name="amount" component={this.renderInput} type="text" label='Amount: '/>
            <div>
              <button className='add_button' type="submit" disabled={pristine || submitting}>Add</button>
            </div>
          </form>
        </div>
        )
      }
}

const validate = (formValues) => {
  const errors = {}
  if(!formValues.item){
    errors.item = 'You must enter a name for this item.'
  }

  if(!formValues.price){
    errors.price = 'You must enter the price of this item.'
  }

  if(!formValues.amount){
    errors.amount = 'You must enter the amount.'
  }

  return errors
}

const mapPropsToState = (state) =>{
  return {products: state.products}
}



const formWrapped =  reduxForm({
  form: 'item', // a unique name for this form
  validate
})(ItemForm);

export default connect(mapPropsToState, {createProduct})(formWrapped)