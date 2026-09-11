"use client";


import {

Canvas

}
from "@react-three/fiber";


import {

Suspense,
useEffect,
useState

}
from "react";


import MorphingParticles from "./MorphingParticles";

import FlowParticles from "./FlowParticles";





export default function ParticleBackground(){



const [visible,setVisible]=useState(true);




useEffect(()=>{


const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(
(entry)=>{


setVisible(
entry.isIntersecting
);


}

);


},

{
threshold:0.1
}

);



const section =
document.querySelector(
".hero"
);



if(section)
observer.observe(section);



return()=>{


observer.disconnect();


}


},[]);





if(!visible){

return null;

}




return(


<div

className="particle-background"

style={{

position:"absolute",

inset:0,

zIndex:0

}}

>


<Canvas



camera={{

position:[
0,
0,
8
],

fov:45

}}


dpr={[1,1.5]}

>


<Suspense fallback={null}>


<MorphingParticles/>


<FlowParticles/>


</Suspense>



</Canvas>


</div>


);


}