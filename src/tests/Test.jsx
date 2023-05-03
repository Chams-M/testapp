import React , {useState} from "react";

function Test() {
  
  const [name , setName] = useState("");
  const [isMousedOver,setMouseOver ] = useState("Hello");
  const [headingtext, setHeading ] = useState("");


function handleChange (event)

{
setName(event.target.value);
console.log(event.target.value);
}


function handleMouseOver(){
setMouseOver(true);
}

function handleMouseOut(){
setMouseOver(false);
}


function handleClick(){
setHeading(name);
}

  return (
    <div className="container">
      <h1>Hi{headingtext}</h1>
      <input 
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?"
      value={name}
      
       />

      <button 
      style={
        {
            color:"white",
            backgroundColor: isMousedOver ? "black" : "red" 
        }
      }
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      > Submit </button>
    </div>
  );
}

export default Test;
