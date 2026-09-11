"use client";


import WorksScene from "./WorksScene";


export default function Works(){


return(

<section

style={{

height:"100vh",

background:"#05070c",

position:"relative",

overflow:"hidden",

color:"#fff"

}}

>


{/* page title */}

<div


style={{


position:"absolute",

top:"140px",

left:"clamp(30px,8vw,120px)",

zIndex:10


}}


>


<div


style={{

fontSize:"12px",

letterSpacing:"10px",

opacity:.55,

marginBottom:"30px"

}}

>

SELECTED WORKS

</div>



<h1

style={{


fontSize:"clamp(52px,6vw,82px)",

letterSpacing:"5px",

fontWeight:600,

lineHeight:1,

margin:0,

textTransform:"uppercase"


}}

>

PROJECTS

</h1>


</div>



<WorksScene/>


</section>


)

}