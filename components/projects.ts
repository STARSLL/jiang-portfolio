export interface ProjectItem{

  id:string;

  title:string;

  category:string;

  year:string;

  slug?:string;

  description?:string;

  // hover背景图片
  cover:string;

}



export const projects:ProjectItem[]=[


{
id:"01",

title:"PAW GUARDIANS",

category:"AI INTERACTION SYSTEM",

year:"2025",

slug:"paw-guardians",

description:
"A smart companion system exploring emotional interaction between humans and animals.",

cover:"/portfolio-a/04.jpg"

},



{
id:"02",

title:"OPERA JOURNEY",

category:"CULTURAL EXPERIENCE",

year:"2025",

slug:"opera-journey",

description:
"A service and interaction design project built around traditional opera culture and immersive participation.",

cover:"/portfolio-a/14.jpg"

},



{
id:"03",

title:"MAGIT FIT 020",

category:"SMART WEARABLE",

year:"2025",

slug:"magit-fit",

description:
"A wearable product concept focusing on intelligent interaction, ergonomics and lifestyle integration.",

cover:"/portfolio-a/24.jpg"

},



{
id:"04",

title:"SAGE",

category:"SPECIAL EQUIPMENT",

year:"2025",

slug:"sage",

description:
"A concept project exploring equipment, operation enhancement and field application scenarios.",

cover:"/portfolio-a/33.jpg"

},




{
id:"05",

title:"CULTURAL PULSE",

category:"CULTURAL DESIGN",

year:"2024",

slug:"cultural-pulse",

description:
"A cultural exploration project investigating regional traditions, rituals and emotional connections through design.",

cover:"/portfolio-b/01.jpg"

},




{
id:"06",

title:"ARBOR GUARDIAN",

category:"ECOLOGICAL INTERACTION SYSTEM",

year:"2024",

slug:"arbor-guardian",

description:
"A smart protection system integrating bionic engineering, ecological sensing and environmental monitoring for urban trees.",

cover:"/portfolio-c/01.jpg"

},




{
id:"07",

title:"LAMINAR RULER",

category:"MEDICAL DESIGN",

year:"2024",

slug:"laminar-ruler",

description:
"A smart spinal screw navigation tool designed to improve precision and accessibility in adolescent scoliosis surgery.",

cover:"/portfolio-d/01.jpg"

},




{
id:"08",

title:"ECHOES OF HEALING",

category:"AI HEALTHCARE EXPERIENCE",

year:"2024",

slug:"echoes-of-healing",

description:
"A therapeutic system combining VR reconstruction and AI emotional support for trauma recovery.",

cover:"/portfolio-e/01.jpg"

}



];