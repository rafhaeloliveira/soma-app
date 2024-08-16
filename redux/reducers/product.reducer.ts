const initialState = {
  loading: false,
  products: [],
  error: ''
}

export const productReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ON_PRODUCTS_REQUEST':
      return {
        ...state,
        products:[],
        loading: true
      }
    
    case 'ON_PRODUCTS_FAILED':
      return {
        ...state,
        loading: false,
        products:[],
        error: action.payload
      }

    case 'GET_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload
      }

    default:
      return state;
  }

}
  