import * as React from 'react';

interface IStatefulCounterWithDefaultProps {
    label: string;
    initialCount?: number;
}

interface IDefaultProps {
    readonly initialCount: number;
}

interface IState {
    readonly count: number;
}

export const StatefulCounterWithDefault: React.ComponentClass<
    IStatefulCounterWithDefaultProps
> = class extends React.Component<IStatefulCounterWithDefaultProps & IDefaultProps> {
    public static defaultProps: IDefaultProps = {
        initialCount: 0
    };
    public readonly state: IState = {
        count: this.props.initialCount
    };
    public handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    public componentWillReceiveProps({ initialCount }: IStatefulCounterWithDefaultProps) {
        if (initialCount !== null && this.props.initialCount !== initialCount) {
            this.setState({ count: initialCount });
        }
    }
    public render() {
        const { handleIncrement } = this;
        const { label } = this.props;
        const { count } = this.state;
        return (
            <div>
                <span>
                    {label}: {count}{' '}
                </span>
                <button onClick={handleIncrement}>+1</button>
            </div>
        );
    }
};
