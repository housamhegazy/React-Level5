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
     const productsWithQuantity = {...action.payload,"Quantity":1}
     state.selectedProducts.push(productsWithQuantity) 
     console.log(state.selectedProducts);
    },
    increaseQuantity: (state, action) => {
        //action.payload => product From user => انا بزود المنتج اللي المستخدم اختاره 
      const increaseProduct = state.selectedProducts.find(product=>product.id=== action.payload.id)
      increaseProduct.Quantity+=1
    },
    decreaseQuantity: (state, action) => {
       //action.payload => product From user
       const decreaseProduct = state.selectedProducts.find(product=>product.id=== action.payload.id)
       decreaseProduct.Quantity-=1
       //delete product if quantity = 0
       if(decreaseProduct.Quantity === 0){
        state.selectedProducts = state.selectedProducts.filter(product=>product.id !== action.payload.id)
       }
    },
    
    deleteProduct: (state, action) => {
       //action.payload => product From user
      console.log('deleted');
      state.selectedProducts = state.selectedProducts.filter(product=>product.id !== action.payload.id)
      // deletedProduct
    },
    
  },
});

export const { addToCart,increaseQuantity,decreaseQuantity ,deleteProduct} = counterSlice.actions;

export default counterSlice.reducer;
