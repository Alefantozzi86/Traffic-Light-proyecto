import React, { useState } from "react";

const Semaforo=()=>{
    
    const [color, getColor] = useState ("red");

    return (
		<>
		<div className="base"></div>
		<div className="semaforo">
		<div className={`light red ${color == "red" ? "glow":""}`} onClick={()=>getColor("red")}></div>
		<div className={`light yellow ${color == "yellow" ? "glow":""}`} onClick={()=>getColor("yellow")}></div>
		<div className={`light green ${color == "green" ? "glow":""}`} onClick={()=>getColor("green")}></div>
		</div>
		</>
	);
};

export default Semaforo;