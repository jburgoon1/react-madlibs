import React, {useState} from 'react'
import MadLibForm from './MadlibForm'
import './Madlib.css'
const MadLib = () =>{
    const [madLibInfo, setMadLibInfo] = useState()
    const [toggle, setToggle] = useState(false)
    
    const addMadLib = (data) =>{
        setMadLibInfo(data)
        setToggle(true)
    }

    const handleCLick = () =>{
        setToggle(false)

    }

    return (
        <div>
            
            {!toggle ? <MadLibForm add={addMadLib}/>:null}
           {toggle ? <h3>'The {madLibInfo.color} {madLibInfo.noun} looks at the {madLibInfo.adj} {madLibInfo.noun2}'</h3>:null}
           {toggle? <button onClick={handleCLick}>Reset</button>:null}
        </div>
    )
}

export default MadLib;
