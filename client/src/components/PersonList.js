import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const PersonList = (props) => {
    const { removeFromDom, people} = props;
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/pet/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>All Pets</h1>
            <a href='/pets/new'>add a pet to the shelter</a>
            {
                people.map((person, index) => {
                return (
                <div key={index}>
                    {person.title}
                        <Link to={"/pet/" + person._id}>
                            details
                        </Link>
                        |
                        <Link to={"/pet/" + person._id + "/edit"}>
                           Edit
                        </Link>
                        |
                        <button onClick={(e)=>{deletePerson(person._id)}}>
                            Adopt {person.title}
                        </button>
                    </div>
    )})
            }
        </div>
    )
}
export default PersonList;



