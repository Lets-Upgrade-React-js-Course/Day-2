import React from 'react';
import Button  from './Button';
import './style.css';
const First =()=>{
    return (
        <div>
            <h1 style={{textAlign:'center',color:'black',paddingTop:'10px',textTransform:'uppercase'}}>
                Lets Upgrade Zero to Hero React js Program <br/>Day1 Assignment
            </h1>
            <h2 style={{textAlign:'center',color:'orangered'}}>
                Hello World!!!
            </h2>
            <p style={{textAlign:'center',color:'orange',fontSize:'30px'}}>
              Other Programs Available in LetsUpgrade 
            </p>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
              <Button Course="Data Science" />
              <Button Course="Machine Learning" />
              <Button Course="Django" />
              <Button Course="Web Development" />
            </div>
        </div>

    )
}
export default First;