"use client";


import { useRouter } from "next/navigation";



export default function Hero(){


    const router = useRouter();



    return(


        <section

        style={{

            position:"absolute",

            left:"90px",

            bottom:"150px",

            zIndex:20,

            color:"#ffffff"

        }}

        >



            <div

            style={{

                fontSize:"13px",

                letterSpacing:"11px",

                opacity:0.75,

                marginBottom:"38px",

                fontWeight:400

            }}

            >

                INDUSTRIAL DESIGNER


            </div>






            <h1

            style={{

                fontSize:"54px",

                fontWeight:600,

                letterSpacing:"5px",

                lineHeight:1.15,

                margin:0,

                textTransform:"uppercase"

            }}

            >

                DESIGNING

                <br/>

                FUTURE


            </h1>






            <p

            style={{

                marginTop:"35px",

                fontSize:"13px",

                letterSpacing:"10px",

                opacity:0.75

            }}

            >

                HUMAN × TECHNOLOGY × INTELLIGENCE


            </p>







            <button


            onClick={()=>{

                router.push("/works");

            }}



            style={{


                marginTop:"45px",

                width:"220px",

                height:"55px",

                border:"none",

                background:"#ffffff",

                color:"#111",

                fontSize:"13px",

                letterSpacing:"2px",

                cursor:"pointer"


            }}


            >


                EXPLORE WORKS


            </button>





        </section>


    )


}