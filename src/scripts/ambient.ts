/** Ambient field: low-density particles and flowing iso-contours. Decorative, never captures input. */
const canvas=document.querySelector<HTMLCanvasElement>('#ambient-particles');
const ctx=canvas?.getContext('2d',{alpha:true});
if(canvas&&ctx){
 const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
 let width=0,height=0,scale=1,frame=0,last=0,elapsed=0,visible=!document.hidden;
 let pointer={x:0,y:0,active:false};
 type Particle={x:number;y:number;vx:number;vy:number;r:number};
 let particles:Particle[]=[];
 const random=(a:number,b:number)=>a+Math.random()*(b-a);
 function resize(){width=Math.max(window.innerWidth,1);height=Math.max(window.innerHeight,1);scale=Math.min(window.devicePixelRatio||1,1.6);canvas!.width=Math.round(width*scale);canvas!.height=Math.round(height*scale);canvas!.style.width=width+'px';canvas!.style.height=height+'px';ctx!.setTransform(scale,0,0,scale,0,0);
  const density=motion.matches?12:width<640?12:width<1080?23:38;
  particles=Array.from({length:density},()=>({x:random(0,width),y:random(0,height),vx:random(-.03,.03),vy:random(-.02,.02),r:random(.65,1.5)}));paint(false);
 }
 function colors(){const dark=document.documentElement.dataset.theme==='dark';return {dark,teal:dark?'102,215,203':'14,101,105',violet:dark?'157,97,168':'91,40,98'};}
 function paint(advance:boolean){ctx!.clearRect(0,0,width,height);const c=colors();
  // A few long, slow scientific field contours, not a full-screen wallpaper or visual noise.
  const number=width<640?3:5,step=width<640?11:15;
  for(let i=0;i<number;i++){
   const baseline=height*(.15+i*.18);
   ctx!.beginPath();ctx!.lineWidth=.8;
   for(let x=-10;x<=width+step;x+=step){
    const proximity=pointer.active?Math.max(0,1-Math.hypot(x-pointer.x,baseline-pointer.y)/240):0;
    const y=baseline+Math.sin(x/(width<640?103:160)+i*.91+elapsed*.00024)*16+Math.sin(x/290-i*.6-elapsed*.00017)*12+proximity*Math.sin(elapsed*.001+x*.03)*12;
    if(x===-10)ctx!.moveTo(x,y);else ctx!.lineTo(x,y);
   }
   ctx!.strokeStyle=`rgba(${i%2?c.violet:c.teal},${c.dark?.095:.065})`;ctx!.stroke();
  }
  for(let i=0;i<particles.length;i++){
   const p=particles[i];if(advance){p.x=(p.x+p.vx+width)%width;p.y=(p.y+p.vy+height)%height;}
   if(pointer.active&&advance){const dx=p.x-pointer.x,dy=p.y-pointer.y,d=Math.hypot(dx,dy);if(d<120&&d>0){p.x+=dx/d*.28;p.y+=dy/d*.28;}}
   // Limit expensive connections to neighbours; never construct a dense web.
   if(i%2===0)for(let j=i+1;j<particles.length;j++){
    const q=particles[j],d=Math.hypot(p.x-q.x,p.y-q.y),max=width<640?90:155;
    if(d<max){ctx!.strokeStyle=`rgba(${c.teal},${(1-d/max)*(c.dark?.11:.085)})`;ctx!.lineWidth=.7;ctx!.beginPath();ctx!.moveTo(p.x,p.y);ctx!.lineTo(q.x,q.y);ctx!.stroke();}
   }
   ctx!.fillStyle=`rgba(${i%7===0?c.violet:c.teal},${c.dark?.32:.25})`;ctx!.beginPath();ctx!.arc(p.x,p.y,p.r,0,Math.PI*2);ctx!.fill();
  }
 }
 function loop(t:number){if(!visible)return;const interval=width<640?55:34;if(t-last>=interval){if(!motion.matches)elapsed+=t-last;paint(!motion.matches);last=t;}frame=requestAnimationFrame(loop);}
 function restart(){cancelAnimationFrame(frame);visible=!document.hidden;paint(false);if(visible&&!motion.matches)frame=requestAnimationFrame(loop);}
 let resizePending=0;
 window.addEventListener('resize',()=>{cancelAnimationFrame(resizePending);resizePending=requestAnimationFrame(()=>{resize();restart();});},{passive:true});
 document.addEventListener('visibilitychange',restart);
 window.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'&&e.pointerType!=='pen')return;pointer={x:e.clientX,y:e.clientY,active:true};},{passive:true});
 window.addEventListener('pointerout',()=>pointer.active=false,{passive:true});
 document.querySelector('.theme-toggle')?.addEventListener('click',()=>paint(false));
 motion.addEventListener?.('change',()=>{resize();restart();});
 resize();restart();
 window.addEventListener('pagehide',()=>cancelAnimationFrame(frame),{once:true});
}
