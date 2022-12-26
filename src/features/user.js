import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    phone: "",
    plan: {
      name: "",
      yearly: false,
      price: 0,
    },
    addons: [],
  },
  reducers: {
    // modify: state => {
    //     state
    // }
  },
});
