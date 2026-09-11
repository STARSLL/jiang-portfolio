"use client";


import {useRef,useState} from "react";

import TimelineCard from "./TimelineCard";

import {projects} from "./projects";



interface Props{

onProjectHover:(project:any)=>void;

onProjectLeave:()=>void;

}



export default function Timeline({

onProjectHover,

onProjectLeave

}:Props){



const scrollRef=
useRef<HTMLDivElement>(null);



const isDragging=
useRef(false);



const startX=
useRef(0);



const startScrollLeft=
useRef(0);



const [dragging,setDragging]=useState(false);




const handleMouseDown=(e:React.MouseEvent<HTMLDivElement>)=>{


if(!scrollRef.current)return;


isDragging.current=true;


setDragging(true);


startX.current=e.clientX;


startScrollLeft.current=
scrollRef.current.scrollLeft;


};





const handleMouseMove=(e:React.MouseEvent<HTMLDivElement>)=>{


if(!isDragging.current||!scrollRef.current)return;


const move=
e.clientX-startX.current;


scrollRef.current.scrollLeft=
startScrollLeft.current-move;


};





const stopDragging=()=>{


isDragging.current=false;


setDragging(false);


};





const handleTouchStart=(e:React.TouchEvent<HTMLDivElement>)=>{


if(!scrollRef.current)return;


isDragging.current=true;


startX.current=
e.touches[0].clientX;


startScrollLeft.current=
scrollRef.current.scrollLeft;


};





const handleTouchMove=(e:React.TouchEvent<HTMLDivElement>)=>{


if(!isDragging.current||!scrollRef.current)return;


const move=
e.touches[0].clientX-startX.current;


scrollRef.current.scrollLeft=
startScrollLeft.current-move;


};





return(


<section

style={{

position:"relative",

width:"100%",

marginTop:"42px"

}}

>



<div

style={{


position:"absolute",


right:"40px",


top:"-20px",


fontSize:"11px",


letterSpacing:"4px",


opacity:.45,


textTransform:"uppercase"


}}

>

DRAG TO EXPLORE →

</div>







<div

ref={scrollRef}


onMouseDown={handleMouseDown}


onMouseMove={handleMouseMove}


onMouseUp={stopDragging}


onMouseLeave={stopDragging}


onTouchStart={handleTouchStart}


onTouchMove={handleTouchMove}


onTouchEnd={stopDragging}



style={{


overflowX:"auto",


overflowY:"hidden",


cursor:
dragging
?
"grabbing"
:
"grab",


scrollbarWidth:"none",


WebkitOverflowScrolling:"touch",


userSelect:"none"


}}

>



<div

style={{


display:"flex",


gap:"32px",


width:"max-content",


padding:"20px 24px 90px",


position:"relative"


}}

>



<div

style={{


position:"absolute",


left:0,


right:0,


top:"292px",


height:"1px",


background:
"rgba(255,255,255,.15)"


}}

/>







{

projects.map(project=>(



<div

key={project.id}

style={{


width:

"clamp(260px,75vw,320px)",


flex:"0 0 auto",


display:"flex",


flexDirection:"column",


alignItems:"center",


scrollSnapAlign:"start"


}}

>



<TimelineCard


project={project}


onHover={onProjectHover}


onLeave={onProjectLeave}


/>






<div

style={{


height:"45px",


width:"1px",


background:
"rgba(255,255,255,.2)"


}}

/>







<div

style={{


width:"10px",


height:"10px",


borderRadius:"50%",


background:"#fff",


boxShadow:
"0 0 20px rgba(255,255,255,.8)"


}}

/>






<div

style={{


marginTop:"14px",


fontSize:"13px",


letterSpacing:"3px",


opacity:.65


}}

>

{project.year}

</div>





</div>



))

}



</div>


</div>






<style jsx>{`

div::-webkit-scrollbar{

display:none;

}

`}</style>



</section>


)

}