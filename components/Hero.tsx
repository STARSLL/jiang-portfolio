"use client";

import { useRouter } from "next/navigation";


export default function Hero(){


const router = useRouter();



return(


<section

style={{

position:"absolute",

left:"clamp(24px,6vw,90px)",

bottom:"clamp(90px,15vh,150px)",

zIndex:20,

color:"#ffffff",

width:"calc(100% - 48px)"

}}

>



<div

style={{

fontSize:"clamp(10px,1.2vw,13px)",

letterSpacing:"clamp(5px,1vw,11px)",

opacity:0.75,

marginBottom:"clamp(22px,4vh,38px)",

fontWeight:400

}}

>

INDUSTRIAL DESIGNER


</div>





<h1

style={{

fontSize:"clamp(42px,8vw,54px)",

fontWeight:600,

letterSpacing:"clamp(2px,0.6vw,5px)",

lineHeight:1.12,

margin:0,

textTransform:"uppercase"

}}

>

DESIGNING

<br/>

FUTURE


</h1>








<p

style={{

marginTop:"clamp(20px,4vh,35px)",

fontSize:"clamp(10px,1.3vw,13px)",

letterSpacing:"clamp(3px,1vw,10px)",

opacity:0.75,

maxWidth:"100%"

}}

>

HUMAN × TECHNOLOGY × INTELLIGENCE


</p>






<button

className="explore-btn"

onClick={()=>router.push("/works")}

>

EXPLORE WORKS


</button>





<style jsx>{`



.explore-btn{


margin-top:40px;


padding:

15px 42px;



border-radius:

999px;



border:

1px solid rgba(255,255,255,.22);



background:

rgba(180,180,180,.12);



backdrop-filter:

blur(18px);



-webkit-backdrop-filter:

blur(18px);



color:white;



font-size:13px;



letter-spacing:5px;



text-transform:uppercase;



cursor:pointer;



outline:none;



font-family:

Arial,
Helvetica,
sans-serif;



box-shadow:

0 10px 40px rgba(0,0,0,.28);



transition:

all .35s ease;



}



.explore-btn:hover{


background:

rgba(255,255,255,.18);



border-color:

rgba(255,255,255,.45);



transform:

translateY(-5px);



box-shadow:

0 18px 55px rgba(0,0,0,.4);



}



.explore-btn:active{


transform:

translateY(-2px);


}



@media(max-width:768px){


.explore-btn{


padding:

14px 34px;



font-size:12px;



letter-spacing:4px;


}



}



`}</style>




</section>


)

}