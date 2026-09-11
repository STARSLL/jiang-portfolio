import PortfolioViewer from "@/components/PortfolioViewer";


export default function InspectionPage(){


return(

<main

style={{

background:"#050505",

minHeight:"100vh",

color:"#fff"

}}

>


<header

style={{

padding:"40px 80px",

fontSize:"14px",

letterSpacing:"5px"

}}

>

JIANG

</header>



<section

style={{

padding:"40px 80px"

}}

>


<p

style={{

letterSpacing:"8px",

opacity:.5

}}

>

PROJECT 01

</p>


<h1

style={{

fontSize:"80px",

marginTop:"20px"

}}

>

INSPECTION ROBOT

</h1>


</section>



<PortfolioViewer

start={1}

end={32}

/>


</main>


)


}