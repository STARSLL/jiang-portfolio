"use client";

import Timeline from "./Timeline";

export default function WorksScene(){

  return(
    <section
      style={{
        position:"relative",
        minHeight:"100vh",
        width:"100%",
        background:"#050814",
        color:"#f5f7fb",
        overflow:"hidden",
        paddingTop:"150px",
        paddingBottom:"80px"
      }}
    >
      <div
        style={{
          position:"absolute",
          inset:0,
          pointerEvents:"none",
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.035), transparent 28%), radial-gradient(circle at 78% 30%, rgba(255,255,255,0.03), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0))"
        }}
      />

      <div
        style={{
          position:"relative",
          zIndex:2,
          paddingLeft:"92px",
          paddingRight:"92px"
        }}
      >
        <div
          style={{
            fontSize:"13px",
            letterSpacing:"10px",
            opacity:0.58,
            marginBottom:"22px",
            textTransform:"uppercase"
          }}
        >
          Selected Works
        </div>

        <h2
          style={{
            margin:0,
            fontSize:"96px",
            lineHeight:0.95,
            fontWeight:600,
            letterSpacing:"1px",
            textTransform:"uppercase"
          }}
        >
          Projects
        </h2>
      </div>

      <div
        style={{
          position:"relative",
          zIndex:2,
          marginTop:"46px"
        }}
      >
        <Timeline />
      </div>
    </section>
  );
}