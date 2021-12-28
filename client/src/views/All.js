import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
const Main = () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            })
    }, [])
    
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId)); 
    }
    
    return (
        <div>
           <hr/>
           {loaded && <PersonList people={people}  removeFromDom={removeFromDom} /> }
        </div>
    )
}
export default Main;