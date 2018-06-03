import * as React from 'react';

interface ISFCCounterProps {
    label: string;
    count: number;
    onIncrement: () => any;
}

export const SFCCounter: React.SFC<ISFCCounterProps> = props => {
    const { label, count, onIncrement } = props;
    const handleIncrement = () => {
        onIncrement();
    };
    return (
        <div>
            <span>
                {label}: {count}{' '}
            </span>
            <button onClick={handleIncrement} type="button">
                加1
            </button>
        </div>
    );
};
