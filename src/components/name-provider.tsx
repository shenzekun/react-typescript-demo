import * as React from 'react';

interface INameProviderProps {
    children: (state: INameProviderState) => React.ReactNode;
}

interface INameProviderState {
    name: string;
}

export class NameProvider extends React.Component<INameProviderProps,INameProviderState> {
    public readonly state = {
        name: '名字 hhh'
    }
    public render() {
        return this.props.children(this.state)
    }
}
