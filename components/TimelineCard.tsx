"use client";

import Link from "next/link";
import {useState} from "react";

interface ProjectData{
  id:string;
  title:string;
  category:string;
  year:string;
  slug?:string;
  description?:string;
  cover?:string;
}

interface Props{
  project:ProjectData;
}

export default function TimelineCard({project}:Props){

  const [hover,setHover] = useState(false);

  const href =
    project.slug
      ? `/works/${project.slug}`
      : "#";

  return(
    <Link
      href={href}
      style={{
        textDecoration:"none",
        color:"inherit",
        display:"block"
      }}
    >
      <div
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        style={{
          width:"300px",
          height:"220px",
          borderRadius:"24px",
          border:"1px solid rgba(255,255,255,0.12)",
          backgroundColor:hover
            ? "rgba(255,255,255,0.06)"
            : "rgba(255,255,255,0.025)",
          backdropFilter:"blur(8px)",
          WebkitBackdropFilter:"blur(8px)",
          padding:"28px 28px 24px 28px",
          boxSizing:"border-box",
          transition:"transform 0.35s ease, background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
          transform:hover ? "translateY(-10px)" : "translateY(0px)",
          boxShadow:hover
            ? "0 18px 40px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.04) inset"
            : "0 0 0 rgba(0,0,0,0)",
          overflow:"hidden",
          position:"relative"
        }}
      >
        <div
          style={{
            fontSize:"12px",
            letterSpacing:"5px",
            opacity:0.42,
            marginBottom:"28px"
          }}
        >
          PROJECT {project.id}
        </div>

        <h3
          style={{
            margin:0,
            fontSize:"28px",
            lineHeight:1.12,
            fontWeight:600,
            letterSpacing:"1px",
            textTransform:"uppercase",
            maxWidth:"220px"
          }}
        >
          {project.title}
        </h3>

        <div
          style={{
            position:"absolute",
            left:"28px",
            bottom:"24px",
            fontSize:"11px",
            letterSpacing:"5px",
            opacity:0.52,
            textTransform:"uppercase"
          }}
        >
          {project.category}
        </div>
      </div>
    </Link>
  );
}