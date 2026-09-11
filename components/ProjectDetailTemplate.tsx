"use client";

import Link from "next/link";
import {useState} from "react";
import type { ProjectDetail } from "./projectDetails";


interface Props{
  project:ProjectDetail;
}



export default function ProjectDetailTemplate({
  project
}:Props){


const [menuOpen,setMenuOpen]=useState(false);



return(

<main

style={{

minHeight:"100vh",

background:"#050814",

color:"#f5f7fb"

}}

>



{/* ================= NAV ================= */}


<nav

style={{

position:"sticky",

top:0,

zIndex:50,

height:"88px",

display:"flex",

alignItems:"center",

justifyContent:"space-between",

padding:"0 clamp(24px,5vw,70px)",

background:"rgba(5,8,20,.72)",

backdropFilter:"blur(14px)",

WebkitBackdropFilter:"blur(14px)",

borderBottom:
"1px solid rgba(255,255,255,.08)"

}}

>



{/* LEFT */}

<div

style={{

display:"flex",

alignItems:"center",

gap:"24px"

}}

>


<Link

href="/works"

style={{

fontSize:"28px",

color:"#fff",

textDecoration:"none",

fontWeight:300

}}

>

←

</Link>



<Link

href="/"

style={{

fontSize:"16px",

letterSpacing:"7px",

color:"#fff",

textDecoration:"none"

}}

>

JIANG

</Link>


</div>





{/* DESKTOP */}

<div

className="desktop-nav"

style={{

display:"flex",

gap:"45px"

}}

>


<Link
href="/"
style={navStyle}
>

HOME

</Link>


<Link
href="/works"
style={navStyle}
>

WORKS

</Link>



<Link
href="/about"
style={navStyle}
>

ABOUT ME

</Link>



</div>







{/* MOBILE BUTTON */}


<button

className="mobile-menu"

onClick={()=>setMenuOpen(!menuOpen)}

style={{

display:"none",

background:"none",

border:"none",

color:"#fff",

fontSize:"28px",

cursor:"pointer"

}}

>

☰

</button>





{
menuOpen &&

<div

style={{

position:"absolute",

top:"88px",

right:"24px",

background:"rgba(5,8,20,.95)",

backdropFilter:"blur(12px)",

padding:"30px",

borderRadius:"16px",

display:"flex",

flexDirection:"column",

gap:"25px",

border:
"1px solid rgba(255,255,255,.12)"

}}

>


<Link href="/" style={navStyle}>
HOME
</Link>


<Link href="/works" style={navStyle}>
WORKS
</Link>


<Link href="/about" style={navStyle}>
ABOUT ME
</Link>


</div>

}



</nav>








{/* ================= HERO ================= */}



<section

style={{

position:"relative",

minHeight:"70vh",

display:"flex",

alignItems:"center",

overflow:"hidden",

borderBottom:
"1px solid rgba(255,255,255,.08)"

}}

>



<div

style={{

position:"absolute",

inset:0,

backgroundImage:

`
linear-gradient(
rgba(5,8,20,.65),
rgba(5,8,20,.92)
),
url(${project.cover})
`,

backgroundSize:"cover",

backgroundPosition:"center",

opacity:.55

}}

></div>




<div

style={{

position:"relative",

zIndex:2,

width:"100%",

maxWidth:"1400px",

margin:"0 auto",

padding:
"90px clamp(30px,6vw,90px)"

}}

>



<div

style={{

fontSize:"13px",

letterSpacing:"9px",

opacity:.55,

marginBottom:"35px"

}}

>

PROJECT {project.id}

</div>





<h1

style={{

margin:0,

fontSize:
"clamp(42px,7vw,96px)",

lineHeight:1,

fontWeight:700,

letterSpacing:"2px",

maxWidth:"1100px",

wordBreak:"break-word",

textTransform:"uppercase"

}}

>

{project.title}

</h1>






<div

style={{

marginTop:"35px",

fontSize:"13px",

letterSpacing:"7px",

opacity:.65,

textTransform:"uppercase"

}}

>

{project.category}

&nbsp; · &nbsp;

{project.year}

</div>






<p

style={{

maxWidth:"750px",

marginTop:"45px",

fontSize:"17px",

lineHeight:1.9,

opacity:.75

}}

>

{project.intro}

</p>



</div>



</section>









{/* ================= PORTFOLIO ================= */}



<section

style={{

maxWidth:"1250px",

margin:"0 auto",

padding:
"80px clamp(24px,5vw,60px)"

}}

>



<div

style={{

fontSize:"12px",

letterSpacing:"8px",

opacity:.45,

marginBottom:"45px"

}}

>

PORTFOLIO PAGES

</div>







<div

style={{

display:"flex",

flexDirection:"column",

gap:"50px"

}}

>


{

project.pages.map((src,index)=>(


<div

key={src}

style={{

borderRadius:"24px",

overflow:"hidden",

border:
"1px solid rgba(255,255,255,.1)",

background:
"rgba(255,255,255,.025)",

boxShadow:
"0 25px 70px rgba(0,0,0,.35)"

}}

>


<img

src={src}

alt={`${project.title}-${index+1}`}

draggable={false}

style={{

width:"100%",

height:"auto",

display:"block"

}}

/>



</div>


))


}


</div>



</section>







<style jsx>{`

@media(max-width:768px){


.desktop-nav{

display:none!important;

}


.mobile-menu{

display:block!important;

}


}


`}</style>




</main>


)

}





const navStyle={

color:"#fff",

textDecoration:"none",

fontSize:"13px",

letterSpacing:"5px",

opacity:.75

};