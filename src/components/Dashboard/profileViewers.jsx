import { Card } from "@mui/material";
import React from "react";
import "./cards_style.css";

export default function ProfileViewers(){
return (
    <div className="actions-card">
        <Card className="actions-item" style={{backgroundColor:"rgba(255, 191, 193, 0.3)"}}>
        <div>
        hi
        </div>
        <div>
            <p>18</p>
        </div>
        <div>
            <ProposalsIcon/>
        </div>
        </Card>
        <Card className="actions-item" style={{backgroundColor:"rgba(130, 212, 130, 0.3)"}} >
        <div>
        hii
        </div>
        <div>
        <p>56</p>
        </div>
        <div>
        hii
        </div>
        </Card>
        <Card className="actions-item" style={{backgroundColor:"rgba(209, 182, 234, 0.3)"}} >
        <div>
        logo
        </div>
        <div>
            <p>$1000.0</p>
        </div>
        <div>
            Payments
        </div>
        </Card>
    </div>
);

}