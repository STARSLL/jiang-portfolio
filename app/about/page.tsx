"use client";

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



  const renderResume=(images:string[],label:string)=>{

    return(

      <section className="resume-section">


        <div className="resume-label">
          {label}
        </div>


        <div className="resume-grid">

        {
          images.map((src)=>(
            
            <div
              className="resume-card"
              key={src}
            >

              <img
                src={src}
                draggable={false}
                alt=""
              />

            </div>

          ))
        }


        </div>


      </section>

    )

  }



return(

<main className="about-page">


<Navbar/>


<div className="about-container">


<header className="about-header">


<div className="about-eyebrow">
ABOUT ME
</div>


<h1>
CURRICULUM
<br/>
VITAE
</h1>


</header>



{
renderResume(
chineseResume,
"CHINESE RESUME"
)
}




{
renderResume(
englishResume,
"ENGLISH RESUME"
)
}



</div>


<style jsx>{`


.about-page{

min-height:100vh;

background:#050814;

color:#f5f7fb;

overflow-x:hidden;

}



.about-container{

max-width:1200px;

margin:auto;

padding:

150px 40px 120px;

}




.about-header{

margin-bottom:120px;

}



.about-eyebrow{

font-size:13px;

letter-spacing:10px;

opacity:.55;

}



.about-header h1{


margin-top:35px;

font-size:72px;

line-height:1.05;

font-weight:600;

letter-spacing:2px;


}



/* resume */


.resume-section{

margin-bottom:110px;

}




.resume-label{


font-size:14px;

letter-spacing:8px;

font-weight:500;

color:#cfd5df;

margin-bottom:45px;


}



.resume-grid{


display:grid;

grid-template-columns:

repeat(2,minmax(0,1fr));


gap:40px;


}



.resume-card{


width:100%;

overflow:hidden;

border-radius:22px;

border:

1px solid rgba(255,255,255,.12);


background:

rgba(255,255,255,.03);


}



.resume-card img{


width:100%;

height:auto;

display:block;


}





@media(max-width:768px){



.about-container{


padding:

130px 30px 80px;


}



.about-header{

margin-bottom:90px;

}



.about-header h1{

font-size:46px;

}



.resume-grid{


grid-template-columns:

1fr;


gap:32px;


}



.resume-label{


font-size:12px;

letter-spacing:6px;

margin-bottom:35px;


}



.resume-card{

border-radius:18px;

}


}



`}</style>



</main>


)

}