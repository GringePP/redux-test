import React from 'react';

export default class Counter extends React.Component{
    render(){
        const {value, onIncreaseClick} = this.props;
        return(
            <div>
                <p>{value}</p>
                <button onClick = {onIncreaseClick}> Increase </button>
            </div>
        )
    }
}