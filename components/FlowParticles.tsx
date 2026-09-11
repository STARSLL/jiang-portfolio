"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";


export default function FlowParticles() {


  const ref = useRef<THREE.Points>(null);


  // 背景粒子数量
  const count = 18000;



  const baseData = useMemo(()=>{


    const positions =
      new Float32Array(count * 3);


    const seeds =
      new Float32Array(count);



    for(let i=0;i<count;i++){


      const index=i*3;


      // 横向展开范围
      const x =
      (Math.random()-0.5)*18;


      // 多层流带
      const band =
      Math.floor(
        Math.random()*5
      );


      const center =
      -2.2 + band*1.1;



      const y =
      center +
      (Math.random()-0.5)
      *0.95;



      const z =
      (Math.random()-0.5)*4.8;



      positions[index]=x;

      positions[index+1]=y;

      positions[index+2]=z;



      seeds[i]=
      Math.random()
      *
      Math.PI*2;


    }


    return {
      positions,
      seeds
    };


  },[]);




  const animatedPositions =
  useMemo(()=>{


    return new Float32Array(
      baseData.positions
    );


  },[baseData.positions]);





  useFrame((state)=>{


    if(!ref.current)
    return;



    const time =
    state.clock.elapsedTime;



    const positionAttr =
    ref.current.geometry
    .attributes
    .position as THREE.BufferAttribute;



    const arr =
    positionAttr.array as Float32Array;



    for(let i=0;i<count;i++){


      const index=i*3;



      const baseX =
      baseData.positions[index];


      const baseY =
      baseData.positions[index+1];


      const baseZ =
      baseData.positions[index+2];


      const seed =
      baseData.seeds[i];




      // 水平移动
      let travel =
      baseX+
      time*1.2+
      seed*0.35;



      travel =
      ((travel+9)%18)-9;




      // 主波浪
      const wave1 =
      Math.sin(
        travel*0.75+
        time*1.35+
        seed
      )
      *
      0.42;




      // 次级扰动
      const wave2 =
      Math.cos(
        travel*0.35-
        time*0.7+
        seed
      )
      *
      0.22;




      // 深度变化
      const depth =
      Math.sin(
        travel*0.22+
        time*0.9+
        seed
      )
      *
      0.28;




      arr[index]=travel;


      arr[index+1]=
      baseY+
      wave1+
      wave2;



      arr[index+2]=
      baseZ+
      depth;



    }



    positionAttr.needsUpdate=true;



  });







  return(


<points

ref={ref}

rotation={[

0,

0,

-0.5

]}

position={[

0.4,

0.2,

-0.6

]}

>


<bufferGeometry>


<bufferAttribute

attach="attributes-position"

args={[
  animatedPositions,
  3
]}

count={
animatedPositions.length / 3
}

/>


</bufferGeometry>





<pointsMaterial


color="#b8d8cf"


// 粒子大小
size={0.012}


// 透明度
opacity={0.25}


transparent


sizeAttenuation


depthWrite={false}


blending={
THREE.AdditiveBlending
}


/>


</points>


);


}