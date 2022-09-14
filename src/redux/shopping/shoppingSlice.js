import { createSlice } from "@reduxjs/toolkit";

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    balance: 100000000000,
    products: [
      {
        id: 1,
        name: "Hamburger",
        quantity: 0,
        price: 2,
        image: "/images/hamburger.jpg",
      },
      {
        id: 2,
        name: "Coca-Cola",
        quantity: 0,
        price: 1,
        image: "/images/cola.png",
      },
      {
        id: 3,
        name: "Waffle",
        quantity: 0,
        price: 2,
        image: "/images/waffle.jpg",
      },
      {
        id: 4,
        name: "AirPods",
        quantity: 0,
        price: 150,
        image: "/images/airpods.png",
      },
      {
        id: 5,
        name: "iPhone",
        quantity: 0,
        price: 850,
        image: "/images/iphone.png",
      },
      {
        id: 6,
        name: "Bike",
        quantity: 0,
        price: 1500,
        image: "/images/bike.png",
      },
      {
        id: 7,
        name: "Motorcycle",
        quantity: 0,
        price: 50000,
        image: "/images/motorcycle.png",
      },
      {
        id: 8,
        name: "Car",
        quantity: 0,
        price: 15000000,
        image: "/images/car.jpg",
      },
    ],
    totalPayment: 0,
  },
  reducers: {},
});

export default shoppingSlice.reducer;
