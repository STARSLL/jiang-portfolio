"use client";


import Link from "next/link";
import {useState} from "react";



export default function Navbar(){



const [open,setOpen]=useState(false);



return(



<nav className="navbar">





<div className="desktop-menu">



<Link

href="/"

className="nav-item"

>

HOME

<div className="hover-box"></div>

</Link>





<Link

href="/works"

className="nav-item"

>

WORKS

<div className="hover-box"></div>

</Link>





<Link

href="/about"

className="nav-item"

>

ABOUT ME

<div className="hover-box"></div>

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


}





<style jsx>{`



/* =====================

导航整体

===================== */


.navbar{


position:fixed;



top:0;



right:0;



width:auto;



height:90px;


/*
导航高度

*/


display:flex;



align-items:center;



z-index:100;



padding-right:

70px;


/*
右侧距离

*/


}




/* =====================

三个导航容器

===================== */


.desktop-menu{


display:flex;



align-items:center;



gap:

65px;


/*
导航间距

原55

现在65更加高级


*/


}






/* =====================

导航文字

===================== */


.nav-item{


position:relative;



height:

50px;



display:flex;



align-items:center;



justify-content:center;



padding:

0 18px;



color:

rgba(245,247,251,.92);



font-size:

13px;



letter-spacing:

5px;



text-decoration:none;



transition:

.35s;



overflow:visible;


}





/* =====================

hover玻璃方块

===================== */


.hover-box{


position:absolute;



z-index:-1;



top:

50%;



left:

50%;



transform:

translate(-50%,-50%);



width:

120px;


/*
方块宽度

*/


height:

42px;


/*
方块高度

*/


border-radius:

10px;


/*
圆角

*/


background:


rgba(210,220,230,.16);


/*
灰色透明背景

*/


border:


1px solid

rgba(255,255,255,.18);



backdrop-filter:

blur(18px);



-webkit-backdrop-filter:

blur(18px);



opacity:

0;



transition:

all .35s ease;



}





.nav-item:hover .hover-box{


opacity:

1;



width:

135px;



height:

48px;



}





.nav-item:hover{


color:white;



}




/* =====================

手机菜单

===================== */


.mobile-menu-button{


display:none;



background:none;



border:none;



color:white;



font-size:26px;



}




.mobile-menu{


position:absolute;



right:30px;



top:80px;



padding:25px;



display:flex;



flex-direction:column;



gap:200px;



background:


rgba(20,25,35,.75);



backdrop-filter:

blur(20px);



border-radius:

15px;



}




.mobile-menu a{


color:white;



letter-spacing:

4px;



font-size:

13px;



}




@media(max-width:768px){



.navbar{


height:80px;



padding-right:

30px;


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