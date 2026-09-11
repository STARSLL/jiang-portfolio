import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";

import ParticleBackground from "@/components/ParticleBackground";




export default function Home(){


return(


<main


style={{


background:"#242424",


minHeight:"100vh",


width:"100%",


overflowX:"hidden",


position:"relative"



}}



>


<Navbar />





<section


style={{


position:"relative",


height:"100vh",


width:"100%"


}}


>


{/* 粒子背景 */}

<ParticleBackground />





{/* Hero文字区域 */}

<Hero />





</section>



</main>



)


}