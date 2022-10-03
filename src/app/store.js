import { configureStore } from '@reduxjs/toolkit';
import { budgetsReducer } from '../features/budgets/budgetsSlice';
import { transactionsReducer } from '../features/transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    budgets: budgetsReducer,
  },
});
