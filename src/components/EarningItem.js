import React from 'react';

const EarningItem = ({earnings, index, removeEarning} )=> {

    let date = new Date(earnings.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = i =>{
        removeEarning(i);
    }

    return (
        <div className="earning-item">
            <button className="remove-item" onClick=
                {()=>removeHandle(index)}
            > x </button>
            <div className="desc">{earnings.desc}</div>
            <div className="price">৳{earnings.price}</div>
            <div className="date">{day + "/" + month + "/" + year}</div>

        </div>
    );
};

export default EarningItem;