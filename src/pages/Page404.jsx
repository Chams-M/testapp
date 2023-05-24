import React from "react";
import Error404 from "../assets/svg/error/Error404";
import SaveButton from "../components/buttons/saveButton";
import PowerCable1 from "../assets/svg/error/PowerCable1";
import PowerCable2 from "../assets/svg/error/PowerCable2";

export default function Page404()
{
    function errorRedirect(){
        console.log("error redirection");
    }
    return(
        <div className="error-page-container" >
        <div>
            <PowerCable1/>
         </div>
        <div className="error-page-content">
        <div>
          <Error404/>
          </div>
          <h1>Something went wrong !</h1>
          <p>Sorry, we are unable to find what you are looking for.</p>
         <div> 
         <SaveButton
            text="Try again"
            action={errorRedirect}
          />
          </div>
        </div>
        <div className="power-cable2-svg">
            <PowerCable2/>
         </div>
        </div>
    );
}