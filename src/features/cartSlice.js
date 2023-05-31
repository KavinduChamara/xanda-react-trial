import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    cartItems: [],
    error: "",
};

export const addItem = createAsyncThunk("item/addItem", (item) => {
    return item;   
});

export const removeItem = createAsyncThunk("item/removeItem", (item) => {
    return item;
});

export const fetchItems = createAsyncThunk("item/fetchItems", () => {
    return true;
});
  
const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    extraReducers: (builder) => {
    
    //Add items
    builder.addCase(addItem.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = [...state.cartItems, action.payload];
        state.error = "";
    });
    builder.addCase(addItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });

    //Remove items
    builder.addCase(removeItem.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(removeItem.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = state.cartItems.filter((el) => el.id !== action.payload);
        state.error = "";
    });
    builder.addCase(removeItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });

    // Fetch items
    builder.addCase(fetchItems.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = state.cartItems;
        state.error = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });
  },
});
  
//reducer
export default cartSlice.reducer;