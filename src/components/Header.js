import React from 'react';

const Header = ({totalEarnings}) => {
    return (
        <header>
            <h1>Earnings Tracker</h1>
            <div className="total-earnings">
                ৳ {totalEarnings}
            </div>
        </header>
    );
};

export default Header;