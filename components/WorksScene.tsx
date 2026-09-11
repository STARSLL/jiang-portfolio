"use client";


import {useState} from "react";

import Timeline from "./Timeline";



interface ProjectData{

  id:string;

  title:string;

  category:string;

  year:string;

  slug?:string;

  description?:string;

  cover?:string;

}





export default function WorksScene(){



const [activeProject,setActiveProject]=
useState<ProjectData|null>(null);



const backgroundImage=
activeProject?.cover || "";





return(



<section


style={{


position:"relative",


minHeight:"100vh",


width:"100%",


background:"#050814",


color:"#f5f7fb",


overflow:"hidden",


paddingTop:"150px",


paddingBottom:"80px"


}}


>





{/* =========================
    dynamic background image
========================= */}


<div

style={{


position:"absolute",


inset:0,


zIndex:0,


opacity:

backgroundImage

?

1

:

0,


transition:

"opacity .8s ease",


pointerEvents:"none"


}}

>


<div

style={{


position:"absolute",


inset:0,


backgroundImage:

`url(${backgroundImage})`,


backgroundSize:"cover",


backgroundPosition:"center",


filter:"blur(20px)",


transform:"scale(1.12)",


transition:

"transform 1s ease"


}}


/>





{/* glass overlay */}

<div

style={{


position:"absolute",


inset:0,


background:

`
linear-gradient(
180deg,
rgba(5,8,20,.58),
rgba(5,8,20,.92)
)
`,


backdropFilter:

"blur(8px)",


WebkitBackdropFilter:

"blur(8px)"


}}


/>



</div>









{/* =========================
    default atmosphere
========================= */}



<div


style={{


position:"absolute",


inset:0,


zIndex:1,


pointerEvents:"none",


background:


`
radial-gradient(
circle at 20% 20%,
rgba(255,255,255,.045),
transparent 30%
),

radial-gradient(
circle at 80% 30%,
rgba(255,255,255,.035),
transparent 25%
)
`


}}



/>









{/* =========================
    content
========================= */}



<div


style={{


position:"relative",


zIndex:2


}}


>



<div


style={{


paddingLeft:

"clamp(30px,8vw,92px)",


paddingRight:

"clamp(30px,8vw,92px)"


}}


>



<div


style={{


fontSize:"13px",


letterSpacing:"10px",


opacity:.58,


marginBottom:"22px",


textTransform:"uppercase"


}}


>

SELECTED WORKS

</div>








<h2


style={{


margin:0,


fontSize:

"clamp(52px,8vw,96px)",


lineHeight:.95,


fontWeight:600,


letterSpacing:"1px",


textTransform:"uppercase"


}}


>

PROJECTS

</h2>



</div>









<div


style={{


marginTop:"46px"


}}


>



<Timeline


onProjectHover={(project)=>{


setActiveProject(project);


}}



onProjectLeave={()=>{


setActiveProject(null);


}}


/>



</div>








</div>








</section>



);


}