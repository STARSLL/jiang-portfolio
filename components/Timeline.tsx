"use client";

import {useRef, useState} from "react";
import TimelineCard from "./TimelineCard";
import {projects} from "./projects";

export default function Timeline(){

  const scrollRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const [dragging,setDragging] = useState(false);

  const handleMouseDown = (e:React.MouseEvent<HTMLDivElement>) => {
    if(!scrollRef.current) return;

    isDragging.current = true;
    setDragging(true);

    startX.current = e.clientX;
    startScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
    if(!isDragging.current || !scrollRef.current) return;

    const delta = e.clientX - startX.current;
    scrollRef.current.scrollLeft = startScrollLeft.current - delta;
  };

  const stopDragging = () => {
    isDragging.current = false;
    setDragging(false);
  };

  const handleTouchStart = (e:React.TouchEvent<HTMLDivElement>) => {
    if(!scrollRef.current) return;

    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e:React.TouchEvent<HTMLDivElement>) => {
    if(!isDragging.current || !scrollRef.current) return;

    const delta = e.touches[0].clientX - startX.current;
    scrollRef.current.scrollLeft = startScrollLeft.current - delta;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return(
    <section
      style={{
        position:"relative",
        width:"100%",
        marginTop:"42px"
      }}
    >
      <div
        style={{
          position:"absolute",
          right:"88px",
          top:"-8px",
          fontSize:"11px",
          letterSpacing:"4px",
          opacity:0.42,
          textTransform:"uppercase",
          pointerEvents:"none"
        }}
      >
        drag to explore →
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          width:"100%",
          overflowX:"auto",
          overflowY:"hidden",
          cursor:dragging ? "grabbing" : "grab",
          userSelect:"none",
          WebkitUserSelect:"none",
          scrollbarWidth:"none",
          msOverflowStyle:"none",
          paddingBottom:"24px"
        }}
      >
        <div
          style={{
            position:"relative",
            display:"flex",
            alignItems:"flex-start",
            gap:"52px",
            width:"max-content",
            paddingLeft:"140px",
            paddingRight:"420px",
            minHeight:"420px"
          }}
        >
          <div
            style={{
              position:"absolute",
              left:"0px",
              right:"0px",
              top:"322px",
              height:"1px",
              background:"rgba(255,255,255,0.13)"
            }}
          />

          {projects.map((project)=>(
            <div
              key={project.id}
              style={{
                width:"300px",
                flex:"0 0 auto",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
              }}
            >
              <TimelineCard project={project} />

              <div
                style={{
                  width:"1px",
                  height:"44px",
                  background:"rgba(255,255,255,0.18)"
                }}
              />

              <div
                style={{
                  width:"10px",
                  height:"10px",
                  borderRadius:"999px",
                  background:"#f5f7fb",
                  boxShadow:"0 0 16px rgba(255,255,255,0.85), 0 0 30px rgba(255,255,255,0.28)"
                }}
              />

              <div
                style={{
                  marginTop:"16px",
                  fontSize:"14px",
                  letterSpacing:"3px",
                  opacity:0.6
                }}
              >
                {project.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}