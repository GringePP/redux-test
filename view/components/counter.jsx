import React from 'react';

export default class Counter extends React.Component{
    render(){
        const {value, onIncreaseClick, onDecreaseClick, drinking, onxiDrinkingClick} = this.props;
        console.log(drinking);
        return(
            <div>
                <p>Click:{value}time</p>
                <button onClick = {onIncreaseClick}> Increase </button>
                <button onClick = {onDecreaseClick}>Decrease</button>
                <p>喝什么呢：{drinking}</p>
                <button onClick = {onxiDrinkingClick} className="drinking-button">喝什么呢！！</button>
            </div>
        )
    }
}