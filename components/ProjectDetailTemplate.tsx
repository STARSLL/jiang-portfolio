"use client";

import Link from "next/link";
import type {ProjectDetail} from "./projectDetails";

interface Props{
  project:ProjectDetail;
}

export default function ProjectDetailTemplate({project}:Props){

  return(
    <main
      style={{
        minHeight:"100vh",
        background:"#050814",
        color:"#f5f7fb"
      }}
    >
      {/* 顶部导航区 */}
      <div
        style={{
          position:"sticky",
          top:0,
          zIndex:30,
          backdropFilter:"blur(14px)",
          WebkitBackdropFilter:"blur(14px)",
          background:"rgba(5,8,20,0.72)",
          borderBottom:"1px solid rgba(255,255,255,0.08)"
        }}
      >
        <div
          style={{
            maxWidth:"1440px",
            margin:"0 auto",
            padding:"24px 42px",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration:"none",
              color:"#f5f7fb",
              fontSize:"16px",
              letterSpacing:"6px",
              textTransform:"uppercase"
            }}
          >
            JIANG
          </Link>

          <div
            style={{
              display:"flex",
              gap:"28px",
              alignItems:"center"
            }}
          >
            <Link
              href="/works"
              style={{
                textDecoration:"none",
                color:"#f5f7fb",
                fontSize:"13px",
                letterSpacing:"5px",
                textTransform:"uppercase",
                opacity:0.86
              }}
            >
              Works
            </Link>

            <Link
              href="/"
              style={{
                textDecoration:"none",
                color:"#f5f7fb",
                fontSize:"13px",
                letterSpacing:"5px",
                textTransform:"uppercase",
                opacity:0.62
              }}
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section
        style={{
          position:"relative",
          overflow:"hidden",
          borderBottom:"1px solid rgba(255,255,255,0.08)"
        }}
      >
        <div
          style={{
            position:"absolute",
            inset:0,
            backgroundImage:`linear-gradient(rgba(5,8,20,0.68), rgba(5,8,20,0.9)), url(${project.cover})`,
            backgroundSize:"cover",
            backgroundPosition:"center center",
            opacity:0.42
          }}
        />

        <div
          style={{
            position:"relative",
            zIndex:2,
            maxWidth:"1440px",
            margin:"0 auto",
            padding:"88px 42px 72px 42px"
          }}
        >
          <div
            style={{
              fontSize:"13px",
              letterSpacing:"8px",
              textTransform:"uppercase",
              opacity:0.58,
              marginBottom:"28px"
            }}
          >
            Project {project.id}
          </div>

          <h1
            style={{
              margin:0,
              fontSize:"64px",
              lineHeight:1.02,
              fontWeight:600,
              letterSpacing:"1px",
              textTransform:"uppercase",
              maxWidth:"980px"
            }}
          >
            {project.title}
          </h1>

          <div
            style={{
              marginTop:"26px",
              fontSize:"13px",
              letterSpacing:"7px",
              textTransform:"uppercase",
              opacity:0.65
            }}
          >
            {project.category} · {project.year}
          </div>

          <p
            style={{
              marginTop:"34px",
              maxWidth:"840px",
              fontSize:"17px",
              lineHeight:1.9,
              opacity:0.78
            }}
          >
            {project.intro}
          </p>
        </div>
      </section>

      {/* 图片正文 */}
      <section
        style={{
          maxWidth:"1160px",
          margin:"0 auto",
          padding:"48px 24px 90px 24px"
        }}
      >
        <div
          style={{
            fontSize:"12px",
            letterSpacing:"6px",
            textTransform:"uppercase",
            opacity:0.48,
            marginBottom:"24px"
          }}
        >
          Portfolio Pages
        </div>

        <div
          style={{
            display:"flex",
            flexDirection:"column",
            gap:"26px"
          }}
        >
          {project.pages.map((src,index)=>(
            <div
              key={src}
              style={{
                borderRadius:"22px",
                overflow:"hidden",
                background:"rgba(255,255,255,0.02)",
                border:"1px solid rgba(255,255,255,0.08)",
                boxShadow:"0 18px 50px rgba(0,0,0,0.24)"
              }}
            >
              <img
                src={src}
                alt={`${project.title} page ${index+1}`}
                style={{
                  width:"100%",
                  height:"auto",
                  display:"block"
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}