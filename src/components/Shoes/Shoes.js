import React from 'react';
import { add, multify } from '../../ulitilities/calculate';


const Shoes = () => {
    const first =13;
    const second =11;
    const result = multify(first, second);
    const sum = add(first,second);
    return (
        <div>
            <h3>This is shoes components</h3>
            <p>result:{result} and total:{sum}</p>
        </div>
    );
};

export default Shoes;