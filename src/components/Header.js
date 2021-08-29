import React from 'react';

const Header = ({totalEarnings}) => {
    return (
        <header>
            <h1 style={{color:"#FF9A32"}}>Earnings Tracker</h1>
            <div className="total-earnings">
                Total: ৳{totalEarnings}
            </div>
        </header>
    );
};

export default Header;