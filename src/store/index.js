import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemSlice';
import bagSlice from './bagSlice';

const myntraStore = configureStore({
    reducer: {
        item: itemSlice.reducer,
        bag: bagSlice.reducer,
    },
});

export default myntraStore;