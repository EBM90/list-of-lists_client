import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts, deleteProduct } from '../../actions'
import './ProductList.css'

class ProductList extends Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    removeProduct = (id) =>{
        this.props.deleteProduct(id)
    }
    renderList =() =>{
        const {products} = this.props
        products.sort((a, b)=>{
            if(a.item<b.item){
                return -1
            } else {
                return 1
            }})

        return (products.map((product, index) =>{
            return( <div className='product' key={index}>
                 <p className='info'>Item: {product.item}</p>
                 <p className='info'>Price: {product.price}€</p>
                 <p className='info'>Qt: {product.amount}</p>
                 <button className='just_icon'>
                            <i className="fas fa-times "></i>
                          </button>
             </div>)
         }))
    }
    
    render() {
        console.log(this.props, 'these are the products props')
        return (
            <div className='list'>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'this is the state')
    return {products: Object.values(state.products)}
}

export default connect(mapStateToProps, { fetchProducts })(ProductList)