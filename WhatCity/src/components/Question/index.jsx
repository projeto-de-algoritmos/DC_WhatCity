import React from 'react';
import './style.css';

export default function Question(props) {
    return (
        <>
            <h1 className='question'>
                What City is the 
                <input
                    id='number'
                    name='number'
                    type='number'
                    value={props.number}
                    onChange={props.handleChangeNumber}
                    className='numberInput'
                >
                </input>
                with the smallest
                <select
                    id='question'
                    name='question'
                    value={props.question}
                    onChange={props.handleChangeQuestion}
                    className='questionSelect'
                >
                    {props.questions.map((question, index) => {
                        return (
                            <option key={index} value={question} className='questionOption'>
                                {question}
                            </option>
                        )
                    })}
                </select>
                ?
            </h1>
        </>
    );
}