"use client";


import {
  useFrame
} from "@react-three/fiber";


import {
  useMemo,
  useRef
} from "react";


import * as THREE from "three";


import {
  Points,
  PointMaterial
}
from "@react-three/drei";


import {

createSphere,
createTree,
createChair,
createDrone

}

from "./ShapeGenerator";



type ShapeMode =
"sphere"
|
"tree"
|
"chair"
|
"drone";





export default function MorphingParticles(){


const ref =
useRef<THREE.Points>(null);



// =============================
// 粒子数量
// =============================

const count = 30000;



// =============================
// 四种形态
// =============================


const sphere =
useMemo(
()=>createSphere(count),
[]
);


const tree =
useMemo(
()=>createTree(count),
[]
);


const chair =
useMemo(
()=>createChair(count),
[]
);


const drone =
useMemo(
()=>createDrone(count),
[]
);




// =============================
// 初始位置
// =============================


const initialPositions =
useMemo(()=>{


const arr =
new Float32Array(
count*3
);



sphere.forEach(
(p,i)=>{


arr[i*3]=p[0];

arr[i*3+1]=p[1];

arr[i*3+2]=p[2];


}
);


return arr;


},[sphere]);




// =============================
// 颜色数组
// =============================


const colors =
useMemo(()=>{


const arr =
new Float32Array(
count*3
);



for(
let i=0;
i<count;
i++
){


arr[i*3]=0.95;

arr[i*3+1]=0.97;

arr[i*3+2]=1;


}


return arr;


},[]);




// =============================
// 粒子速度
// =============================


const velocity =
useMemo(
()=>new Float32Array(count*3),
[]
);




// =============================
// 随机相位
// =============================


const randomPhase =
useMemo(()=>{


const arr =
new Float32Array(count);



for(
let i=0;
i<count;
i++
){


arr[i]=
Math.random()
*
Math.PI*2;


}



return arr;


},[]);





const target =
useRef(
sphere
);



const mode =
useRef<ShapeMode>(
"sphere"
);



const lastPhase =
useRef(-1);






useFrame(
(state)=>{


if(!ref.current)
return;



const time =
state.clock.elapsedTime;



const phase =
Math.floor(
time/6
)%4;





// =============================
// 形态切换
// =============================


if(
phase!==lastPhase.current
){


lastPhase.current =
phase;



if(phase===0){

target.current=sphere;

mode.current="sphere";

}


else if(phase===1){

target.current=tree;

mode.current="tree";

}


else if(phase===2){

target.current=chair;

mode.current="chair";

}


else{

target.current=drone;

mode.current="drone";

}





for(
let i=0;
i<count;
i++
){


const index=i*3;


velocity[index]
+=
(Math.random()-0.5)
*
0.06;


velocity[index+1]
+=
(Math.random()-0.5)
*
0.06;


velocity[index+2]
+=
(Math.random()-0.5)
*
0.06;


}


}






const geometry =
ref.current.geometry;



const positionAttr =
geometry.attributes.position as THREE.BufferAttribute;



const colorAttr =
geometry.attributes.color as THREE.BufferAttribute;



const positions =
positionAttr.array as Float32Array;



const colorArray =
colorAttr.array as Float32Array;







for(
let i=0;
i<count;
i++
){


const index =
i*3;



let tx =
target.current[i][0];


let ty =
target.current[i][1];


let tz =
target.current[i][2];





// =============================
// 球体表面波动
// =============================


if(
mode.current==="sphere"
){


const len =
Math.sqrt(
tx*tx+
ty*ty+
tz*tz
)
||1;



const nx =
tx/len;


const ny =
ty/len;


const nz =
tz/len;



const wave1 =
Math.sin(
time*2+
i*0.025+
randomPhase[i]
)
*
0.06;



const wave2 =
Math.sin(
time*1.2+
(nx+ny+nz)*8
)
*
0.04;



const ripple =
1+
wave1+
wave2;



tx*=ripple;

ty*=ripple;

tz*=ripple;


}






// =============================
// 吸引运动
// =============================


const dx =
tx-
positions[index];


const dy =
ty-
positions[index+1];


const dz =
tz-
positions[index+2];




velocity[index]
+=
dx*0.002;



velocity[index+1]
+=
dy*0.002;



velocity[index+2]
+=
dz*0.002;




velocity[index]*=0.92;

velocity[index+1]*=0.92;

velocity[index+2]*=0.92;




positions[index]
+=
velocity[index];


positions[index+1]
+=
velocity[index+1];


positions[index+2]
+=
velocity[index+2];





// =============================
// 银色-绿色渐变
// =============================


const shimmer =
0.5+
0.5*
Math.sin(
time*2+
i*0.02
);



// 墨绿色比例
const greenMix =
mode.current==="sphere"
?
0.18+
shimmer*0.22
:
0.08;




const silver={
r:0.92,
g:0.95,
b:0.98
};


const darkGreen={
r:0.05,
g:0.25,
b:0.18
};


const brightGreen={
r:0.45,
g:1,
b:0.65
};




let r =
silver.r+
(darkGreen.r-silver.r)
*
greenMix;


let g =
silver.g+
(darkGreen.g-silver.g)
*
greenMix;


let b =
silver.b+
(darkGreen.b-silver.b)
*
greenMix;




const glow =
shimmer*
0.18;



r +=
(brightGreen.r-r)
*
glow;


g +=
(brightGreen.g-g)
*
glow;


b +=
(brightGreen.b-b)
*
glow;



colorArray[index]=r;

colorArray[index+1]=g;

colorArray[index+2]=b;



}




positionAttr.needsUpdate=true;

colorAttr.needsUpdate=true;





// =============================
// 旋转速度
// =============================


if(
mode.current==="sphere"
){


ref.current.rotation.y+=0.0015;

ref.current.rotation.x+=0.0003;


}
else{


ref.current.rotation.y+=0.001;


}



}

);







return(


<Points

ref={ref}


// 球体大小调整
// 修改这里控制主体大小

scale={1.3}


position={[
1.5,
0,
0
]}

>



<bufferGeometry>


<bufferAttribute

attach="attributes-position"

args={[
initialPositions,
3
]}

count={
initialPositions.length / 3
}

/>



<bufferAttribute

attach="attributes-color"

args={[
colors,
3
]}

count={
colors.length / 3
}

/>



</bufferGeometry>





<PointMaterial


// 粒子大小
size={0.023}


// 透明度
opacity={0.98}


vertexColors


transparent


sizeAttenuation


depthWrite={false}


blending={
THREE.AdditiveBlending
}


/>



</Points>


);


}