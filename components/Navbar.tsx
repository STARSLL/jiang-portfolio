"use client";

import Link from "next/link";


export default function Navbar(){


return(

<nav

style={{

position:"fixed",

top:0,

left:0,

width:"100%",

height:"90px",

display:"flex",

alignItems:"center",

justifyContent:"space-between",

padding:"0 80px",

zIndex:100,


color:"#fff",

letterSpacing:"5px",

fontSize:"14px"

}}

>


{/* Logo */}

<Link

href="/"

style={{

textDecoration:"none",

color:"#fff",

fontWeight:500

}}

>

JIANG

</Link>




{/* Navigation */}

<div

style={{

display:"flex",

gap:"60px"

}}

>


<Link

href="/"

style={{

color:"#fff",

textDecoration:"none"

}}

>

HOME

</Link>




<Link

href="/works"

style={{

color:"#fff",

textDecoration:"none"

}}

>

WORKS

</Link>





<Link

href="/about"

style={{

color:"#fff",

textDecoration:"none"

}}

>

ABOUT ME

</Link>



</div>


</nav>


)

}