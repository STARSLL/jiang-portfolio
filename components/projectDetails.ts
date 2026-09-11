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
  
  function makePageList(start:number,end:number){
    const arr:string[] = [];
  
    for(let i=start;i<=end;i++){
      arr.push(`/portfolio-a/${String(i).padStart(2,"0")}.jpg`);
    }
  
    return arr;
  }
  
  export const projectDetails:ProjectDetail[] = [
    {
      slug:"paw-guardians",
      id:"01",
      title:"PAW GUARDIANS ALLIANCE",
      category:"AI INTERACTION SYSTEM",
      year:"2025",
      intro:"This section is currently presented using the original portfolio pages as image content, allowing the website to be completed quickly while preserving the visual narrative of the project.",
      cover:"/portfolio-a/04.jpg",
      pages:makePageList(4,13)
    },
    {
      slug:"opera-journey",
      id:"02",
      title:"OPERA JOURNEY",
      category:"CULTURAL EXPERIENCE",
      year:"2024",
      intro:"This project is temporarily displayed through the original portfolio spreads. A more refined case-study layout and detailed storytelling can be added later.",
      cover:"/portfolio-a/14.jpg",
      pages:makePageList(14,23)
    },
    {
      slug:"magit-fit",
      id:"03",
      title:"MAGIT FIT 020",
      category:"SMART WEARABLE",
      year:"2024",
      intro:"This project page currently uses each portfolio spread as a full-width image sequence, which is the fastest way to complete the visual archive of the site.",
      cover:"/portfolio-a/24.jpg",
      pages:makePageList(24,32)
    },
    {
      slug:"sage",
      id:"04",
      title:"SAGE",
      category:"SPECIAL EQUIPMENT",
      year:"2023",
      intro:"This section is filled using the original portfolio pages for rapid publishing. Later, the content can be reorganized into a more detailed product-story format.",
      cover:"/portfolio-a/33.jpg",
      pages:makePageList(33,38)
    }
  ];