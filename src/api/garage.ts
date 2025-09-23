import client from './client';

export type Car = {
    id: number;
    name: string;
    color: string;
};


export const getCars = (page = 1, limit = 7) => client.get<Car[]>(`/garage?_page=${page}&_limit=${limit}`);
export const getCarsCount = () => client.get<{ length: number }>(`/garage`);
export const createCar = (payload: { name: string; color: string }) => client.post('/garage', payload);
export const updateCar = (id: number, payload: { name: string; color: string }) => client.patch(`/garage/${id}`, payload);
export const deleteCar = (id: number) => client.delete(`/garage/${id}`);
export const createMany = (cars: Array<{ name: string; color: string }>) => Promise.all(cars.map(c => createCar(c)));