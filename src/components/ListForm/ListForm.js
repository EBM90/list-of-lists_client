import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { createList } from '../../actions'
import './ListForm.css'



class ListForm extends Component {
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

  renderTextarea = ({input, label, meta}) =>{
    return(
      <div>
        <label>{label}</label>
        <textarea {...input} autoComplete='off'/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) =>{
     this.props.createList(formValues);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, showForm, changeShowForm } = this.props
    return (
      <div className= 'list_form'>
        
        {showForm ? <form className='product_form' onSubmit={handleSubmit(this.onSubmit)}>
        <div className='fields'>
                <Field name="name" component={this.renderInput} type="text" label='Name: '/>
                <Field name="description" component={this.renderTextarea}  label='Description: '/>
        </div>
                
            <div className='button'>
              <button className='add_button' type="submit" disabled={pristine || submitting}>Add</button>
            </div>
          </form> : <button className='add_button' onClick={() => changeShowForm()}>Create a list</button>}
          
        </div>
        )
      }
}

const validate = (formValues) => {
  const errors = {}
  if(!formValues.name){
    errors.name = 'You must enter a name for this list.'
  }

  if(!formValues.description){
    errors.description = 'You must enter a description.'
  }

  return errors
}

const mapPropsToState = (state) =>{
  return {lists: state.lists}
}



const formWrapped =  reduxForm({
  form: 'list', // a unique name for this form
  validate
})(ListForm);

export default connect(mapPropsToState, {createList})(formWrapped)