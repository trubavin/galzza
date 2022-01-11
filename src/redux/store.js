import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./productSlicer";
import axios from "axios";


// axios.get('https://galzza-default-rtdb.europe-west1.firebasedatabase.app/product.json')
//     .then(function (response) {
//         // handle success
//         const product = response.data
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })

export const store = configureStore({
    reducer: {
        product: productReducer
    }
})
