import React  from "react";
import { portfolioData } from "../porfolioData";

export default function Objective(){
    return <div style={{width:"100%",
     display:"flex",
     flexDirection:"column",
     alignItems:"center",
    backgroundImage:`url(${"https://w0.peakpx.com/wallpaper/506/235/HD-wallpaper-white-hexagon-geometric-shapes-white-aesthetic.jpg"})`
     }}>
        <h1 style={{color:"rgb(69,123,233)", marginBottom:"-4px"}}>{"Objective"}</h1>
        <h3 style={{color:"rgb(69,123,233)",paddingLeft:"10px"}}>{portfolioData.objective}</h3>
    </div>
}