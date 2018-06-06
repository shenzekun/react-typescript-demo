import * as React from 'react';

interface InjectedProps {
    count: number;
    onIncrement: () => any;
    onDecrement: () => any;
}

export const withState = <WrappedProps extends InjectedProps>(
    WrappedComponent: React.ComponentType<WrappedProps & InjectedProps>
) => {
    // 从对象 T 中排除 key 是 K 的属性
    type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
    // 去掉 count 和 onIncrement
    type HocProps = Omit<WrappedProps, keyof InjectedProps> &
        Partial<{
            initialCount: number;
        }>;
    type HocState = {
        readonly count: number;
    };
    return class WithState extends React.Component<HocProps, HocState> {
        public static displayName = `withState(${WrappedComponent.name})`;
        public static readonly WrappedComponent = WrappedComponent;
        public readonly state: HocState = {
            count: Number(this.props.initialCount) || 0
        };
        public handleIncrement = () => {
            this.setState({ count: this.state.count + 1 });
        };
        public handleDecrement = () => {
            this.setState({
                count: this.state.count - 1
            });
        };
        public render() {
            const { ...restProps } = this.props as {};
            const { count } = this.state;
            return (
                <WrappedComponent {...restProps} count={count} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
            );
        }
    };
};
