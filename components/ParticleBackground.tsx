"use client";


import {
  Canvas
} from "@react-three/fiber";


import {
  Suspense,
  useEffect,
  useState
} from "react";


import {
  Environment
} from "@react-three/drei";


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





if(!visible)
return null;





return(


<div

className="particle-background"

style={{


position:"absolute",

inset:0,

zIndex:0,

background:

`
radial-gradient(
circle at 50% 40%,
rgba(18,80,65,.18),
transparent 35%
),

linear-gradient(
180deg,
#0b1010,
#050814
)
`


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





gl={{

antialias:true,

alpha:true

}}




>



<Suspense fallback={null}>



{/* 环境反射 */}

<Environment
preset="city"
/>




{/* 主体球 */}

<MorphingParticles />




{/* 横向生命流 */}

<FlowParticles />



</Suspense>



</Canvas>



</div>


);


}