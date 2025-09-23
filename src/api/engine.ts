import client from './client';


export type EngineStatus = 'started' | 'stopped' | 'drive';


export const patchEngine = (id: number, status: EngineStatus, speed?: number) =>
client.patch(`/engine?id=${id}&status=${status}${typeof speed === 'number' ? `&speed=${speed}` : ''}`);