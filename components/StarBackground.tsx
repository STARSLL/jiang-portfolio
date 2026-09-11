"use client";


import {
Canvas
}
from "@react-three/fiber";


import {
Points,
PointMaterial
}
from "@react-three/drei";


import {
useMemo
}
from "react";





function Stars(){


const particles =
useMemo(()=>{


const count = 800;


const arr =
new Float32Array(
count*3
);



for(
let i=0;
i<count;
i++
){


arr[i*3]
=
(Math.random()-0.5)
*
20;



arr[i*3+1]
=
(Math.random()-0.5)
*
12;



arr[i*3+2]
=
(Math.random()-0.5)
*
10;



}


return arr;


},[]);





return(

<Points
positions={particles}
>


<PointMaterial

color="#9ca8bd"

size={0.015}

transparent

opacity={0.45}

sizeAttenuation

/>


</Points>

)

}







export default function StarBackground(){


return(


<div

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
5
]

}}

>


<Stars/>


</Canvas>


</div>


)


}