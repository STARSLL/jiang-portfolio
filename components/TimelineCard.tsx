"use client";


import Link from "next/link";
import {useState} from "react";


interface ProjectData{

id:string;

title:string;

category:string;

year:string;

slug?:string;

description?:string;

cover?:string;

}



interface Props{

project:ProjectData;

onHover:(project:ProjectData)=>void;

onLeave:()=>void;

}



export default function TimelineCard({

project,

onHover,

onLeave

}:Props){


const [hover,setHover]=useState(false);



const href=
project.slug
?
`/works/${project.slug}`
:
"#";



return(

<Link

href={href}

style={{

textDecoration:"none",

color:"inherit"

}}

>


<div


onMouseEnter={()=>{

setHover(true);

onHover(project);

}}



onMouseLeave={()=>{

setHover(false);

onLeave();

}}



style={{


width:"100%",


height:"190px",


borderRadius:"22px",


border:

"1px solid rgba(255,255,255,.14)",



background:

hover

?

"rgba(255,255,255,.07)"

:

"rgba(255,255,255,.025)",



backdropFilter:"blur(12px)",


WebkitBackdropFilter:"blur(12px)",



padding:"24px",



boxSizing:"border-box",



transition:

"all .35s ease",



transform:

hover

?

"translateY(-12px)"

:

"translateY(0)",



boxShadow:

hover

?

"0 20px 50px rgba(0,0,0,.35)"

:

"none",



position:"relative",

cursor:"pointer"

}}

>



<div

style={{


fontSize:"11px",


letterSpacing:"5px",


opacity:.45,


marginBottom:"24px"


}}

>

PROJECT {project.id}

</div>





<h3

style={{


margin:0,


fontSize:"24px",


lineHeight:1.15,


letterSpacing:"1px",


fontWeight:600,


maxWidth:"220px"


}}

>

{project.title}

</h3>






<div

style={{


position:"absolute",


bottom:"22px",


left:"24px",


fontSize:"10px",


letterSpacing:"5px",


opacity:.55


}}

>

{project.category}

</div>



</div>



</Link>


)

}