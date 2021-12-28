import React, { useEffect, useState } from 'react'
import axios from 'axios';



const Detail = (props) => {
    const [people, setPeople] = useState({});
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
         .then(res=>{
            setPeople(res.data);
                        })
                }, [])
            
    return (
        <div>
            <h1>Pet Shelter</h1>
            <h2>Details about: {people.title}</h2>
            <p>Pet Type: {people.type}</p>
            <p>Pet Description: {people.description}</p>
            <p>Skill One: {people.skillone}</p>
            <p>Skill Two: {people.skilltwo}</p>
            <p>Skill Three:{people.skillthree}</p>
            <a href='/'>go back to home</a> 
        </div>
    )
}
export default Detail;

