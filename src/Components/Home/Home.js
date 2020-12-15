import React, { useState, useEffect } from 'react';
import Categories from '../Categories/Categories'

const Home = () => {
    const [random, setrandom] = useState('');

    useEffect(() => {
        try {
            setInterval(async () => {
                const response = await fetch('https://api.chucknorris.io/jokes/random');
                const res = await response.json()
                setrandom(res.value)
            }, 5000);
          } catch(e) {
            console.log(e);
          }
    }, []);
    useEffect(() => {
        const getSingleJoke = async () => {
            try {
                    const response = await fetch('https://api.chucknorris.io/jokes/random');
                    const res = await response.json()
                    setrandom(res.value)
                } catch(e) {
                    console.log(e);
            }
        }
        getSingleJoke()
    }, []);


    return <div>
        
        <div>
            {random}
        </div>
        <Categories />
    </div>
}
 
export default Home;