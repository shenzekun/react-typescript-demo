import { Dispatch, connect } from 'react-redux';
import * as Actions from '../redux/counter/action';
import {SFCCounter} from '../components/sfc-counter';

function mapDispatchToProps(dispatch: Dispatch<Actions.IAll>) {
    return {
        onIncrement: () => dispatch(Actions.increment()),
        onDecrement: () => dispatch(Actions.decrement())
    };
}

function mapStateToProps(state: { reduxCounter: number }) {
    return {
        count: state.reduxCounter
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SFCCounter);
