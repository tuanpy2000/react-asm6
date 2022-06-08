import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cocktail: [],
    quantity: 0
};

const globalSlice = createSlice({
    name: 'globalSlice',
    initialState: initialState,
    reducers: {
        addDrink: (state, action) => {
            state.cocktail.push(action.payload)
        },
        addQuantity: (state, action) => {
            state.quantity = action.payload
        }
    }
});
const { actions, reducer } = globalSlice;
export { actions as GlobalActions, reducer as GlobalReducer };