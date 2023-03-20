import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [
    
  ],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  //action.payload => product From Api => العنصر اللي بداخل الاقواس
  reducers: {
    addToCart: (state, action) => {
        //action.payload => product From Api => انا بضيف المنتج القادم من الايه بي اي 
      console.log('added to cart');
    },
    increaseQuantity: (state, action) => {
        //action.payload => product From user => انا بزود المنتج اللي المستخدم اختاره 
      console.log('increase');
    },
    decreaseQuantity: (state, action) => {
       //action.payload => product From user
      console.log('decrease');
    },
    
    deleteProduct: (state, action) => {
       //action.payload => product From user
      console.log('deleted');
    },
    
  },
});

export const { addToCart,increaseQuantity,decreaseQuantity ,deleteProduct} = counterSlice.actions;

export default counterSlice.reducer;
