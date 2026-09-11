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

  cover:string;

}




export default function WorksScene(){


const [activeProject,setActiveProject]
=
useState<ProjectData|null>(null);



const backgroundImage =
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
默认科技背景
========================= */}

<div

style={{

position:"absolute",

inset:0,

zIndex:0,

background:`

radial-gradient(
circle at 30% 30%,
rgba(80,255,180,.08),
transparent 30%
),

radial-gradient(
circle at 70% 60%,
rgba(180,220,255,.05),
transparent 35%
),

linear-gradient(
180deg,
#07110f,
#050814
)

`

}}

/>






{/* =========================
hover项目图片背景
========================= */}



<div

style={{

position:"absolute",

inset:0,

zIndex:1,

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



filter:

"blur(25px)",



transform:

"scale(1.15)",



transition:

"all .8s ease"

}}

/>




<div

style={{

position:"absolute",

inset:0,


background:

`

linear-gradient(

180deg,

rgba(5,8,20,.45),

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
内容
========================= */}



<div

style={{

position:"relative",

zIndex:3

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