"use client";

import Link from "next/link";
import {useState} from "react";


export default function Navbar(){

  const [open,setOpen]=useState(false);


  return(

<nav className="navbar">


<Link
href="/"
className="logo"
>
JIANG
</Link>



<div className="desktop-menu">


<Link href="/">
HOME
</Link>


<Link href="/works">
WORKS
</Link>


<Link href="/about">
ABOUT ME
</Link>


</div>





<button

className="mobile-menu-button"

onClick={()=>setOpen(!open)}

>

☰

</button>





{
open &&

<div className="mobile-menu">


<Link 
href="/"
onClick={()=>setOpen(false)}
>
HOME
</Link>


<Link 
href="/works"
onClick={()=>setOpen(false)}
>
WORKS
</Link>


<Link 
href="/about"
onClick={()=>setOpen(false)}
>
ABOUT ME
</Link>


</div>

}



<style jsx>{`


.navbar{

position:fixed;

top:0;

left:0;

width:100%;

height:90px;

display:flex;

align-items:center;

justify-content:space-between;

padding:0 60px;

z-index:100;

color:#fff;

background:
rgba(5,8,20,.25);

backdrop-filter:blur(14px);

-webkit-backdrop-filter:blur(14px);

}




.logo{


color:#fff;

text-decoration:none;

font-size:16px;

font-weight:500;

letter-spacing:7px;

}





.desktop-menu{


display:flex;

gap:55px;

align-items:center;

}





.desktop-menu a{


color:#fff;

text-decoration:none;

font-size:13px;

letter-spacing:6px;

opacity:.9;

transition:.3s;

}




.desktop-menu a:hover{


opacity:.55;

}




.mobile-menu-button{


display:none;

background:none;

border:none;

color:white;

font-size:28px;

cursor:pointer;

}





.mobile-menu{


position:absolute;

right:30px;

top:90px;


width:180px;


padding:30px;


display:flex;

flex-direction:column;

gap:25px;


background:

rgba(5,8,20,.92);


border:

1px solid rgba(255,255,255,.12);


border-radius:14px;


backdrop-filter:blur(15px);


}





.mobile-menu a{


color:white;

text-decoration:none;

font-size:13px;

letter-spacing:5px;


}





@media(max-width:768px){


.navbar{

padding:

0 30px;

}




.desktop-menu{

display:none;

}




.mobile-menu-button{

display:block;

}



}



`}</style>



</nav>

  );

}