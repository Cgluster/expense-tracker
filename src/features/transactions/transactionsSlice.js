import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = ['housing', 'groceries', 'gas', 'utilities'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]));

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => 
Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.push(action.payload);
        },
        deleteTransaction: (state, action) => {
            state.filter(transaction => transaction.id !== action.payload.id);
        },
    },
});

export const {
    addTransaction,
    deleteTransaction,
} = transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;