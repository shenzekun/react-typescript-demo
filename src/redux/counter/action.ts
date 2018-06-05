import { ADD, INCREMENT } from './constants';
import { action } from 'typesafe-actions';
export const increment = () => action(INCREMENT);
export const add = (amount: number) => action(ADD, amount);
