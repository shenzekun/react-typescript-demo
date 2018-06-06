import { INCREMENT, IDECREMENT } from './constants';
import { IAll } from './action';
// const initState = {
//     count: 1
// }
export const reduxCounter = (state = 0, action: IAll) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case IDECREMENT:
            return state - 1;
        default:
            return state;
    }
};
