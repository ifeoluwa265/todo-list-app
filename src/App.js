import React, { useState, } from "react";
import Night from "./components/night/night";
import "./App.css";
import sunicon from "./images/iconsun.svg"
import moonicon from "./images/moon.svg"
import background from "./images/bg-desktop-dark.jpg"
import backgroundTwo from "./images/bg-desktop-light.jpg"

function App() {
  const [list, setList]=useState([]);
const [input, setInput]=useState("")
const [theme, setTheme]=useState("light")


 const handleSubmit = (e) =>{
    e.preventDefault();
    setList((prev) => {
      return [...prev, {id: prev.length + 1,title: input}]
    })
    setInput('')
  }

  const handleChange = (e) =>{
    if (e.target.name === 'inputs'){
      setInput(e.target.value)
    }
    
    
  }
  const Submit = {
backgroundColor:"white",
width:"100px",
padding:".7rem",
color:"black",
marginBottom:"1.9rem",
marginLeft:".5rem",
border:'1px solid black',
borderRadius:"5px"

  };

const handleThemeChange = () => {
  if(theme === 'light'){
    setTheme('dark')
  }
  else{
    setTheme('light')
  }
}

  return (
    <div style={{
      backgroundColor: theme === 'light' ? "black" : 'white',
      minHeight:"100vh",
      color: theme === 'light' ? "white":"black"
      }}>
    <div style={{ backgroundImage:  theme === 'light' ? `url(${background})` :`url(${backgroundTwo})` }}>
      <div className="second">
      <h2 className="two">T O D O </h2>
      <div onClick={handleThemeChange}>
        {theme === 'light'
        ?<img src={sunicon} alt="Logo"   />
        :<img src={moonicon} alt="Logo"   />
        }
      </div>
      </div>
      <div>
         <form className="grocery-form"  onSubmit={handleSubmit}>

        <div className="second"  >
          <input type="text" name="inputs" className="check" placeholder="Input your Todo List" value={input} onChange={handleChange} />
          <button type="submit"  style={Submit}>Submit
          </button>
        </div>
      </form>
      </div>
     
    </div>
<div>

</div>
     
     {list.map(({title, id}) => {
      return(
                       
                       <Night title={title} id={id} />
      )
     })}
    </div>
     );

}

export default App;

