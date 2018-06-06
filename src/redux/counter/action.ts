import * as constants from './constants';

interface IIncrement {
    type: string;
}
interface IDecrement {
    type: string;
}

export type IAll = IDecrement | IIncrement;

export const increment = (): IIncrement => {
    return {
        type: constants.INCREMENT
    };
};

export const decrement = (): IDecrement => {
    return {
        type: constants.IDECREMENT
    };
};
