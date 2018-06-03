import * as React from 'react';

interface IStatefulProps {
    label: string;
}
interface IState {
    readonly count: number;
}
export class StatefulCounter extends React.Component<IStatefulProps, IState> {
    public readonly state: IState = {
        count: 0
    };
    public handleIncreate = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    public render() {
        const { handleIncreate } = this;
        const { label } = this.props;
        const { count } = this.state;
        return (
            <div>
                <span>
                    {label}: {count}{' '}
                </span>
                <button onClick={handleIncreate}>点击</button>
            </div>
        );
    }
}
