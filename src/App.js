import React,{useState} from 'react';
import './style.css';
const First =()=>{
    const [score, setScore] = useState(0);
    const [msg,setMsg]= useState("");
    function handleIncrement() {
        if(score===25){
            setMsg("Score should be larger than 25")
            return
        }
        setScore(score+1)
        setMsg('')
    }
    function handleDecrement() {
        if(score===0){
            setMsg("Score Shouldn't be less than 0")
            return
        }
        setScore(score-1)
        setMsg('')
    }
    return (
        <div>
            <h1 style={{textAlign:'center',color:'black',paddingTop:'10px',textTransform:'uppercase'}}>
                Lets Upgrade Zero to Hero React js Program <br/>Day2 Assignment
            </h1>
            <p style={{textAlign:'center',color:'orange',fontSize:'30px'}}>
              Counter
            </p>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
            <button class="btn" onClick={handleIncrement}>Increment</button>
            <button class="btn" onClick={handleDecrement}>Decrement</button>
            <button class="btn" onClick={() => setScore(0)} >Reset</button>
            </div>
            <div>
            <h3 style={{textAlign:'center',color:'black',fontFamily:'Lucida Console'}}>The value of score is {score}</h3>
            <h3 style={{textAlign:'center',color:'crimson',fontFamily:'Lucida Console'}}>{msg}</h3>
            </div>
        </div>

    )
}
export default First;