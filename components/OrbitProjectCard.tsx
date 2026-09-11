"use client";

import Link from "next/link";


interface Props{

project:{
id:string;
title:string;
desc:string;
};

x:number;

y:number;

depth:number;

}



export default function OrbitProjectCard({

project,

x,

y,

depth

}:Props){


const link =
project.id==="01"
?
"/works/inspection"
:
"#";



return(


<Link

href={link}

style={{

position:"absolute",

left:"50%",

top:"50%",


transform:

`
translate(-50%,-50%)
translate(${x}px,${y}px)
scale(${0.85+depth*0.15})
`,


opacity:
0.35+depth*0.65,


zIndex:
Math.floor(depth*100),


textDecoration:"none",

color:"white",

pointerEvents:"auto",


transition:

"transform .25s ease, opacity .25s ease"

}}


>


<div

style={{

width:"280px",

height:"160px",

border:

"1px solid rgba(255,255,255,.18)",


background:

"rgba(0,0,0,.55)",


backdropFilter:

"blur(8px)",


padding:"30px",

boxSizing:"border-box"


}}

>


<div

style={{

fontSize:"11px",

letterSpacing:"6px",

opacity:.5

}}

>

PROJECT {project.id}

</div>



<h2

style={{

fontSize:"25px",

letterSpacing:"3px",

marginTop:"20px",

lineHeight:1.1

}}

>

{project.title}

</h2>



<p

style={{

fontSize:"11px",

letterSpacing:"3px",

marginTop:"25px",

opacity:.5

}}

>

{project.desc}

</p>


</div>



</Link>


)


}