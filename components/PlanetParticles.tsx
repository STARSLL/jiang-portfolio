"use client";


import {
    Points,
    PointMaterial
} from "@react-three/drei";


import {
    useFrame
} from "@react-three/fiber";


import {
    useMemo,
    useRef
} from "react";


import * as THREE from "three";




export default function PlanetParticles(){


    const ref =
    useRef<THREE.Points>(null);



    // 粒子数量
    const count = 18000;



    const data =
    useMemo(()=>{


        const positions =
        new Float32Array(count * 3);



        const colors =
        new Float32Array(count * 3);



        const base =
        new Float32Array(count * 3);



        for(
            let i=0;
            i<count;
            i++
        ){


            const theta =
            Math.random()
            *
            Math.PI * 2;



            const phi =
            Math.acos(
                2*Math.random()-1
            );



            const radius = 1.35;



            const x =
            radius *
            Math.sin(phi) *
            Math.cos(theta);



            const y =
            radius *
            Math.sin(phi) *
            Math.sin(theta);



            const z =
            radius *
            Math.cos(phi);



            positions[i*3]=x;
            positions[i*3+1]=y;
            positions[i*3+2]=z;



            base[i*3]=x;
            base[i*3+1]=y;
            base[i*3+2]=z;



            /*
             * 颜色渐变
             * 深墨绿 → 荧光绿
             */

            const intensity =
            Math.random();



            const dark =
            new THREE.Color("#06352b");



            const bright =
            new THREE.Color("#45ff9b");



            const color =
            dark.clone()
            .lerp(
                bright,
                intensity
            );



            colors[i*3]=color.r;
            colors[i*3+1]=color.g;
            colors[i*3+2]=color.b;


        }



        return {
            positions,
            colors,
            base
        };


    },[]);






    useFrame((state)=>{


        if(!ref.current)
        return;



        const time =
        state.clock.elapsedTime;



        /*
         * 明确类型
         * 避免 Turbopack 解析问题
         */

        const position =
        ref.current.geometry
        .attributes
        .position
        .array as Float32Array;




        for(
            let i=0;
            i<count;
            i++
        ){



            const x =
            data.base[i*3];



            const y =
            data.base[i*3+1];



            const z =
            data.base[i*3+2];



            /*
             * 球体表面不规则波动
             */

            const wave =
            Math.sin(
                time*1.8
                +
                x*5
                +
                y*4
                +
                z*3
            )
            *
            0.035;



            const scale =
            1 + wave;



            position[i*3]
            =
            x * scale;



            position[i*3+1]
            =
            y * scale;



            position[i*3+2]
            =
            z * scale;


        }




        ref.current.geometry
        .attributes
        .position
        .needsUpdate=true;



        /*
         * 球体缓慢旋转
         */

        ref.current.rotation.y
        +=0.0018;



    });







    return(


        <Points
            ref={ref}
        >


            <bufferGeometry>


            <bufferAttribute

attach="attributes-position"

args={[
    data.positions,
    3
]}

/>



<bufferAttribute

attach="attributes-color"

args={[
    data.colors,
    3
]}

/>


            </bufferGeometry>





            <PointMaterial


                // 粒子大小
                size={0.015}


                transparent


                // 粒子透明度
                opacity={0.95}


                vertexColors


                sizeAttenuation


                blending={
                    THREE.AdditiveBlending
                }


            />



        </Points>


    );


}