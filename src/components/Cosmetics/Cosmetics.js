import React from 'react';
import { getTotal } from '../../ulitilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
   const cosmetics = [
    {
      "id": "641ed108e0a4b075011dbbe4",
      "price": 287,
      "eyeColor": "brown",
      "name": "Morris Rojas"
    },
    {
      "id": "641ed108907fe89e78c7d4e4",
      "price": 222,
      "eyeColor": "blue",
      "name": "Gregory Barr"
    },
    {
      "id": "641ed1087b61e82f651fa827",
      "price": 50,
      "eyeColor": "brown",
      "name": "Kristie Bryant"
    },
    {
      "id": "641ed108868616e57014c668",
      "price": 343,
      "eyeColor": "green",
      "name": "Janice Cross"
    },
    {
      "id": "641ed108e219eec5c1b68375",
      "price": 276,
      "eyeColor": "blue",
      "name": "Lott Quinn"
    },
    {
      "id": "641ed108e0e6671b41f41f1e",
      "price": 169,
      "eyeColor": "brown",
      "name": "Roth Morris"
    }
  ]
  const total = getTotal(cosmetics);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>monet need:{total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id}
                    cosmetic ={cosmetic}
                    ></Cosmetic>)
            }
           
        </div>
    );
};

export default Cosmetics;