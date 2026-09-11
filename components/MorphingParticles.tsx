"use client";


import {
    useFrame
} from "@react-three/fiber";


import {
    Points,
    PointMaterial
}
from "@react-three/drei";


import {
    useMemo,
    useRef
}
from "react";


import * as THREE from "three";


import {

    createSphere,
    createTree,
    createChair,
    createDrone

}
from "./ShapeGenerator";






export default function MorphingParticles(){



    const ref =
    useRef<THREE.Points>(null);



    const count =
    30000;




    /*
    四种形态
    */


    const sphere =
    useMemo(()=>createSphere(count),[]);


    const tree =
    useMemo(()=>createTree(count),[]);


    const chair =
    useMemo(()=>createChair(count),[]);


    const drone =
    useMemo(()=>createDrone(count),[]);







    /*
    当前粒子位置

    */


    const positions =
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


    },[]);






    /*
    粒子速度

    */

    const velocity =
    useMemo(()=>{


        return new Float32Array(
            count*3
        );


    },[]);








    const target =
    useRef(
        sphere
    );



    const mode =
    useRef<
    "sphere"|
    "tree"|
    "chair"|
    "drone"
    >
    ("sphere");



    const lastPhase =
    useRef(-1);






    useFrame(
    (state)=>{


        const time =
        state.clock.elapsedTime;



        /*
        6秒一个形态

        */

        const phase =
        Math.floor(
            time/6
        )
        %
        4;





        /*
        进入新形态

        */


        if(
            phase !== lastPhase.current
        ){



            lastPhase.current =
            phase;



            /*
            给予轻微爆散速度

            */


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
                0.12;


                velocity[index+1]
                +=
                (Math.random()-0.5)
                *
                0.12;


                velocity[index+2]
                +=
                (Math.random()-0.5)
                *
                0.12;


            }






            if(
                phase===0
            ){

                target.current=sphere;

                mode.current="sphere";

            }



            else if(
                phase===1
            ){

                target.current=tree;

                mode.current="tree";

            }




            else if(
                phase===2
            ){

                target.current=chair;

                mode.current="chair";

            }




            else{


                target.current=drone;

                mode.current="drone";

            }


        }








        /*
        粒子运动

        */


        for(
            let i=0;
            i<count;
            i++
        ){



            const index=i*3;



            /*
            目标吸引力

            */


            const dx =
            target.current[i][0]
            -
            positions[index];


            const dy =
            target.current[i][1]
            -
            positions[index+1];


            const dz =
            target.current[i][2]
            -
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






            /*
            阻尼

            */

            velocity[index]
            *=
            0.92;



            velocity[index+1]
            *=
            0.92;



            velocity[index+2]
            *=
            0.92;






            /*
            更新位置

            */


            positions[index]
            +=
            velocity[index];



            positions[index+1]
            +=
            velocity[index+1];



            positions[index+2]
            +=
            velocity[index+2];



        }









        /*
        旋转

        */


        if(
            ref.current
        ){


            if(
                mode.current==="sphere"
            ){


                ref.current.rotation.y
                +=0.0015;


                ref.current.rotation.x
                +=0.0005;


            }



            else if(
                mode.current==="drone"
            ){


                ref.current.rotation.y
                +=0.003;


            }



            else{


                ref.current.rotation.y
                +=0.0012;


            }


        }



    });








    return(


        <Points

            ref={ref}

            positions={positions}

            scale={1.25}

            position={[
                0,
                -0.15,
                0
            ]}

        >



            <PointMaterial


                color="#d8dde5"


                size={0.018}


                transparent


                opacity={0.88}


                sizeAttenuation


            />



        </Points>


    );


}