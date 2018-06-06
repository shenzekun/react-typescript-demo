import * as React from 'react';

interface ISFCCounterProps {
    label: string;
    count: number;
    onIncrement: () => any;
    onDecrement: () => any;
}

export const SFCCounter: React.SFC<ISFCCounterProps> = props => {
    const { label, count, onIncrement,onDecrement } = props;
    const handleIncrement = () => {
        onIncrement();
    };
    const handleDecrement = () => {
        onDecrement()
    }
    return (
        <div>
            <span>
                {label}: {count}{' '}
            </span>
            <button onClick={handleIncrement} type="button">
                +1
            </button>
            <button onClick={handleDecrement} type="button">
                -1
            </button>
        </div>
    );
};
