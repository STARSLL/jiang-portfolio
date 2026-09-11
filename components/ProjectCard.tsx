"use client";


import Link from "next/link";



interface Props{

id:string;

title:string;

category:string;

description:string;

year:string;

}



export default function ProjectCard({

id,

title,

category,

description,

year


}:Props){



const link =
id === "01"
?
"/works/inspection"
:
"#";




return(


<Link


href={link}


style={{

textDecoration:"none",

color:"inherit"

}}


>



<div


style={{

display:"grid",

gridTemplateColumns:"120px 1fr 100px",

alignItems:"start",

padding:"60px 0",

borderTop:
"1px solid rgba(255,255,255,0.15)",

transition:
"transform 0.4s ease",

cursor:"pointer"

}}



onMouseEnter={(e)=>{


e.currentTarget.style.transform =
"translateX(35px)";


}}



onMouseLeave={(e)=>{


e.currentTarget.style.transform =
"translateX(0px)";


}}


>



{/* 项目编号 */}


<div


style={{

fontSize:"18px",

letterSpacing:"3px",

opacity:0.45

}}

>

{ id }


</div>







{/* 项目主体 */}


<div>




<p


style={{

fontSize:"12px",

letterSpacing:"6px",

opacity:0.6,

marginBottom:"20px"

}}

>

{category}


</p>







<h3


style={{

fontSize:"46px",

lineHeight:1.15,

fontWeight:600,

margin:0,

letterSpacing:"1px"

}}

>

{title}


</h3>







<p


style={{

marginTop:"30px",

maxWidth:"650px",

fontSize:"16px",

lineHeight:1.8,

opacity:0.65

}}

>

{description}


</p>







<div


style={{

marginTop:"25px",

fontSize:"13px",

letterSpacing:"3px",

opacity:0.5

}}

>

{year}


</div>



</div>








{/* 箭头 */}


<div


style={{

fontSize:"42px",

opacity:0.7,

textAlign:"right"

}}

>

↗


</div>






</div>



</Link>


)


}