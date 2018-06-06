import * as React from 'react';
import './App.css';
import { MouseProvider } from './components/mouse-provider';
import { SFCCounter } from './components/sfc-counter';
import { StatefulCounter } from './components/stateful-counter';
import { SFCSpreadAttributes } from './components/sfc-spread-attributes';
import { NameProvider } from './components/name-provider';
import { StatefulCounterWithDefault } from './components/stateful-counter-with-default';
import { GenericList } from './components/generic-list';
import { User } from './models/user';
import { withState } from './hoc/with-state';
import Counter from './connected/sfc-counter-connected';

const users = [
    new User('Rosamonte', 'Especial'),
    new User('Aguantadora', 'Despalada'),
    new User('Taragui', 'Vitality')
];

const SFCCounterWithState = withState(SFCCounter);
class App extends React.Component {
    public state = { count: 0 };
    public render() {
        return (
            <div className="App">
                <SFCCounter
                    label="无状态计数组件"
                    count={this.state.count}
                    onIncrement={() => {
                        this.setState({ count: this.state.count + 1 });
                    }}
                />
                <hr />
                <StatefulCounter label="状态计数组件" />
                <hr />
                <StatefulCounterWithDefault label="无状态计数组件带默认值" initialCount={1} />
                <hr />
                <SFCCounterWithState label="高阶无状态计数组件" />
                <hr />
                <Counter label="连接reudx的无状态计数组件"/>
                <hr />
                <MouseProvider
                    render={mouse => (
                        <p>
                            鼠标位置 {mouse.x}, {mouse.y}
                        </p>
                    )}
                />
                <hr />
                <SFCSpreadAttributes style={{ backgroundColor: 'lightcyan' }}>
                    {'使用扩展符'}
                </SFCSpreadAttributes>
                <hr />
                <NameProvider>{({ name }) => <div>{name}</div>}</NameProvider>
                <hr />
                <GenericList
                    items={users}
                    itemRenderer={item => <div key={item.id}>{item.fullName}</div>}
                />
            </div>
        );
    }
}

export default App;
