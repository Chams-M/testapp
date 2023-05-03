import React , {useState} from "react";

function Test2() {
    const [fullname , setFullname ]= useState({

        fName:" ",
        lName:" ",
        email:" ",

    });

    // const [fname,setFname] = useState(" ");
    // const [lname,setLname] = useState(" ");

    function updateFullname(event){

        const { value , name } = event.target;

        setFullname(preValue => {

        if (name === "fName")
        {
            return{
                fName: value,
                lName : preValue.lName,
                email : preValue.email
            };
        }
        else if (name === "lName") {
            return{
                fName:preValue.fName,
                lName: value,
                email:preValue.email
            };
        }
        else if (name === "email") {
            return{
                fName:preValue.fName,
                lName: preValue.lName,
                email:value
            };
        }
        })
        
    }

  return (
    <div className="container">
      <h1>Hello{fullname.fName}{fullname.lName}</h1>
      <form>

        <input onChange={updateFullname} name="fName" placeholder="First Name" value={fullname.fName} />
        <input onChange={updateFullname} name="lName" placeholder="Last Name" value={fullname.lName} />
        <input onChange={updateFullname} name="email" placeholder="Email" value={fullname.email} />


        <button>Submit</button>

      </form>
    </div>
  );
}

export default Test2;
