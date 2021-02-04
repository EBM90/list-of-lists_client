import productservice from '../lib/product-service'
import listservice from '../lib/list-service'

export const fetchProducts = () => async dispatch  =>{
    const products = await productservice.getAllProducts()
    dispatch({
        type:'FETCH_PRODUCTS',
        payload: products
    })

}

export const fetchLists = () => async dispatch  =>{
    const lists = await listservice.getAllLists()
    dispatch({
        type:'FETCH_LISTS',
        payload: lists
    })

}

export const createProduct = values => async dispatch => {
    const {item, amount, price} = values
    const newProduct = await productservice.addProduct(item, amount, price)
    dispatch({
        type: 'CREATE_PRODUCT',
        payload: newProduct
    })
}

export const createList = values => async dispatch => {
    const {name, description} = values
    const newList = await listservice.addList(name, description)
    dispatch({
        type: 'CREATE_LIST',
        payload: newList
    })
}

export const fetchList = id => async dispatch => {
    const theList = await listservice.getList(id)
    dispatch({
        type: 'FETCH_LIST',
        payload: theList
    })
}

// export const deleteProduct = id => async dispatch => {
//     const oldProduct = await productservice.deleteProduct(id)
//     dispatch({
//         type: 'DELETE_PRODUCT',
//         payload: id
//     })
// }

