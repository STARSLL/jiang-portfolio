"use client";

import { useRouter } from "next/navigation";


export default function Hero(){


const router = useRouter();



return(


<section

className="hero-container"

>


<div className="hero-panel">



{/* 名字 */}

<div

className="hero-name"

>

JIANG SHENGXIN

</div>




{/* 职业 */}

<div

className="hero-role"

>

INDUSTRIAL DESIGNER

</div>






<h1

className="hero-title"

>

DESIGNING

<br/>

FUTURE


</h1>





<p

className="hero-tagline"

>

HUMAN × TECHNOLOGY × INTELLIGENCE

<span className="typing-cursor"></span>

</p>






<button

className="explore-btn"

onClick={()=>router.push("/works")}

>

EXPLORE WORKS


</button>




</div>






<style jsx>{`



.hero-container{


position:absolute;


/* 左侧位置 */

left:

clamp(24px,6vw,90px);



bottom:

clamp(90px,15vh,150px);



z-index:20;



color:#f5f7fb;



width:auto;


}




/* =========================

玻璃背景面板

========================= */


.hero-panel{


padding:

32px 36px;


/*
整体内部间距

越大：
框越宽松

*/


width:

720px;


/*
背景框宽度

可以调整：

600 小

720 当前

850 更宽


*/


border-radius:

28px;


/* 圆角大小 */


background:


linear-gradient(

180deg,

rgba(190,205,220,.22),

rgba(60,70,90,.18)

);


/*

玻璃颜色


上方透明灰

下方深灰


透明度越大越明显

*/


border:

1px solid

rgba(255,255,255,.18);


/*

边缘亮度

*/


backdrop-filter:

blur(35px);


/*

玻璃模糊

30-40之间比较像科技UI

*/


-webkit-backdrop-filter:

blur(35px);



box-shadow:


0 30px 90px

rgba(0,0,0,.45),


inset 0 1px 0

rgba(255,255,255,.12);



}





/* =========================

名字

========================= */


.hero-name{


font-size:

13px;


/* 名字大小 */


letter-spacing:

10px;


/* 字间距 */


opacity:

.75;


/* 透明度 */


margin-bottom:

22px;


}





/* =========================

职业

========================= */


.hero-role{


font-size:

13px;


/* 大小 */


letter-spacing:

10px;


/* 间距 */


opacity:

.75;



margin-bottom:

38px;


}





/* =========================

主标题

========================= */


.hero-title{


font-size:

clamp(42px,8vw,64px);



font-weight:

600;



letter-spacing:

5px;



line-height:

1.12;



margin:

0;



}





/* =========================

科技标语

========================= */


.hero-tagline{


margin-top:

35px;



font-size:

13px;



letter-spacing:

7px;



opacity:

.75;



white-space:

nowrap;


/*
禁止换行

*/


display:flex;



align-items:center;



}




/* 输入闪烁光标 */


.typing-cursor{


display:inline-block;



width:

8px;


/* 小方块宽度 */


height:

14px;


/* 小方块高度 */


margin-left:

12px;


/* 距离文字 */


background:

#dfe8f5;


/* 光标颜色 */


animation:

blink 1s infinite;



}




@keyframes blink{


0%,50%{


opacity:1;


}



51%,100%{


opacity:0;


}


}






/* =========================

按钮

========================= */


.explore-btn{


margin-top:

45px;



padding:

15px 42px;



border-radius:

999px;



border:

1px solid

rgba(255,255,255,.25);



background:

rgba(180,180,180,.12);



backdrop-filter:

blur(18px);



-webkit-backdrop-filter:

blur(18px);



color:white;



font-size:

13px;



letter-spacing:

5px;



cursor:pointer;



transition:.35s;



}




.explore-btn:hover{


background:

rgba(255,255,255,.18);



transform:

translateY(-5px);



}





@media(max-width:768px){



.hero-panel{


width:

calc(100vw - 48px);



padding:

25px;



}



.hero-title{


font-size:

42px;


}



.hero-tagline{


white-space:

normal;


}



}



`}</style>


</section>


)

}