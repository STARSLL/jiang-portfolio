export interface ProjectItem{
    id:string;
    title:string;
    category:string;
    year:string;
    slug?:string;
    description?:string;
  }
  
  export const projects:ProjectItem[] = [
    {
      id:"01",
      title:"PAW GUARDIANS",
      category:"AI INTERACTION SYSTEM",
      year:"2025",
      slug:"paw-guardians",
      description:"A smart companion system exploring emotional interaction between humans and animals."
    },
    {
      id:"02",
      title:"OPERA JOURNEY",
      category:"CULTURAL EXPERIENCE",
      year:"2025",
      slug:"opera-journey",
      description:"A service and interaction design project built around traditional opera culture and immersive participation."
    },
    {
      id:"03",
      title:"MAGIT FIT 020",
      category:"SMART WEARABLE",
      year:"2025",
      slug:"magit-fit",
      description:"A wearable product concept focusing on intelligent interaction, ergonomics and lifestyle integration."
    },
    {
      id:"04",
      title:"SAGE",
      category:"SPECIAL EQUIPMENT",
      year:"2025",
      slug:"sage",
      description:"A concept project exploring equipment, operation enhancement and field application scenarios."
    },
  
    // 下面 4 个先占位，后续你有内容再补
    {
      id:"05",
      title:"COMING SOON",
      category:"FUTURE PROJECT",
      year:"2024"
    },
    {
      id:"06",
      title:"COMING SOON",
      category:"FUTURE PROJECT",
      year:"2024"
    },
    {
      id:"07",
      title:"COMING SOON",
      category:"FUTURE PROJECT",
      year:"2024"
    },
    {
      id:"08",
      title:"COMING SOON",
      category:"FUTURE PROJECT",
      year:"2024"
    }
  ];