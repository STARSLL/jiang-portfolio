export function createSphere(
    count:number = 30000,
    radius:number = 3
){

    const points:number[][]=[];


    for(let i=0;i<count;i++){


        const phi =
        Math.acos(
            2*Math.random()-1
        );


        const theta =
        Math.random()*Math.PI*2;



        const noise =
        Math.sin(theta*10)
        *
        Math.cos(phi*8)
        *
        0.12;



        const r =
        radius + noise;



        points.push([

            r*Math.sin(phi)*Math.cos(theta),

            r*Math.sin(phi)*Math.sin(theta),

            r*Math.cos(phi)

        ]);

    }


    return points;

}






export function createTree(
    count:number = 30000
){

    const points:number[][]=[];


    for(let i=0;i<count;i++){


        const rand =
        Math.random();



        let x:number;
        let y:number;
        let z:number;



        /*
        根部
        */


        if(rand < 0.18){


            const angle =
            Math.random()
            *
            Math.PI*2;



            const length =
            Math.random()
            *
            2.5
            +
            0.5;



            y =
            -3
            -
            Math.random()*1.5;



            x =
            Math.cos(angle)
            *
            length;



            z =
            Math.sin(angle)
            *
            length;


        }




        /*
        粗壮树干
        */


        else if(rand <0.55){


            const height =
            Math.random()*6
            -
            2;



            const radius =
            0.45
            *
            Math.sqrt(
                Math.random()
            );



            const angle =
            Math.random()
            *
            Math.PI*2;



            x =
            Math.cos(angle)
            *
            radius;



            z =
            Math.sin(angle)
            *
            radius;



            y =
            height;



        }



        /*
        树枝
        */


        else if(rand <0.75){


            const branchHeight =
            Math.random()*3
            +
            1;



            const angle =
            Math.random()
            *
            Math.PI*2;



            const length =
            Math.random()
            *
            2
            +
            1;



            x =
            Math.cos(angle)
            *
            length;



            z =
            Math.sin(angle)
            *
            length;



            y =
            branchHeight;



        }



        /*
        巨大树冠
        */


        else{


            const angle =
            Math.random()
            *
            Math.PI*2;



            const crown =
            Math.pow(
                Math.random(),
                0.45
            )
            *
            3.2;



            x =
            Math.cos(angle)
            *
            crown;



            z =
            Math.sin(angle)
            *
            crown;



            y =
            Math.random()
            *
            2.5
            +
            2.5;


        }



        points.push([
            x,
            y,
            z
        ]);


    }



    return points;

}







export function createChair(
    count:number = 30000
){

    const points:number[][]=[];



    for(let i=0;i<count;i++){



        const r =
        Math.random();



        let x:number;
        let y:number;
        let z:number;



        /*
        坐垫
        */


        if(r<0.35){


            x =
            (Math.random()-0.5)
            *
            3;



            z =
            (Math.random()-0.5)
            *
            2.5;



            y =
            -0.2
            +
            Math.random()*0.25;


        }



        /*
        靠背
        */


        else if(r<0.65){


            x =
            (Math.random()-0.5)
            *
            3;



            y =
            Math.random()
            *
            3
            +
            0.2;



            z =
            1.1;



        }



        /*
        四个支撑结构
        */


        else{


            const side =
            Math.random()>0.5
            ?
            1
            :
            -1;



            x =
            side
            *
            (
                1+
                Math.random()*0.8
            );



            y =
            -2
            +
            Math.random()*2;



            z =
            side
            *
            (
                0.6+
                Math.random()*0.5
            );

        }



        points.push([
            x,
            y,
            z
        ]);


    }


    return points;

}

export function createProduct(
    count:number
){

    const points:number[][]=[];


    const addPoint=(
        x:number,
        y:number,
        z:number
    )=>{

        points.push([
            x,
            y,
            z
        ]);

    };



    /*
    中央机身
    */

    while(points.length<count*0.35){

        const x=
        (Math.random()-0.5)*1.8;


        const y=
        (Math.random()-0.5)*0.8;


        const z=
        (Math.random()-0.5)*0.8;


        addPoint(
            x,
            y,
            z
        );

    }





    /*
    左右机翼
    */


    while(points.length<count*0.65){


        const side =
        Math.random()>0.5
        ?1
        :-1;



        const x =
        side*
        (
            1+
            Math.random()*1.8
        );


        const y =
        (Math.random()-0.5)*0.15;


        const z =
        (Math.random()-0.5)*0.3;



        addPoint(
            x,
            y,
            z
        );


    }






    /*
    尾部支架

    */


    while(points.length<count){


        const x =
        (Math.random()-0.5)*0.2;


        const y =
        -0.8+
        Math.random()*0.8;


        const z =
        (Math.random()-0.5)*0.2;



        addPoint(
            x,
            y,
            z
        );

    }





    return points;

}

export function createDrone(
    count:number = 30000
){

    const points:number[][]=[];


    /*
    无人机整体缩放
    只影响无人机
    不影响球体/树/椅子
    */

    const scale = 1.8;



    /*
    1. 中央机身
    */

    const bodyCount =
    Math.floor(count*0.35);



    for(
        let i=0;
        i<bodyCount;
        i++
    ){

        const x =
        (
            Math.random()-0.5
        )
        *
        1.8;


        const y =
        (
            Math.random()-0.5
        )
        *
        0.45;


        const z =
        (
            Math.random()-0.5
        )
        *
        1.0;



        points.push([

            x*scale,
            y*scale,
            z*scale

        ]);

    }





    /*
    2. 四条机臂

    */

    const armCount =
    Math.floor(count*0.25);



    for(
        let i=0;
        i<armCount;
        i++
    ){


        const angle =
        Math.floor(
            Math.random()*4
        )
        *
        Math.PI/2;



        const length =
        Math.random()
        *
        1.8
        +
        0.8;



        const t =
        Math.random();



        const x =
        Math.cos(angle)
        *
        length
        *
        t;



        const z =
        Math.sin(angle)
        *
        length
        *
        t;



        const y =
        (
            Math.random()-0.5
        )
        *
        0.12;



        points.push([

            x*scale,
            y*scale,
            z*scale

        ]);


    }





    /*
    3. 四个旋翼

    */

    const rotorCenters = [

        [2.4,0,2.0],

        [-2.4,0,2.0],

        [2.4,0,-2.0],

        [-2.4,0,-2.0]

    ];




    while(
        points.length<count
    ){



        const center =
        rotorCenters[
            Math.floor(
                Math.random()*4
            )
        ];



        const angle =
        Math.random()
        *
        Math.PI*2;



        const radius =
        Math.random()
        *
        0.65;



        points.push([


            (
                center[0]
                +
                Math.cos(angle)*radius

            )
            *
            scale,



            (
                center[1]
                +
                (
                    Math.random()-0.5
                )
                *
                0.08

            )
            *
            scale,



            (
                center[2]
                +
                Math.sin(angle)*radius

            )
            *
            scale


        ]);



    }




    return points;

}