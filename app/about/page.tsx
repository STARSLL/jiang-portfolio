import Navbar from "@/components/Navbar";


export default function AboutPage(){


const chineseResume=[
"/resume/resume-01.jpg",
"/resume/resume-02.jpg"
];


const englishResume=[
"/resume/resume-03.jpg",
"/resume/resume-04.jpg"
];



return(

<main

style={{
background:"#050814",
minHeight:"100vh",
color:"#f5f7fb"
}}

>


<Navbar />



<section

style={{

maxWidth:"1200px",

margin:"0 auto",

padding:"150px 40px 100px"

}}

>


<div

style={{

fontSize:"13px",

letterSpacing:"8px",

opacity:.5

}}

>

ABOUT ME

</div>



<h1

style={{

fontSize:"72px",

marginTop:"30px",

letterSpacing:"2px",

fontWeight:600

}}

>

CURRICULUM VITAE

</h1>





{/* 中文简历 */}

<section

style={{

marginTop:"90px"

}}

>


<h2

style={{

fontSize:"18px",

letterSpacing:"6px",

fontWeight:500,

opacity:.8,

marginBottom:"35px"

}}

>

CHINESE RESUME

</h2>



<div

style={{

display:"grid",

gridTemplateColumns:"repeat(2,1fr)",

gap:"35px"

}}

>


{

chineseResume.map((src)=>(

<div

key={src}

style={{

borderRadius:"24px",

overflow:"hidden",

border:
"1px solid rgba(255,255,255,0.1)",

background:
"rgba(255,255,255,0.03)",

transition:
"transform .4s ease"

}}

>


<img

src={src}

style={{

width:"100%",

display:"block"

}}

/>


</div>


))

}


</div>


</section>






{/* 英文简历 */}

<section

style={{

marginTop:"100px"

}}

>


<h2

style={{

fontSize:"18px",

letterSpacing:"6px",

fontWeight:500,

opacity:.8,

marginBottom:"35px"

}}

>

ENGLISH RESUME

</h2>




<div

style={{

display:"grid",

gridTemplateColumns:"repeat(2,1fr)",

gap:"35px"

}}

>


{

englishResume.map((src)=>(


<div

key={src}

style={{

borderRadius:"24px",

overflow:"hidden",

border:
"1px solid rgba(255,255,255,0.1)",

background:
"rgba(255,255,255,0.03)"

}}

>


<img

src={src}

style={{

width:"100%",

display:"block"

}}

/>


</div>


))

}


</div>


</section>



</section>


</main>

)

}