import React from 'react';
import './blast.scss'
const Blast = ({ letterAnimation, title, index }) => {
    return (
        <span>
            {title.map((char, _i) => {
                return (<span key={_i} className={`${letterAnimation} ___${_i + index}`}>{char}</span>)
            })}
        </span>
    );
};



export default Blast;