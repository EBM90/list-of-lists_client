import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLists, fetchList } from '../../actions'
import { Link } from 'react-router-dom'

class ProductList extends Component {

    componentDidMount() {
        this.props.fetchLists()
    }

    // removeProduct = (id) =>{
    //     this.props.deleteProduct(id)
    // }
    renderList =() =>{
        const {lists} = this.props

        return (lists.map((list, index) =>{
            return( <Link to={`/list/${list._id}`}>

            <div className='product' key={index}>
                 <p className='info'>{list.name}</p>
            

                 <button className='just_icon'>
                            <i className="fas fa-times "></i>
                          </button>
             </div>
             </Link>)
         }))
    }
    
    render() {
        console.log(this.props, 'these are the products props')
        return (
            <div className='list_form'>
                {this.props.lists.length !==0 ? this.renderList() : 
                
                    <h3>Create your first list</h3>
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state, 'this is the state')
    return {lists: Object.values(state.lists)}
}

export default connect(mapStateToProps, { fetchLists, fetchList })(ProductList)