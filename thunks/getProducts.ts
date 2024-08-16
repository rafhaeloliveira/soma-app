import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchTodoById = todoId => async dispatch => {
//     const response = await client.get(`/fakeApi/todo/${todoId}`)
//     dispatch(todosLoaded(response.todos))
// }

export const getAllProducts = () => async (dispatch: (arg0: { type: string; payload: Promise<any>; }) => void) => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

        dispatch({ type: 'products/getAll', payload: response.json() })
    } catch (error) {
        console.error("Erro ao consultar produtos!");
        throw error;
    }
}

// export const getAllProducts = createAsyncThunk('products/getAll', 
//     async () => {
//         try {
//             const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
            
//             return response.json();
//         } catch (error) {
//             console.error("Erro ao consultar produtos");
//             throw error;
//         }
//     }
// )