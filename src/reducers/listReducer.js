import _lo from 'lodash'

export default (state = {}, action) =>{ 

    switch (action.type) {
        case 'FETCH_LISTS':
            return {...state, ..._lo.mapKeys(action.payload, '_id')};
        case 'FETCH_LIST':
            return {...state, [action.payload._id]: action.payload};
        case 'CREATE_LIST':
            return {...state, [action.payload._id]: action.payload};
        case 'DELETE_LIST':
            return _lo.omit(state, action.payload);
        default:
            return state;
    }
}
