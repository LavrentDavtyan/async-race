// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import * as api from '../../api/garage';


// type GarageState = {
// cars: api.Car[];
// total: number;
// page: number;
// loading: boolean;
// editing?: api.Car | null;
// };


// const initialState: GarageState = { cars: [], total: 0, page: 1, loading: false, editing: null };


// export const fetchCars = createAsyncThunk('garage/fetchCars', async (page: number) => {
// const res = await api.getCars(page, 7);
// const total = Number(res.headers['x-total-count'] ?? res.data.length);
// return { data: res.data, total };
// });


// export const addCar = createAsyncThunk('garage/addCar', async (payload: { name: string; color: string }) => {
// const res = await api.createCar(payload);
// return res.data as api.Car;
// });


// const garageSlice = createSlice({
// name: 'garage',
// initialState,
// reducers: {
// setPage(state, action: PayloadAction<number>) {
// state.page = action.payload;
// },
// setEditing(state, action: PayloadAction<api.Car | null>) {
// state.editing = action.payload;
// },
// },
// extraReducers: (builder) => {
// builder
// .addCase(fetchCars.pending, (s) => { s.loading = true; })
// .addCase(fetchCars.fulfilled, (s, a) => {
// s.loading = false;
// s.cars = a.payload.data;
// s.total = a.payload.total;
// })
// .addCase(addCar.fulfilled, (s, a) => {
// s.cars.unshift(a.payload);
// });
// },
// });


// export const { setPage, setEditing } = garageSlice.actions;
// export default garageSlice.reducer;