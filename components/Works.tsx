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



<div


style={{


position:"absolute",

top:"80px",

left:"90px",

zIndex:10


}}



>



<p

style={{

letterSpacing:"12px",

fontSize:"12px",

opacity:.6

}}

>

SELECTED WORKS

</p>




<h1

style={{

fontSize:"70px",

letterSpacing:"6px",

marginTop:"20px"

}}

>

PROJECTS

</h1>



</div>







<WorksScene/>



</section>


)


}