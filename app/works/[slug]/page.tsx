import {notFound} from "next/navigation";
import ProjectDetailTemplate from "@/components/ProjectDetailTemplate";
import {projectDetails} from "@/components/projectDetails";

interface PageProps{
  params:Promise<{
    slug:string;
  }>;
}

export async function generateStaticParams(){
  return projectDetails.map((item)=>({
    slug:item.slug
  }));
}

export default async function WorkDetailPage({params}:PageProps){

  const {slug} = await params;

  const project = projectDetails.find((item)=>item.slug === slug);

  if(!project){
    notFound();
  }

  return <ProjectDetailTemplate project={project} />;
}