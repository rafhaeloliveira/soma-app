export const addToBag = (product) => {

    return (dispatch) => {
        dispatch({ type: "ON_BAG_REQUEST" });

        try {
            dispatch({ type: "ADD_TO_BAG", payload: product });

        } catch (error) {
            dispatch({ type: "ON_BAG_FAILED", payload: error.message });
        }
    }

}

export const removeFromBag = (product) => {

    return (dispatch) => {
        dispatch({ type: "ON_BAG_REQUEST" });

        try {
            dispatch({ type: "REMOVE_FROM_BAG", payload: product });

        } catch (error) {
            dispatch({ type: "ON_BAG_FAILED", payload: error.message });
        }
    }

}

export const changeBagSize = (product) => {

    return (dispatch) => {
        dispatch({ type: "ON_BAG_REQUEST" });

        try {
            dispatch({ type: "UPDATE_QUANTITY", payload: product });

        } catch (error) {
            dispatch({ type: "ON_BAG_FAILED", payload: error.message });
        }
    }

}