import _lo from 'lodash'

export default (state = {}, action) =>{ 

    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {...state, ..._lo.mapKeys(action.payload, '_id')};
        case 'CREATE_PRODUCT':
            return {...state, [action.payload._id]: action.payload};
        case 'DELETE_PRODUCT':
            return _lo.omit(state, action.payload);
        default:
            return state;
    }
}
