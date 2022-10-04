import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = ['housing', 'groceries', 'gas', 'utilities'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }));
export const selectBudgets = (state) => state.budgets;

const budgetsSlice = createSlice({
    name: 'budgets',
    initialState,
    reducers: {
        editBudget: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const {
    editBudget,
} = budgetsSlice.actions;

export const budgetsReducer = budgetsSlice.reducer;