import React, {useState} from 'react'


const MadLibForm = ({add}) =>{
     const INITIAL_STATE = {
         noun:'',
         noun2:'',
         adj:'',
         color:''
     }
    const [madLibInfo, setMadLibInfo] = useState(INITIAL_STATE)
    
    //updates the form state when anyhting changes
    const handleChange = (e) =>{
        const {name, value} = e.target;
        return setMadLibInfo({...madLibInfo, [name]:value})
    }
//call the add function from the parent to pass the state up and then resets the form
    const handleSubmit =(e) =>{
        e.preventDefault();
        add(madLibInfo)
        setMadLibInfo(INITIAL_STATE)
    }
//renders the form to create the madlib
    return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="noun">Noun:</label>
          <input id="noun" name="noun" placeholder="noun" onChange={handleChange}></input>

          <label htmlFor="noun2">Noun2:</label>
          <input id="noun2" name="noun2" placeholder="noun 2" onChange={handleChange}></input>

          <label htmlFor="adj">Adjective:</label>
          <input id="adj" name="adj" placeholder="Adjective" onChange={handleChange}></input>

          <label htmlFor="color">Color:</label>
          <input id="color" name="color" placeholder="Color" onChange={handleChange}></input>

          <button>Make the MADLIB!</button>
      </form>
    )
}

export default MadLibForm;
