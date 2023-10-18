import React from "react";

export default function Education(){
    return <div
    id="Education"
    style={{width:"100%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
   backgroundImage:`url(${"https://media.istockphoto.com/id/948623158/vector/seamless-innovation-and-scientific-data-background.jpg?s=2048x2048&w=is&k=20&c=oBasvSJoVT9j1CXl5uguRcaauGqwU9xqa-Lej7sgGtw="})`
    }}>
        <div style={{width:"50%",background:"rgb(175,215,255)",borderRadius:"20px", display:"flex",flexDirection:"column",alignItems:"center",padding:"2vh"}}>
        <h1 style={{color:"rgb(69,123,233)"}}>{"Education"}</h1>
        <h3>{`University - Dr. A.P.J Abdul Kalam Technical University Lucknow Uttar Pradesh`}</h3>
        <h4>{`Degree - Bachelors Of Technology`}</h4>
        <h4>{`Stream - Computer Science`}</h4>
        <h4>{`GPA - 8.3`}</h4>
        </div>
    </div>
}