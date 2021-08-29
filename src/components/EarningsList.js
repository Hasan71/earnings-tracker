import React from 'react';
import EarningItem from './EarningItem';

const EarningsList = ({earnings, setEarnings}) => {

    const removeEarning = i =>{
        let temp = earnings.filter((v, index) => index !== i);
        setEarnings(temp);
    }

    const sortByDate = (a, b) =>{
        return a.date-b.date;
    }

    return (
        <div className="earning-list">
            {
                earnings.sort(sortByDate).map((value, index) => (
                    <EarningItem 
                    key={index} 
                    earnings={value}
                    index={index}
                    removeEarning={removeEarning}
                    >
                    </EarningItem>
                ))
            }
        </div>
    );
};

export default EarningsList;