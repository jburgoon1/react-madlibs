import React, {useState} from 'react'
import MadLibForm from './MadlibForm'
import './Madlib.css'
const MadLib = () =>{
    const [madLibInfo, setMadLibInfo] = useState()
    const [toggle, setToggle] = useState(false)
    //adds the form data to the parents state
    const addMadLib = (data) =>{
        setMadLibInfo(data)
        setToggle(true)
    }
//resets the madlib
    const handleCLick = () =>{
        setToggle(false)

    }
//set the form to show up if toggle is set to false, set the h3 and button to show up when toggle is set to true
    return (
        <div>
            
            {!toggle ? <MadLibForm add={addMadLib}/>:null}
           {toggle ? <h3>'The {madLibInfo.color} {madLibInfo.noun} looks at the {madLibInfo.adj} {madLibInfo.noun2}'</h3>:null}
           {toggle? <button onClick={handleCLick}>Reset</button>:null}
        </div>
    )
}

export default MadLib;
