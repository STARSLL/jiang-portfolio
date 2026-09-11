"use client";


import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";



export default function FlowParticles(){


    const ref = useRef<any>(null);



const particles = useMemo(()=>{


const count = 5000;


const arr = new Float32Array(count*3);



for(let i=0;i<count;i++){


const t=Math.random()*Math.PI*4;


const radius =
3.2+
Math.random()*1.8;


const angle =
t + radius*0.8;



const x =
Math.cos(angle)*radius;


const z =
Math.sin(angle)*radius;



const y =
(Math.random()-0.5)
*
(radius*0.8);



arr[i*3]=x;

arr[i*3+1]=y;

arr[i*3+2]=z;


}


return arr;


},[]);



useFrame(()=>{


if(ref.current){


ref.current.rotation.y +=0.0008;


}


})



return (

<Points
ref={ref}
positions={particles}
>


<PointMaterial

color="#dce3ed"

size={0.014}

transparent

opacity={0.45}

sizeAttenuation

/>


</Points>


)


}