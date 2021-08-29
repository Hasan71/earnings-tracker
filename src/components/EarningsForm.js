import React, { useRef } from 'react';

const EarningsForm = ({earnings, setEarnings}) => {

    const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null);

    const AddEarning = e =>{
        e.preventDefault();
        
        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1] - 1, d[2]);

        setEarnings([...earnings, {
            "desc": desc.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        }])

        desc.current.value = "";
        price.current.value = "";
        date.current.value = "";

    }

    return (
        <form className="earnings-form" onSubmit={AddEarning}>
            <div className="form-inner">
                <input type="text" name="desc" id="desc" placeholder="Earnings Description..." ref={desc} required/>
                <input type="number" name="price" id="price" placeholder="Price..." ref={price} required/>
                <input type="date" name="date" id="date" placeholder="Earnings Date..." ref={date} required />
                <input type="submit" value="Add Earning" />
            </div>
        </form>
    );
};

export default EarningsForm;