import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

const SingleCategory = (props) => {
    const [joke, setjoke] = useState();
    const [counter, setcounter] = useState(0);
    console.log("TCL: SingleCategory -> counter", counter)
    useEffect(() => {
        console.log("getting joke")
        const getJokeByCategory = async () => {
            try {
                const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${props.match.params.category}`)
                const res = await response.json()
                setjoke(res.value)
            } catch(e){
                console.log(e)
            }
        }
        getJokeByCategory()
    }, [counter]);


    return ( <div>
        <p>{joke}</p>
    <button onClick={() => setcounter(counter => counter + 1 )}>Get another Joke</button>
    <br />
    <button onClick={() => props.history.push("/")}>Back Home</button>
    </div> );
}
 
export default withRouter(SingleCategory);