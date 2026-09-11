"use client";

import Image from "next/image";


interface Props{

start:number;

end:number;

folder?:string;

}


export default function PortfolioViewer({

start,

end,

folder="portfolio-a"

}:Props){


const images=[];


for(let i=start;i<=end;i++){

images.push(
`${i}.jpg`
)

}



return(

<div

style={{

width:"100%",

padding:"80px 8%",

background:"#050505"

}}

>


{

images.map((img,index)=>(


<div

key={img}

style={{

marginBottom:"60px"

}}

>


<Image

src={`/${folder}/${img}`}

alt={`page-${index+start}`}

width={1600}

height={900}

style={{

width:"100%",

height:"auto",

borderRadius:"12px"

}}


/>


</div>


))


}



</div>


)


}