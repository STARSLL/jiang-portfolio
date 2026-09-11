export interface ProjectDetail{


  slug:string;

  id:string;

  title:string;

  category:string;

  year:string;

  intro:string;

  pages:string[];

  cover:string;


}





function makePageList(
  folder:string,
  start:number,
  end:number
){


  const pages:string[]=[];


  for(
    let i=start;
    i<=end;
    i++
  ){

    pages.push(
      `/${folder}/${String(i).padStart(2,"0")}.jpg`
    );

  }


  return pages;

}





export const projectDetails:ProjectDetail[]=[



/* =====================
   01
===================== */


{

slug:"paw-guardians",

id:"01",

title:"PAW GUARDIANS ALLIANCE",

category:"AI INTERACTION SYSTEM",

year:"2025",


intro:
"This project explores emotional interaction between humans and animals through AI technology and intelligent companion systems.",


cover:
"/portfolio-a/04.jpg",


pages:
makePageList(
"portfolio-a",
4,
13
)

},






/* =====================
   02
===================== */


{

slug:"opera-journey",

id:"02",

title:"OPERA JOURNEY",

category:"CULTURAL EXPERIENCE",

year:"2024",


intro:
"A cultural interaction design project exploring traditional opera through immersive experiences and emotional connection.",


cover:
"/portfolio-a/14.jpg",


pages:
makePageList(
"portfolio-a",
14,
23
)

},







/* =====================
   03
===================== */


{

slug:"magit-fit",

id:"03",

title:"MAGIT FIT 020",

category:"SMART WEARABLE",

year:"2024",


intro:
"A smart wearable design project exploring lightweight materials, ergonomic structures and future lifestyle interaction.",


cover:
"/portfolio-a/24.jpg",


pages:
makePageList(
"portfolio-a",
24,
32
)

},







/* =====================
   04
===================== */


{

slug:"sage",

id:"04",

title:"SAGE",

category:"SPECIAL EQUIPMENT",

year:"2023",


intro:
"A special equipment design project focusing on operational efficiency, structure optimization and field application scenarios.",


cover:
"/portfolio-a/33.jpg",


pages:
makePageList(
"portfolio-a",
33,
38
)

},







/* =====================
   05
===================== */


{

slug:"cultural-pulse",

id:"05",

title:"CULTURAL PULSE",

category:"CULTURAL DESIGN",

year:"2024",


intro:
"A cultural research and design project exploring regional traditions, cultural identity and emotional connections through design innovation.",


cover:
"/portfolio-b/01.jpg",


pages:
makePageList(
"portfolio-b",
1,
7
)

},







/* =====================
   06
===================== */


{

slug:"arbor-guardian",

id:"06",

title:"ARBOR GUARDIAN",

category:"ECOLOGICAL INTERACTION SYSTEM",

year:"2024",


intro:
"A smart ecological protection system integrating bionic structures, sensing technology and environmental monitoring.",


cover:
"/portfolio-b/08.jpg",


pages:
makePageList(
"portfolio-b",
8,
13
)

},







/* =====================
   07
===================== */


{

slug:"laminar-ruler",

id:"07",

title:"LAMINAR RULER",

category:"MEDICAL DESIGN",

year:"2024",


intro:
"A precision medical navigation tool designed to improve spinal surgery accuracy and accessibility.",


cover:
"/portfolio-b/14.jpg",


pages:
makePageList(
"portfolio-b",
14,
18
)

},







/* =====================
   08
===================== */


{

slug:"echoes-of-healing",

id:"08",

title:"ECHOES OF HEALING",

category:"AI HEALTHCARE EXPERIENCE",

year:"2024",


intro:
"A healthcare experience system combining VR reconstruction and AI emotional support for trauma recovery.",


cover:
"/portfolio-b/19.jpg",


pages:
makePageList(
"portfolio-b",
19,
23
)

}



];