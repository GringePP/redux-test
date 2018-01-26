import React from 'react';
import Counter from './counter';
import {connect} from 'react-redux';
import './style/index.scss';
/*export default class App extends React.Component{
    contructor(props){

    }

    render(){
        return(
            <div className="test-container">
                okok
            </div>
        )
    }
}*/
const increaseAction = {type: 'ADD_COUNT'};
const decreaseAction = {type: 'REDUCE_COUNT'};
const xiDrinkingAction = {type: 'XI_DRINKING'};
function mapStateToProps(state){
    return {
        value: state.count,
        drinking: state.drinking
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncreaseClick: () => dispatch(increaseAction),
        onDecreaseClick: () => dispatch(decreaseAction),
        onxiDrinkingClick: () => dispatch(xiDrinkingAction)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);