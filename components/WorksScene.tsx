"use client";


import {useState} from "react";
import Timeline from "./Timeline";



interface HoverProject{

id:string;

title:string;

}




const projectImages:{[key:string]:string}={


"01":
"/portfolio-a/04.jpg",


"02":
"/portfolio-a/14.jpg",


"03":
"/portfolio-a/24.jpg",


"04":
"/portfolio-a/33.jpg"

};





export default function WorksScene(){



const [activeProject,setActiveProject]=
useState<HoverProject|null>(null);




const backgroundImage=
activeProject
?
projectImages[activeProject.id]
:
null;





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



{/* 动态项目背景 */}


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


filter:"blur(18px)",


transform:"scale(1.08)",


transition:
"background-image .6s ease"


}}


/>



{/* 黑色玻璃遮罩 */}


<div


style={{


position:"absolute",


inset:0,


background:
`
linear-gradient(
180deg,
rgba(5,8,20,.65),
rgba(5,8,20,.92)
)
`,


backdropFilter:
"blur(6px)",


WebkitBackdropFilter:
"blur(6px)"


}}


/>


</div>








{/* 原始背景纹理 */}


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
rgba(255,255,255,.04),
transparent 28%
),

radial-gradient(
circle at 80% 30%,
rgba(255,255,255,.03),
transparent 24%
)
`


}}


/>







{/* 内容 */}


<div


style={{


position:"relative",


zIndex:2


}}


>



<div


style={{


paddingLeft:"92px",


paddingRight:"92px"


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


fontSize:"96px",


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