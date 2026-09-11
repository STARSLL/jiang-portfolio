"use client";


import Link from "next/link";
import {useState} from "react";

import type {ProjectItem} from "./projects";




interface Props{

project:ProjectItem;

onHover:
(project:ProjectItem)=>void;

onLeave:
()=>void;

}





export default function TimelineCard({

project,

onHover,

onLeave

}:Props){



const [hover,setHover]=
useState(false);




const href =
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



position:"relative",



width:"100%",



height:"220px",




borderRadius:"22px",




overflow:"hidden",




border:

"1px solid rgba(255,255,255,.16)",




background:

"rgba(255,255,255,.04)",




backdropFilter:

"blur(18px)",




WebkitBackdropFilter:

"blur(18px)",




padding:"26px",




boxSizing:"border-box",




display:"flex",



flexDirection:"column",




transition:

"all .45s ease",




transform:

hover

?

"translateY(-14px)"

:

"translateY(0)",




boxShadow:

hover

?

"0 25px 70px rgba(0,0,0,.45)"

:

"none",




cursor:"pointer"



}}

>






{/* =====================
hover cover image
===================== */}


<div


style={{


position:"absolute",


inset:0,



backgroundImage:

`url(${project.cover})`,



backgroundSize:"cover",



backgroundPosition:"center",




opacity:

hover

?

0.25

:

0,




transition:

"opacity .6s ease",




filter:

"blur(3px)",




transform:

hover

?

"scale(1.08)"

:

"scale(1)",



pointerEvents:"none"



}}


/>








{/* dark glass overlay */}



<div


style={{


position:"absolute",


inset:0,



background:


`

linear-gradient(

180deg,

rgba(5,8,20,.25),

rgba(5,8,20,.85)

)

`,



opacity:

hover

?

1

:

0.6



}}


/>









{/* content */}



<div


style={{


position:"relative",


zIndex:2,


height:"100%",


display:"flex",


flexDirection:"column"


}}

>






<div


style={{


fontSize:"11px",


letterSpacing:"5px",


opacity:.45,


marginBottom:"26px"


}}

>

PROJECT {project.id}

</div>









<h3


style={{


margin:0,


fontSize:"26px",


lineHeight:1.15,


letterSpacing:"1px",


fontWeight:600,


textTransform:"uppercase",


maxWidth:"230px"



}}

>


{project.title}


</h3>









<div


style={{


marginTop:"auto",


fontSize:"10px",


lineHeight:1.5,


letterSpacing:"4px",


opacity:.6,


maxWidth:"230px",


textTransform:"uppercase"



}}

>


{project.category}


</div>







</div>







</div>



</Link>


)


}