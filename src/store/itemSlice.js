import { createSlice } from '@reduxjs/toolkit'
import { DEFAULT_ITEM } from '../data/items'



const itemSlice = createSlice({
    name: 'item',
    initialState: DEFAULT_ITEM,
    reducers: {
        addInitialItems: (state, action) => {
            return action.payload; // Should be an array of items
        }
    }
})

export const itemsActions = itemSlice.actions;

export default itemSlice;