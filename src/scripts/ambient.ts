/** Quiet atmospheric points/links. No external graphics dependency. */
const canvas=document.querySelector<HTMLCanvasElement>('#ambient-particles');
if(canvas){
 const ctx=canvas.getContext('2d');
 if(ctx){
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let width=0,height=0,dpr=1,frame=0,last=0;
  let visible=document.visibilityState==='visible';
  let pointer={x:0,y:0,active:false};
  type Particle={x:number,y:number,dx:number,dy:number,r:number};
  let particles:Particle[]=[];
  const random=(a:number,b:number)=>a+Math.random()*(b-a);
  function resize(){
   width=window.innerWidth;height=window.innerHeight;
   dpr=Math.min(window.devicePixelRatio||1,1.5);
   canvas!.width=Math.max(1,Math.round(width*dpr));
   canvas!.height=Math.max(1,Math.round(height*dpr));
   canvas!.style.width=width+'px';canvas!.style.height=height+'px';
   ctx!.setTransform(dpr,0,0,dpr,0,0);
   const count=motion.matches?18:width<700?19:width<1050?30:50;
   particles=Array.from({length:count},()=>({x:random(0,width),y:random(0,height),dx:random(-.075,.075),dy:random(-.055,.055),r:random(.9,1.9)}));
   draw(false);
  }
  function draw(advance:boolean){
   ctx!.clearRect(0,0,width,height);
   const dark=document.documentElement.dataset.theme==='dark';
   const base=dark?'121,206,198':'22,99,107';
   const violet=dark?'185,111,188':'92,44,101';
   const particleAlpha=dark?.32:.23;
   const maxDist=width<700?95:145;
   for(let i=0;i<particles.length;i++){
    const p=particles[i];
    if(advance){p.x+=p.dx;p.y+=p.dy;if(p.x<0)p.x=width;if(p.x>width)p.x=0;if(p.y<0)p.y=height;if(p.y>height)p.y=0;}
    if(pointer.active&&advance){const ox=p.x-pointer.x,oy=p.y-pointer.y;const dist=Math.hypot(ox,oy);if(dist<140&&dist>1){p.x+=ox/dist*.2;p.y+=oy/dist*.2;}}
    for(let j=i+1;j<particles.length;j++){
     const q=particles[j],distance=Math.hypot(p.x-q.x,p.y-q.y);
     if(distance<maxDist){ctx!.strokeStyle=`rgba(${base},${(1-distance/maxDist)*(dark?.13:.09)})`;ctx!.lineWidth=.6;ctx!.beginPath();ctx!.moveTo(p.x,p.y);ctx!.lineTo(q.x,q.y);ctx!.stroke();}
    }
    ctx!.fillStyle=`rgba(${i%6===0?violet:base},${particleAlpha})`;
    ctx!.beginPath();ctx!.arc(p.x,p.y,p.r,0,Math.PI*2);ctx!.fill();
   }
  }
  function loop(t:number){if(!visible)return;const target=width<700?50:35;if(t-last>=target){draw(!motion.matches);last=t;}if(!motion.matches)frame=requestAnimationFrame(loop);}
  const restart=()=>{cancelAnimationFrame(frame);visible=document.visibilityState==='visible';draw(false);if(visible&&!motion.matches)frame=requestAnimationFrame(loop);};
  document.addEventListener('visibilitychange',restart);
  window.addEventListener('resize',resize,{passive:true});
  window.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;pointer={x:e.clientX,y:e.clientY,active:true};},{passive:true});
  window.addEventListener('pointerout',()=>pointer.active=false,{passive:true});
  motion.addEventListener?.('change',()=>{resize();restart()});
  resize();restart();
 }
}
