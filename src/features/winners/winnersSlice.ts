import { createSlice } from '@reduxjs/toolkit';


type Winner = { id: number; wins: number; time: number };


type WinnersState = { winners: Winner[]; page: number; total: number };


const initialState: WinnersState = { winners: [], page: 1, total: 0 };


const winnersSlice = createSlice({
name: 'winners',
initialState,
reducers: {},
});


export default winnersSlice.reducer;