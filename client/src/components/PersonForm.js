import React, { useState } from 'react'
import axios from 'axios';
const PersonForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillone, setSkillone] = useState("");
    const [skilltwo, setSkilltwo] = useState("");
    const [skillthree, setSkillthree] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
    
        //prevent default behavior of the submit
        e.preventDefault();
        
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/pet', {
            title,    // this is shortcut syntax for firstName: firstName,
            type,      // this is shortcut syntax for lastName: lastName
            description,      // this is shortcut syntax for lastName: lastName
            skillone,      // this is shortcut syntax for lastName: lastName
            skilltwo,      // this is shortcut syntax for lastName: lastName
            skillthree      // this is shortcut syntax for lastName: lastName
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        
        <form onSubmit={onSubmitHandler}>
            
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home?</h3>
            <a href='/'>go back to home</a>
            <p>
                <label>Pet Name</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Pet Type</label><br/>
                <input type="text" onChange = {(e)=>setType(e.target.value)}/>
            </p>
            <p>
                <label>Pet Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <p>
                <label>Skill One</label><br/>
                <input type="text" onChange = {(e)=>setSkillone(e.target.value)}/>
            </p>
            <p>
                <label>Skill Two</label><br/>
                <input type="text" onChange = {(e)=>setSkilltwo(e.target.value)}/>
            </p>
            <p>
                <label>Skill Three</label><br/>
                <input type="text" onChange = {(e)=>setSkillthree(e.target.value)}/>
            </p>
            <input type="submit" value="Add Pet"/>
        </form>
    )
}
export default PersonForm;

