import React from 'react';

const EarningItem = ({earnings, index, removeItem) => {

    let date = new Date(income.date);
    let day = date.getDate();
    let monts = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = i =>{
        removeEarnings(i);
    }

    return (
        <div>
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