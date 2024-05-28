import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    message: "Hola Mundo! Alfonso BC aqui",
};
const helloSlice = createSlice({
    name: "hola",
    initialState,
    reducers: {},
});

export default helloSlice.reducer;