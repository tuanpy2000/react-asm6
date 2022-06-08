import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

import DrinkList from './Component/DrinkList';

export default function Home() {
    const [drinkDatas, setDrinkDatas] = useState([])
    const getDrinkData = () => {
        const dataReceive = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
            .then(response => {
                return response.data.drinks;
            })
            .catch(err => {
                console.log(err);
            })
        return dataReceive;
    }

    useEffect(() => {
        (async () => {
            const response = await getDrinkData();
            setDrinkDatas(response);
        })();
    }, [])
    console.log((drinkDatas))
    return (
        <div className='home-container'>
            <div className='app_showInfo'>
                <DrinkList
                    drinkDatas={drinkDatas}
                />
            </div>
        </div>


    )
}
