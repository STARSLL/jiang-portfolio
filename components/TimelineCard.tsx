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

color:"inherit",

width:"100%"

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


height:"220px",


borderRadius:"22px",


border:

"1px solid rgba(255,255,255,.14)",



background:

hover

?

"rgba(255,255,255,.08)"

:

"rgba(255,255,255,.025)",



backdropFilter:

"blur(14px)",


WebkitBackdropFilter:

"blur(14px)",



padding:"26px",


boxSizing:"border-box",



display:"flex",

flexDirection:"column",



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



cursor:"pointer"


}}

>




{/* project number */}

<div

style={{

fontSize:"11px",

letterSpacing:"5px",

opacity:.45,

marginBottom:"26px",

flexShrink:0

}}

>

PROJECT {project.id}

</div>







{/* title */}

<h3

style={{


margin:0,


fontSize:"26px",


lineHeight:1.15,


letterSpacing:"1px",


fontWeight:600,


textTransform:"uppercase",



maxWidth:"230px",



minHeight:"60px"


}}

>

{project.title}

</h3>







{/* category */}

<div

style={{


marginTop:"auto",


fontSize:"10px",


lineHeight:1.4,


letterSpacing:"4px",


opacity:.55,


textTransform:"uppercase",



maxWidth:"230px"


}}

>

{project.category}


</div>





</div>



</Link>


)

}