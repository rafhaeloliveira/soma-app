export const getAllProducts = () => {
    return async (dispatch) => {
        dispatch({ type: 'ON_PRODUCTS_REQUEST' });

        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/products`)

            const data = await response.json();

            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: data })

        } catch (error) {
            console.error("ERRO: Erro ao consultar produtos:", error.message);
            dispatch({ type: 'ON_PRODUCTS_FAILED', payload: error.message });
        }
    }
}
