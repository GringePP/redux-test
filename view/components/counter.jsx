import React from 'react';

export default class Counter extends React.Component{
    render(){
        const {value, onIncreaseClick, onDecreaseClick} = this.props;
        return(
            <div>
                <p>Click:{value}time</p>
                <button onClick = {onIncreaseClick}> Increase </button>
                <button onClick = {onDecreaseClick}>Decrease</button>
            </div>
        )
    }
}