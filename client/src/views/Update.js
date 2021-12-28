import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skillone, setSkillone] = useState();
    const [skilltwo, setSkilltwo] = useState();
    const [skillthree, setSkillthree] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setTitle(res.data.title);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillone(res.data.skillone);
                setSkilltwo(res.data.skilltwo);
                setSkillthree(res.data.skillthree);
            })
            .catch(err => console.log(err))
    }, [])
    const updatePerson = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
            title,    // this is shortcut syntax for firstName: firstName,
            type,      // this is shortcut syntax for lastName: lastName
            description,
            skillone,
            skilltwo,
            skillthree      // this is shortcut syntax for lastName: lastName
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Pet</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Type</label><br />
                    <input type="text" 
                    name="type"
                    value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <p>
                    <label>Skill One</label><br />
                    <input type="text" 
                    name="skillone"
                    value={skillone} 
                    onChange={(e) => { setSkillone(e.target.value) }} />
                </p>
                <p>
                    <label>Skill Two</label><br />
                    <input type="text" 
                    name="skilltwo"
                    value={skilltwo} 
                    onChange={(e) => { setSkilltwo(e.target.value) }} />
                </p>
                <p>
                    <label>Skill Three</label><br />
                    <input type="text" 
                    name="skillthree"
                    value={skillthree} 
                    onChange={(e) => { setSkillthree(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;

