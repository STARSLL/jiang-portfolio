"use client";


import {
Points,
PointMaterial
}
from "@react-three/drei";


import {
useMemo
}
from "react";



export default function PlanetParticles(){


const count=12000;



const positions=useMemo(()=>{


const arr=new Float32Array(count*3);



for(let i=0;i<count;i++){


const r=1.35;



const theta=Math.random()*Math.PI*2;

const phi=Math.acos(
Math.random()*2-1
);



arr[i*3]
=
r*Math.sin(phi)*Math.cos(theta);



arr[i*3+1]
=
r*Math.sin(phi)*Math.sin(theta);



arr[i*3+2]
=
r*Math.cos(phi);



}



return arr;



},[]);





return(


<Points

positions={positions}

>



<PointMaterial

color="#dbe7ff"

size={0.018}

transparent

opacity={0.8}

sizeAttenuation

/>


</Points>


)


}