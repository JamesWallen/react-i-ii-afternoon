import React from 'react';

const Cycle = props => {
    return (
        <div className='display-button'>
            <button id='prev-button' onClick={() => props.previousUser()}> {'<'} Previous</button>
            <button className='special-button' onClick={() => props.delete()} >Delete</button>
            <button id='next-button' onClick={() => props.nextUser()}>Next {'>'}</button>
        </div>
    )
}

export default Cycle;