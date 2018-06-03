import * as React from 'react';

interface IMouseProviderProps {
    render: (state: IMouseProviderState) => React.ReactNode;
}

interface IMouseProviderState {
    x: number;
    y: number;
}

export class MouseProvider extends React.Component<IMouseProviderProps, IMouseProviderState> {
    public readonly state: IMouseProviderState = {
        x: 0,
        y: 0
    };
    public handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };
    public render() {
        return (
            <div
                style={{ height: '200px', backgroundColor: '#eaf2f8' }}
                onMouseMove={this.handleMouseMove}
            >
                {this.props.render(this.state)}
            </div>
        );
    }
}
