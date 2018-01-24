import React from 'react';
import Counter from './counter';
import {connect} from 'react-redux';
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

function mapStateToProps(state){
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);