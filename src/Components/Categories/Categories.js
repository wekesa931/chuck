import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
}
const Categories = (props) => {
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await fetch("https://api.chucknorris.io/jokes/categories")
                const res = await response.json()
                setcategories(res)
            } catch(e){
                console.log(e)
            }
        }
        getCategories()
    }, []);
    return <div className='category-names'>
        {categories.map(cat => (
            <Link to={`/singleCategory/${cat}`} key={cat} className='sinlge-category'>{capitalize(cat)}</Link>
        ))}
    </div>
}
 
export default Categories;