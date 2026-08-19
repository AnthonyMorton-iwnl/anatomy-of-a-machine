/* ============================================================================
   ANATOMY OF A MACHINE — a scroll-driven exploded view of a desktop computer.
   Everything below is generated procedurally: no models, no images, no network.
   ========================================================================== */
const T = THREE;

/* ---------------------------------------------------------------- constants */
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const SCROLL_VH = 1180;              // page length, in viewport heights
const N_PARTS   = 14;

/* ------------------------------------------------------------------ chapters */
const CH = [
  { t0:0.000, t1:0.085, tag:'Overview', rail:'The box', title:'A <em>Box</em><br>of Sand',
    body:'Fifteen or so parts, bolted into a steel shell, arranged to move electrons in patterns fast enough to pass for thought. Almost none of it has changed shape since 1995 — the layout you are looking at was fixed by a specification Intel published that year, and every part in it still obeys.',
    specs:[['Form factor','ATX · 1995'],['Volume','≈ 48 litres'],['Mass','≈ 12 kg'],['Logic transistors','≈ 90 billion']] },

  { t0:0.085, t1:0.170, tag:'Enclosure', rail:'Side panel', title:'Tempered<br><em>Glass</em>',
    body:'Heated to about 620 °C, then blasted with cold air. The surface freezes first and locks the still-hot interior into permanent tension — a pane in a state of civil war with itself. It is four times stronger than ordinary glass, and when it finally loses, it <strong>dices instead of shards</strong>.',
    specs:[['Thickness','4 mm'],['Process','Thermal toughening'],['Surface stress','≥ 69 MPa'],['Failure mode','Blunt dice']] },

  { t0:0.170, t1:0.255, tag:'Structure', rail:'Chassis', title:'The <em>Chassis</em>',
    body:'Cold-rolled steel, folded rather than cast, with nine threaded standoffs in positions that have not moved in thirty years. That grid is the whole trick: any board fits any case, from any maker, because in 1995 everyone agreed on <strong>305 by 244 millimetres</strong> and never renegotiated.',
    specs:[['Material','SPCC steel, 0.8 mm'],['Board area','305 × 244 mm'],['Standoffs','9'],['Panel gauge','1.0 mm']] },

  { t0:0.255, t1:0.345, tag:'Thermal', rail:'Airflow', title:'Moving <em>Air</em>',
    body:'A computer is, thermally, a 500-watt heater with opinions. Four fans pull cool air through the front and push hot air out of the back, deliberately unbalanced so the case runs at slightly <strong>positive pressure</strong> and dust is pushed out of the seams rather than sucked in.',
    specs:[['Fan size','120 mm × 4'],['Airflow','≈ 60 CFM each'],['Static pressure','≈ 1.5 mm H₂O'],['Case volume cycled','≈ 35 × / min']] },

  { t0:0.345, t1:0.450, tag:'Power', rail:'Power supply', title:'The <em>Supply</em>',
    body:'Mains alternating current comes in at 50 hertz and is immediately destroyed: rectified to DC, then chopped back up by a transistor switching <strong>eighty thousand times a second</strong>. A transformer core only has to be big enough for one cycle — so at 80 kHz it is the size of a fist instead of a suitcase.',
    specs:[['Input','100–240 V AC'],['Rails','+12 V · +5 V · +3.3 V'],['Switching','65–100 kHz'],['Efficiency','≥ 90 % (80 PLUS Gold)']] },

  { t0:0.450, t1:0.520, tag:'Storage', rail:'Storage', title:'Trapped<br><em>Charge</em>',
    body:'A solid-state drive stores nothing but electrons, parked on an island of polysilicon and surrounded by an insulator so good they simply cannot get off. No spinning, no magnetism, no moving part anywhere — just a few hundred electrons per bit, sitting still. <strong>Modern chips stack over 200 of these layers vertically.</strong>',
    specs:[['Interface','PCIe 4.0 × 4'],['Sequential read','≈ 7,000 MB/s'],['Cell layers','176 – 232'],['Data retention','≥ 1 year, unpowered']] },

  { t0:0.520, t1:0.610, tag:'Compute', rail:'Graphics', title:'The <em>Graphics</em><br>Card',
    body:'Not really a card. It is a second computer — its own processor, its own memory, its own power delivery — that happens to live in a slot. It carries more transistors than everything else in the case put together, and it draws <strong>600 watts through six pins</strong> the size of a grain of rice.',
    specs:[['Transistors','76.3 billion'],['Shader cores','16,384'],['Memory bandwidth','1,008 GB/s'],['Board power','450 W']] },

  { t0:0.610, t1:0.675, tag:'Memory', rail:'Memory', title:'Leaking<br><em>Memory</em>',
    body:'One capacitor and one transistor per bit, and the capacitor leaks. So the chip reads and rewrites every single cell at least <strong>fifteen times a second</strong>, forever, just to keep the contents from evaporating. Cut the power and the pattern is gone before your hand leaves the switch.',
    specs:[['Capacity','32 GB (4 × 8)'],['Standard','DDR5-6000'],['Refresh interval','≤ 64 ms'],['Cells','≈ 275 billion']] },

  { t0:0.675, t1:0.760, tag:'Thermal', rail:'Cooler', title:'The <em>Heatpipe</em><br>Tower',
    body:'Each copper pipe is sealed, wicked, and holds a few drops of water at such low pressure that it <strong>boils at about 30 °C</strong>. Heat at the base turns water to vapour, vapour rushes to the cold end and condenses, the wick pulls it back. Nothing moves that you can see, and it beats solid copper by a factor of a hundred.',
    specs:[['Heatpipes','6 × 6 mm copper'],['Fins','45 × 0.4 mm aluminium'],['Fin surface','≈ 1.4 m²'],['Dissipation','250 W']] },

  { t0:0.760, t1:0.835, tag:'Silicon', rail:'Processor', title:'The <em>Processor</em>',
    body:'The metal lid is a lid. The computer is the fingernail of patterned sand underneath it — about 70 mm², with features so small that a few dozen atoms make up a wall. At 5.7 GHz one clock tick lasts 175 picoseconds, in which <strong>light travels roughly five centimetres</strong>. Nothing can cross the motherboard in a single tick.',
    specs:[['Process','TSMC 5 nm'],['Transistors','13.1 billion'],['Peak clock','5.7 GHz'],['Contacts','1,718 pins']] },

  { t0:0.835, t1:0.910, tag:'Substrate', rail:'Mainboard', title:'Twelve<br><em>Layers</em>',
    body:'Woven fibreglass and copper, pressed into a sandwich a dozen layers deep, with signal planes buried between shields. Those looping squiggles are not decoration — they are <strong>deliberate detours</strong>, added so that parallel signals travel identical distances and arrive on the same picosecond.',
    specs:[['Layers','8 – 12'],['Copper weight','≈ 35 µm'],['PCIe 5.0','32 GT/s per lane'],['Length match','± 0.1 mm']] },

  { t0:0.910, t1:1.001, tag:'Assembly', rail:'Everything', title:'Fifteen<br><em>Parts</em>',
    body:'Quartz sand, refined to one impurity in ten billion. Copper from Chile, cobalt from the Congo, lithography from one building in the Netherlands, assembly across thirty-odd countries — condensed into a box that sits under a desk and is expected to work, silently, for a decade.',
    specs:[['Parts shown','14'],['Assembly time','≈ 45 minutes'],['Supply chain','30+ countries'],['Expected life','≈ 10 years']] },
];

/* -------------------------------------------------------------------- maths */
const clamp=(v,a,b)=>v<a?a:v>b?b:v;
const sat  = v=>v<0?0:v>1?1:v;
const lerp =(a,b,t)=>a+(b-a)*t;
const inv  =(v,a,b)=>sat((v-a)/(b-a||1e-6));
const easeIO=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const easeOut=t=>1-Math.pow(1-t,3);
const easeOutQ=t=>1-Math.pow(1-t,5);
const smooth=t=>t*t*(3-2*t);
/* eased 0→1 window */
const win=(t,a,b)=>easeIO(inv(t,a,b));

/* ------------------------------------------------------- procedural textures */
function cnv(s){const c=document.createElement('canvas');c.width=c.height=s;return c;}
function tex(c,rep=1){const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(rep,rep);t.anisotropy=8;t.colorSpace=T.SRGBColorSpace;return t;}
function texLin(c,rep=1){const t=tex(c,rep);t.colorSpace=T.NoColorSpace;return t;}

/* — printed circuit board: traces, serpentines, silkscreen, pads — */
function pcbCanvas(S=1024,tint='#0a0f0c'){
  const c=cnv(S),x=c.getContext('2d');
  x.fillStyle=tint;x.fillRect(0,0,S,S);
  // faint fibre weave
  x.globalAlpha=.05;x.strokeStyle='#4a6b58';x.lineWidth=1;
  for(let i=0;i<S;i+=7){x.beginPath();x.moveTo(i,0);x.lineTo(i,S);x.stroke();}
  for(let i=0;i<S;i+=7){x.beginPath();x.moveTo(0,i);x.lineTo(S,i);x.stroke();}
  x.globalAlpha=1;
  // copper traces, orthogonal + 45°
  const R=(a,b)=>a+Math.random()*(b-a);
  for(let n=0;n<260;n++){
    let px=R(0,S),py=R(0,S);
    x.beginPath();x.moveTo(px,py);
    const segs=2+((Math.random()*5)|0);
    for(let s=0;s<segs;s++){
      const len=R(18,150), d=(Math.random()*8)|0;
      const ang=d*Math.PI/4;
      px+=Math.cos(ang)*len; py+=Math.sin(ang)*len;
      x.lineTo(px,py);
    }
    x.strokeStyle=Math.random()<.22?'rgba(206,222,196,.26)':'rgba(138,172,142,.19)';
    x.lineWidth=R(1,2.6);x.lineCap='round';x.stroke();
  }
  // serpentine length-matching bundles (the squiggles)
  for(let n=0;n<7;n++){
    const ox=R(40,S-260),oy=R(40,S-160),amp=R(9,17),step=R(11,17),lanes=3+((Math.random()*4)|0);
    const horiz=Math.random()<.5;
    for(let l=0;l<lanes;l++){
      x.beginPath();
      let px=ox,py=oy+l*(amp*2+7);
      x.moveTo(px,py);
      for(let s=0;s<11;s++){
        const dir=s%2?-1:1;
        if(horiz){x.lineTo(px,py+amp*dir);px+=step;x.lineTo(px,py+amp*dir);}
        else     {x.lineTo(px+amp*dir,py);py+=step;x.lineTo(px+amp*dir,py);}
      }
      x.strokeStyle='rgba(214,230,204,.34)';x.lineWidth=1.7;x.stroke();
    }
  }
  // vias + pads
  for(let n=0;n<560;n++){
    const px=R(0,S),py=R(0,S),r=R(1.1,2.6);
    x.beginPath();x.arc(px,py,r,0,7);
    x.fillStyle='rgba(214,182,102,'+R(.30,.62).toFixed(2)+')';x.fill();
  }
  // silkscreen
  x.fillStyle='rgba(230,236,244,.34)';
  x.font='500 11px monospace';
  const words=['J14','CPU_FAN','PWR','U27','SATA0','DIMM_A1','M.2_1','CHA_FAN2','RST','Q7','C114','PCIE_X16','+12V','AUDIO','USB3_1','R202'];
  for(let n=0;n<70;n++){x.fillText(words[(Math.random()*words.length)|0],R(8,S-70),R(14,S-8));}
  x.strokeStyle='rgba(226,232,240,.22)';x.lineWidth=1.2;
  for(let n=0;n<34;n++){const w=R(24,90),h=R(14,44);x.strokeRect(R(0,S-w),R(0,S-h),w,h);}
  return c;
}

/* — grayscale roughness noise — */
function noiseCanvas(S=256,lo=.45,hi=1){
  const c=cnv(S),x=c.getContext('2d'),d=x.createImageData(S,S);
  for(let i=0;i<S*S;i++){
    const v=(lo+Math.random()*(hi-lo))*255|0;
    d.data[i*4]=d.data[i*4+1]=d.data[i*4+2]=v;d.data[i*4+3]=255;
  }
  x.putImageData(d,0,0);return c;
}
/* — brushed-metal roughness — */
function brushedCanvas(S=512){
  const c=cnv(S),x=c.getContext('2d');
  x.fillStyle='#8a8a8a';x.fillRect(0,0,S,S);
  for(let i=0;i<5200;i++){
    const y=Math.random()*S,w=40+Math.random()*260,v=110+Math.random()*90|0;
    x.strokeStyle='rgba('+v+','+v+','+v+',.30)';x.lineWidth=Math.random()*1.6;
    x.beginPath();x.moveTo(Math.random()*S,y);x.lineTo(Math.random()*S+w,y);x.stroke();
  }
  return c;
}
/* — hex mesh alpha (front panel / filters) — */
function hexCanvas(S=512,r=14,thick=3.4){
  const c=cnv(S),x=c.getContext('2d');
  x.fillStyle='#fff';x.fillRect(0,0,S,S);
  x.fillStyle='#000';
  const h=Math.sqrt(3)/2*r;
  for(let row=-1,y=0;y<S+r*2;row++,y=row*r*1.5){
    for(let col=-1,px=(row%2?h:0)-h;px<S+h*2;col++,px=(row%2?h:0)+col*h*2){
      x.beginPath();
      for(let i=0;i<6;i++){const a=Math.PI/180*(60*i-30);
        const vx=px+Math.cos(a)*(r-thick),vy=y+Math.sin(a)*(r-thick);
        i?x.lineTo(vx,vy):x.moveTo(vx,vy);}
      x.closePath();x.fill();
    }
  }
  return c;
}
/* — circular fan grille alpha — */
function grilleCanvas(S=512){
  const c=cnv(S),x=c.getContext('2d'),h=S/2;
  x.fillStyle='#000';x.fillRect(0,0,S,S);
  x.strokeStyle='#fff';x.lineCap='round';
  for(let i=0;i<9;i++){x.beginPath();x.arc(h,h,26+i*24,0,7);x.lineWidth=6;x.stroke();}
  x.lineWidth=9;
  for(let i=0;i<4;i++){const a=i*Math.PI/2+.4;
    x.beginPath();x.moveTo(h,h);x.lineTo(h+Math.cos(a)*h,h+Math.sin(a)*h);x.stroke();}
  x.beginPath();x.arc(h,h,30,0,7);x.fillStyle='#fff';x.fill();
  x.globalCompositeOperation='destination-in';
  x.beginPath();x.arc(h,h,h-4,0,7);x.fillStyle='#fff';x.fill();
  return c;
}
/* — label/sticker maker — */
function labelCanvas(w,h,lines,bg='#0b0d10',fg='#e6ebf2'){
  const c=document.createElement('canvas');c.width=w;c.height=h;
  const x=c.getContext('2d');
  x.fillStyle=bg;x.fillRect(0,0,w,h);
  x.strokeStyle='rgba(255,255,255,.14)';x.lineWidth=2;x.strokeRect(4,4,w-8,h-8);
  lines.forEach(L=>{
    x.fillStyle=L.c||fg;
    x.font=(L.w||'600')+' '+(L.s||18)+'px '+(L.f||'monospace');
    x.textAlign=L.a||'left';
    if(L.ls){ // letterspaced
      let cx=L.x;const str=L.t;
      for(const ch of str){x.fillText(ch,cx,L.y);cx+=x.measureText(ch).width+L.ls;}
    } else x.fillText(L.t,L.x,L.y);
  });
  return c;
}

/* ------------------------------------------------------- shared texture bank */
const TEXBANK={};
function buildTextures(){
  TEXBANK.pcb      = tex(pcbCanvas(1024,'#0e1a14'));
  TEXBANK.pcbRough = texLin(noiseCanvas(256,.55,.85),4);
  TEXBANK.brushed  = texLin(brushedCanvas(512),3);
  TEXBANK.noise    = texLin(noiseCanvas(256,.5,1),6);
  TEXBANK.hex      = texLin(hexCanvas(512,13,3.2),1);
  TEXBANK.grille   = texLin(grilleCanvas(512),1);
}

/* ------------------------------------------------------------- geometry kit */
function rrPath(w,h,r,P){
  const p=P||new T.Shape(), x=-w/2, y=-h/2;
  r=Math.min(r,w/2,h/2);
  p.moveTo(x+r,y);
  p.lineTo(x+w-r,y); p.quadraticCurveTo(x+w,y,x+w,y+r);
  p.lineTo(x+w,y+h-r); p.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  p.lineTo(x+r,y+h);   p.quadraticCurveTo(x,y+h,x,y+h-r);
  p.lineTo(x,y+r);     p.quadraticCurveTo(x,y,x+r,y);
  return p;
}
/* rounded box, depth along +Z, centred on origin */
function rbox(w,h,d,r=.3,bev=.1){
  const dep=Math.max(d-bev*2,.01);
  const g=new T.ExtrudeGeometry(rrPath(w,h,r),
    {depth:dep,bevelEnabled:bev>0,bevelSize:bev,bevelThickness:bev,bevelSegments:2,curveSegments:5,steps:1});
  g.translate(0,0,-dep/2); g.computeVertexNormals(); return g;
}
function holeRect(shape,cx,cy,w,h,r=.15){
  const p=new T.Path(); rrPath(w,h,r,p);
  const m=new T.Matrix3(); // Path has no transform: rebuild translated
  const q=new T.Path(); const x=cx-w/2,y=cy-h/2; r=Math.min(r,w/2,h/2);
  q.moveTo(x+r,y);
  q.lineTo(x+w-r,y); q.quadraticCurveTo(x+w,y,x+w,y+r);
  q.lineTo(x+w,y+h-r); q.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  q.lineTo(x+r,y+h);   q.quadraticCurveTo(x,y+h,x,y+h-r);
  q.lineTo(x,y+r);     q.quadraticCurveTo(x,y,x+r,y);
  shape.holes.push(q); return shape;
}
function holeCircle(shape,cx,cy,r){
  const p=new T.Path(); p.absarc(cx,cy,r,0,Math.PI*2,true); shape.holes.push(p); return shape;
}
function panel(shapeW,shapeH,thick,radius,build){
  const s=rrPath(shapeW,shapeH,radius); if(build)build(s);
  const g=new T.ExtrudeGeometry(s,{depth:thick,bevelEnabled:false,curveSegments:8,steps:1});
  g.translate(0,0,-thick/2); g.computeVertexNormals(); return g;
}
const M=(g,m,x,y,z)=>{const o=new T.Mesh(g,m); if(x!==undefined)o.position.set(x,y,z); return o;};
function sh(o,cast=true,recv=true){o.traverse(n=>{if(n.isMesh||n.isInstancedMesh){n.castShadow=cast;n.receiveShadow=recv;}});return o;}
const box=(w,h,d)=>new T.BoxGeometry(w,h,d);
const cyl=(r1,r2,h,s=16)=>new T.CylinderGeometry(r1,r2,h,s);

/* ------------------------------------------------------------- material bank */
let MAT={};
function buildMaterials(env){
  const std=(o)=>{const m=new T.MeshStandardMaterial(o);m.envMap=env;m.envMapIntensity=o.envMapIntensity??1;return m;};
  const phy=(o)=>{const m=new T.MeshPhysicalMaterial(o);m.envMap=env;m.envMapIntensity=o.envMapIntensity??1;return m;};
  MAT={
    steel:      std({color:0x1f242b,roughness:.42,metalness:.92,roughnessMap:TEXBANK.brushed,envMapIntensity:1.0}),
    steelIn:    std({color:0x1a1e25,roughness:.58,metalness:.85,roughnessMap:TEXBANK.noise}),
    aluDark:    std({color:0x474e58,roughness:.40,metalness:1,roughnessMap:TEXBANK.brushed,envMapIntensity:1.15}),
    ramAl:      std({color:0x79828e,roughness:.30,metalness:1,roughnessMap:TEXBANK.brushed,envMapIntensity:1.5}),
    aluFin:     std({color:0xa7b0bb,roughness:.3,metalness:1,envMapIntensity:1.5,side:T.DoubleSide}),
    copper:     std({color:0xc07b45,roughness:.24,metalness:1,envMapIntensity:1.6}),
    nickel:     std({color:0xc9d0d8,roughness:.16,metalness:1,envMapIntensity:1.7}),
    gold:       std({color:0xd0a94f,roughness:.28,metalness:1,envMapIntensity:1.5}),
    pcb:        std({color:0xffffff,map:TEXBANK.pcb,roughness:.62,metalness:.18,roughnessMap:TEXBANK.pcbRough,envMapIntensity:.8}),
    plastic:    std({color:0x14181e,roughness:.44,metalness:.05,roughnessMap:TEXBANK.noise}),
    plasticSat: std({color:0x1b1f26,roughness:.66,metalness:.02,roughnessMap:TEXBANK.noise}),
    rubber:     std({color:0x101216,roughness:.94,metalness:0}),
    chip:       std({color:0x232830,roughness:.36,metalness:.25}),
    chipDark:   std({color:0x171b21,roughness:.3,metalness:.3}),
    cap:        std({color:0x353b44,roughness:.4,metalness:.6}),
    glass:      phy({color:0x0a1018,roughness:.04,metalness:0,transparent:true,opacity:.40,ior:1.6,
                     clearcoat:1,clearcoatRoughness:.02,envMapIntensity:3.0,side:T.DoubleSide,depthWrite:false}),
    mesh:       std({color:0x0b0d10,roughness:.66,metalness:.5,alphaMap:TEXBANK.hex,transparent:true,side:T.DoubleSide}),
    grille:     std({color:0x0b0d10,roughness:.6,metalness:.6,alphaMap:TEXBANK.grille,transparent:true,side:T.DoubleSide}),
    fanBlade:   std({color:0x767e8a,roughness:.48,metalness:.08,side:T.DoubleSide,envMapIntensity:1.1}),
    fanFrame:   std({color:0x101318,roughness:.5,metalness:.1,roughnessMap:TEXBANK.noise}),
    wire:       std({color:0x14161a,roughness:.85,metalness:.05}),
    wire2:      std({color:0x2a2e35,roughness:.8,metalness:.05}),
    ihs:        std({color:0xc3ccd6,roughness:.30,metalness:.92,envMapIntensity:2.0}),
  };
  MAT.rgb=[]; // per-emitter materials so they can be tinted individually
}
const RGBSET=new Set();
function ledMat(hex){
  const m=new T.MeshStandardMaterial({color:0x0a0a0a,emissive:new T.Color(hex),emissiveIntensity:4.6,
    roughness:.35,metalness:0,transparent:true,opacity:.96});
  MAT.rgb.push(m); RGBSET.add(m); return m;
}

/* --------------------------------------------------------------- environment */
function buildEnv(renderer){
  const pm=new T.PMREMGenerator(renderer); pm.compileEquirectangularShader();
  const s=new T.Scene();
  const room=new T.Mesh(new T.BoxGeometry(80,54,80),
    new T.MeshBasicMaterial({color:0x11161f,side:T.BackSide})); s.add(room);
  const glow=(w,h,c,i,px,py,pz,rx,ry)=>{
    const m=new T.Mesh(new T.PlaneGeometry(w,h),
      new T.MeshBasicMaterial({color:new T.Color(c).multiplyScalar(i),side:T.DoubleSide}));
    m.position.set(px,py,pz); m.rotation.set(rx||0,ry||0,0); s.add(m);
  };
  glow(48,32,0xe6eefa,13.0,  24,16, 26, -0.5,-0.7);  // key
  glow(42,28,0x8cc6ff, 4.6, -30,10,-14,  0.2, 1.1);  // cool fill
  glow(32,42,0xffe8d2, 1.3,  12,-8, 34, -0.1, 0.1);  // warm bounce
  glow(70,22,0xffffff, 6.0,   0,25,  0,  Math.PI/2,0);// ceiling strip
  glow(34,34,0xbcd4f0, 4.0, -34,-4, 24,  0.0,-0.9);  // rear kicker
  glow(70,70,0x0b0f16, 1.4,   0,-26, 0, -Math.PI/2,0);// floor
  const t=pm.fromScene(s,0.03).texture;
  pm.dispose(); s.traverse(o=>{if(o.geometry)o.geometry.dispose();});
  return t;
}

/* ============================================================================
   THE MACHINE.  Units are centimetres.  Origin is the centre of the case.
   +X → glass side   +Y → up   +Z → front of the case
   Interior: X ±10.5   Y ±23.5   Z ±23     Motherboard tray wall at x = −7.3
   ========================================================================== */
const CASE={W:21,H:47,D:46, x:10.5, y:23.5, z:23, tray:-7.3, board:-6.6};

function instanced(n,geo,mat,fn){
  const im=new T.InstancedMesh(geo,mat,n),m=new T.Matrix4();
  for(let i=0;i<n;i++){fn(m,i);im.setMatrixAt(i,m);}
  im.instanceMatrix.needsUpdate=true;return im;
}
const _q=new T.Quaternion(),_e=new T.Euler(),_s=new T.Vector3(1,1,1),_p=new T.Vector3();
function tf(m,px,py,pz,rx=0,ry=0,rz=0,sx=1,sy=1,sz=1){
  _p.set(px,py,pz);_e.set(rx,ry,rz);_q.setFromEuler(_e);_s.set(sx,sy,sz);
  return m.compose(_p,_q,_s);
}

/* ------------------------------------------------------------------ the fan */
function buildFan(size=12,blades=7,tint=0x3fb9ff,thick=2.5){
  const g=new T.Group(), R=size/2;
  const frame=new T.Mesh(panel(size,size,thick,.9,s=>holeCircle(s,0,0,R-.55)),MAT.fanFrame);
  g.add(frame);
  // corner pads
  const pad=new T.Mesh(box(.9,.9,thick+.12),MAT.rubber);
  [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(c=>{const p=pad.clone();p.position.set(c[0]*(R-.6),c[1]*(R-.6),0);g.add(p);});
  // stator + rotor
  const rotor=new T.Group(); g.add(rotor); g.userData.rotor=rotor;
  const hub=new T.Mesh(cyl(R*.31,R*.33,thick*.62,24),MAT.plastic);
  hub.rotation.x=Math.PI/2; rotor.add(hub);
  const hubTop=new T.Mesh(cyl(R*.30,R*.30,.06,24),MAT.plasticSat);
  hubTop.rotation.x=Math.PI/2; hubTop.position.z=thick*.32; rotor.add(hubTop);
  // blade profile: a swept annulus segment, twisted about its radial axis
  const r0=R*.34, r1=R*.985, sw=.62, skew=.34, pts=[];
  for(let i=0;i<=12;i++){const a=-sw/2+sw*(i/12); pts.push(new T.Vector2(Math.cos(a)*r0,Math.sin(a)*r0));}
  for(let i=12;i>=0;i--){const a=-sw/2+sw*(i/12)+skew;
    const rr=r1-Math.pow(Math.abs(i/12-.5)*2,3)*R*.10;
    pts.push(new T.Vector2(Math.cos(a)*rr,Math.sin(a)*rr));}
  const bg=new T.ExtrudeGeometry(new T.Shape(pts),{depth:.055,bevelEnabled:false,curveSegments:2});
  for(let i=0;i<blades;i++){
    const holder=new T.Group(); holder.rotation.z=i/blades*Math.PI*2;
    const b=new T.Mesh(bg,MAT.fanBlade);
    b.rotation.x=.52; b.position.set(0,0,-thick*.10);
    holder.add(b); rotor.add(holder);
  }
  // rgb ring in the frame
  const ring=new T.Mesh(new T.TorusGeometry(R-.42,.13,6,44),ledMat(tint));
  ring.position.z=thick/2-.16; g.add(ring);
  const glow=new T.Mesh(new T.RingGeometry(R-1.05,R-.1,44),
    new T.MeshBasicMaterial({color:tint,transparent:true,opacity:.30,blending:T.AdditiveBlending,depthWrite:false}));
  glow.position.z=thick/2-.1; g.add(glow); g.userData.glow=glow;
  return sh(g);
}

/* ------------------------------------------------------------- steel chassis */
function buildChassis(){
  const g=new T.Group();
  const X=CASE.x,Y=CASE.y,Z=CASE.z;
  // floor + ceiling frame
  g.add(M(box(X*2,.5,Z*2),MAT.steelIn,0,-Y+.25,0));
  g.add(M(box(X*2,.35,3.2),MAT.steel,0, Y-.18,-Z+1.6));
  g.add(M(box(X*2,.35,3.2),MAT.steel,0, Y-.18, Z-1.6));
  g.add(M(box(1.6,.35,Z*2),MAT.steel,-X+.8,Y-.18,0));
  g.add(M(box(1.6,.35,Z*2),MAT.steel, X-.8,Y-.18,0));
  // left outer wall (behind the tray) — cable side
  g.add(M(box(.3,Y*2,Z*2),MAT.steel,-X+.15,0,0));
  // rear panel with apertures
  const rear=panel(X*2,Y*2,.3,.4,s=>{
    holeRect(s,-4.25, 12.5, 4.6,16.2,.25);        // motherboard I/O
    holeCircle(s, 4.4, 14.5, 6.05);               // exhaust fan
    for(let i=0;i<7;i++) holeRect(s,-.4, 3.0-i*2.03, 12.6,1.72,.2); // expansion slots
    holeRect(s, 1.5,-18.6, 15.2,8.8,.3);          // psu
    for(let i=0;i<7;i++) for(let j=0;j<4;j++) holeCircle(s,-8.6+j*.9, 6-i*.9, .3); // vent dots
  });
  const rearM=M(rear,MAT.steel,0,0,-Z+.15); g.add(rearM);
  // motherboard tray
  /* apertures given as [worldZ, worldY, sizeZ, sizeY] */
  const GR=[[-13.0,14.0,11.5,11.0],[-19.2,-1.0,4.6,25],[10.6,-1.0,3.6,25],[-4.0,-16.8,24,3.6]];
  const tray=panel(Z*2-2.4,Y*2-4,.2,.6,s=>{ GR.forEach(r=>holeRect(s,-r[0],r[1],r[2],r[3],1.2)); });
  const trayM=M(tray,MAT.steelIn,CASE.tray,0,0); trayM.rotation.y=Math.PI/2; g.add(trayM);
  GR.slice(1).forEach(r=>{
    const gm=new T.Mesh(panel(r[2]+.8,r[3]+.8,.55,1.5,s=>holeRect(s,0,0,r[2],r[3],1.2)),MAT.rubber);
    gm.rotation.y=Math.PI/2; gm.position.set(CASE.tray+.12,r[1],r[0]); g.add(gm);
  });
  // standoffs
  const so=[];
  [[-19,17],[-19,3],[-19,-8],[-8,17],[-8,3],[-8,-8],[1,17],[1,3],[1,-8]].forEach(p=>so.push([CASE.board-.42,p[1],p[0],0,Math.PI/2]));
  const soM=instanced(so.length,cyl(.34,.34,.62,10),MAT.aluDark,(m,i)=>tf(m,so[i][0],so[i][1],so[i][2],0,0,Math.PI/2));
  g.add(soM);
  // expansion slot covers
  for(let i=0;i<7;i++){
    const b=M(box(12.4,1.6,.16),MAT.steel,-.4,3.0-i*2.03,-Z+.42);
    if(i===1||i===2) b.visible=false; // gpu lives here
    g.add(b);
    const tab=M(box(1.6,2.6,.5),MAT.steel,5.6,3.0-i*2.03,-Z+.6); g.add(tab);
  }
  // front frame posts
  g.add(M(box(1.4,Y*2-1,1.2),MAT.steelIn,-X+.9,0,Z-1.1));
  g.add(M(box(1.4,Y*2-1,1.2),MAT.steelIn, X-.9,0,Z-1.1));
  // front fan bracket
  g.add(M(box(1.0,Y*2-2,.4),MAT.steelIn,-X+1.0,0,17.2));
  g.add(M(box(1.0,Y*2-2,.4),MAT.steelIn, X-1.0,0,17.2));
  // feet
  [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(c=>{
    const f=new T.Group();
    f.add(M(cyl(1.5,1.7,.7,18),MAT.plasticSat,0,-.35,0));
    f.add(M(cyl(1.55,1.55,.4,18),MAT.rubber,0,-.85,0));
    f.position.set(c[0]*(X-2.6),-Y-.6,c[1]*(Z-3.4)); g.add(f);
  });
  // rear psu bracket + iec socket
  g.add(M(box(3.4,3.0,.5),MAT.steelIn,-8.2,-18.6,-Z+.5));
  return sh(g);
}

/* ------------------------------------------------------------- outer panels */
function buildGlass(){
  const g=new T.Group();
  const p=M(panel(CASE.D-1.6,CASE.H-1.6,.4,.6),MAT.glass);
  p.rotation.y=Math.PI/2; g.add(p);
  // smoked edge print
  const edge=new T.Mesh(panel(CASE.D-1.6,CASE.H-1.6,.42,.6,s=>holeRect(s,0,0,CASE.D-4.4,CASE.H-4.4,.4)),
    new T.MeshStandardMaterial({color:0x05070a,roughness:.35,metalness:.2,envMap:MAT.glass.envMap}));
  edge.rotation.y=Math.PI/2; g.add(edge);
  const sc=[[-.1, 20.5, 20.6],[-.1,20.5,-20.6],[-.1,-20.5,20.6],[-.1,-20.5,-20.6]];
  g.add(instanced(4,cyl(.34,.4,.5,12),MAT.nickel,(m,i)=>tf(m,sc[i][0],sc[i][1],sc[i][2],0,0,Math.PI/2)));
  g.position.x=CASE.x-.3; return sh(g,false,false);
}
function buildFront(){
  const g=new T.Group();
  const shell=M(panel(CASE.W-.4,CASE.H-.4,1.5,1.2,s=>holeRect(s,0,-1.6,CASE.W-6,CASE.H-9,.8)),MAT.plasticSat);
  g.add(shell);
  const m=M(panel(CASE.W-5.2,CASE.H-8.2,.22,.7),MAT.mesh,0,-1.6,-.2); g.add(m);
  const back=M(panel(CASE.W-5.4,CASE.H-8.4,.12,.7),MAT.steelIn,0,-1.6,-.62);
  back.material=new T.MeshStandardMaterial({color:0x090b0e,roughness:.9,metalness:.3,
    alphaMap:TEXBANK.hex,transparent:true,side:T.DoubleSide,envMap:MAT.steel.envMap}); g.add(back);
  // io strip: power button + usb + a light bar
  const strip=M(box(CASE.W-6,1.9,.4),MAT.plastic,0,CASE.H/2-2.3,.66); g.add(strip);
  g.add(M(cyl(.42,.42,.3,16),MAT.nickel,-5.4,CASE.H/2-2.3,.9).rotateX(Math.PI/2));
  const pw=M(cyl(.24,.24,.34,16),ledMat(0x8fe7ff),-5.4,CASE.H/2-2.3,.98); pw.rotation.x=Math.PI/2; g.add(pw);
  for(let i=0;i<3;i++) g.add(M(box(1.1,.55,.3),MAT.chipDark,-2.6+i*1.7,CASE.H/2-2.3,.86));
  g.add(M(box(1.6,.24,.3),MAT.chipDark,3.4,CASE.H/2-2.3,.86));
  const bar=M(box(.5,CASE.H-11,.12),ledMat(0x4cc8ff),-CASE.W/2+1.3,-1.6,.76); g.add(bar);
  g.position.z=CASE.z+.6; return sh(g);
}
function buildTop(){
  const g=new T.Group();
  const f=M(panel(CASE.W-.4,CASE.D-1.2,.5,1.0,s=>holeRect(s,0,1,CASE.W-4.6,CASE.D-11,.9)),MAT.steel);
  f.rotation.x=-Math.PI/2; g.add(f);
  const m=M(panel(CASE.W-4.2,CASE.D-10.4,.2,.8),MAT.mesh,0,-.28,-1);
  m.rotation.x=-Math.PI/2; g.add(m);
  g.position.y=CASE.y+.25; return sh(g);
}
function buildFilter(){
  const g=new T.Group();
  const f=M(panel(CASE.W-2,CASE.D-6,.28,.8,s=>holeRect(s,0,0,CASE.W-5,CASE.D-10,.6)),MAT.plasticSat);
  f.rotation.x=-Math.PI/2; g.add(f);
  const mm=new T.MeshStandardMaterial({color:0x0c0e12,roughness:.95,metalness:0,alphaMap:TEXBANK.hex,
      transparent:true,side:T.DoubleSide,envMap:MAT.steel.envMap});
  const m=M(panel(CASE.W-4.8,CASE.D-9.8,.1,.5),mm,0,0,0);
  m.rotation.x=-Math.PI/2; g.add(m);
  g.position.y=-CASE.y-.62; return sh(g,false,false);
}

/* ------------------------------------------------------- pcb material helper */
function pcbMat(cm,tint){
  const t=TEXBANK.pcb.clone(); t.needsUpdate=true; t.repeat.set(1/cm,1/cm);
  const r=TEXBANK.pcbRough.clone(); r.needsUpdate=true; r.repeat.set(4/cm,4/cm);
  return new T.MeshStandardMaterial({color:tint||0xffffff,map:t,roughnessMap:r,roughness:.62,
    metalness:.18,envMap:MAT.pcb.envMap,envMapIntensity:.8});
}
function stickerMat(c){
  const t=new T.CanvasTexture(c); t.colorSpace=T.SRGBColorSpace; t.anisotropy=8;
  return new T.MeshStandardMaterial({map:t,roughness:.78,metalness:.02,envMap:MAT.pcb.envMap});
}

/* -------------------------------------------------------------- motherboard */
function buildMobo(){
  const g=new T.Group();
  /* local: x = out from tray, y = up, z = front. board back face at x=0 */
  const pcb=M(panel(24.4,30.5,.25,.5,s=>{
    holeRect(s,-9.6,-2.4,.0001,.0001,0);
  }),pcbMat(15));
  pcb.rotation.y=Math.PI/2; pcb.position.x=.125; g.add(pcb);
  // rear I/O port cluster
  const io=new T.Group(); io.position.set(2.4,7.3,-11.4); g.add(io);
  io.add(M(box(4.4,15.9,1.5),MAT.chipDark,0,0,0));
  const port=(w,h,y,z,mat)=>io.add(M(box(w,h,.7),mat,.2,y,z-.5));
  const rows=[[3.2,1.0,6.6],[3.2,1.0,5.2],[2.6,.9,3.8],[2.6,.9,2.6],[3.0,1.3,.9],[3.0,1.3,-.7],
              [1.4,.7,-2.2],[2.8,1.4,-3.8],[2.6,2.0,-6.0]];
  rows.forEach(r=>port(r[0],r[1],r[2],.0,MAT.chip));
  for(let i=0;i<9;i++) io.add(M(box(3.6,.9,.9),MAT.chip,.1,6.6-i*1.6,.35));
  for(let i=0;i<5;i++) io.add(M(cyl(.34,.34,.5,12),MAT.gold,.1,-6.6-i*.9,.5).rotateX(Math.PI/2));
  // i/o shroud (plastic cover over vrm)
  const shroud=M(panel(9.5,13.6,2.6,.5,s=>holeRect(s,-1.4,3.2,4.6,5.2,.4)),MAT.plasticSat);
  shroud.rotation.y=Math.PI/2; shroud.position.set(1.55,8.3,-7.4); g.add(shroud);
  const shTop=M(box(.4,6.0,5.0),ledMat(0x54d3ff),3.0,10.9,-8.8); g.add(shTop);
  // vrm heatsinks: finned aluminium
  g.add(M(box(1.7,4.6,9.2),MAT.aluDark,1.1,13.0,-6.4));
  g.add(sh(instanced(22,box(1.6,4.4,.10),MAT.aluFin,(m,i)=>tf(m,1.15,13.0,-10.6+i*.4))));
  g.add(M(box(1.7,9.6,2.4),MAT.aluDark,1.1,7.9,-10.6));
  g.add(sh(instanced(16,box(1.6,.10,2.3),MAT.aluFin,(m,i)=>tf(m,1.15,3.6+i*.55,-10.6))));
  // cpu socket
  const sk=new T.Group(); sk.position.set(.25,9.25,-2.9); g.add(sk);
  sk.add(M(panel(5.4,5.4,.35,.2,s=>holeRect(s,0,0,4.05,4.05,.1)),MAT.chipDark,.18,0,0).rotateY(Math.PI/2));
  sk.add(M(box(.12,4.0,4.0),MAT.gold,.32,0,0));
  sk.add(M(box(.5,.35,6.4),MAT.nickel,.5,3.1,0));
  sk.add(M(box(.5,.35,6.4),MAT.nickel,.5,-3.1,0));
  // retention frame arm
  sk.add(M(box(.3,6.6,.4),MAT.nickel,.62,0,3.0));
  // dimm slots
  for(let i=0;i<4;i++){
    const z=7.0+i;
    g.add(M(box(.62,13.3,.62),i<2?MAT.chipDark:MAT.chip,.56,8.15,z));
    g.add(M(box(.66,.5,.7),MAT.plastic,.58,15.0,z));
    g.add(M(box(.66,.5,.7),MAT.plastic,.58,1.3,z));
  }
  // pcie slots
  const pcieSlot=(y,len,dark)=>{
    g.add(M(box(.66,.9,len),dark?MAT.chipDark:MAT.chip,.58,y,-4.9));
    g.add(M(box(.72,1.5,.8),MAT.aluDark,.6,y+.1,-4.9-len/2-.4));
    g.add(M(box(.7,1.05,len+.5),new T.MeshStandardMaterial({color:0x8b929c,roughness:.35,metalness:1,envMap:MAT.pcb.envMap}),.53,y,-4.9));
  };
  pcieSlot(-3.25,8.9,true); pcieSlot(-8.6,8.9,true); pcieSlot(-1.1,2.2,false);
  // chipset heatsink
  g.add(M(rbox(5.2,5.2,1.3,.5,.14),MAT.aluDark,1.0,-9.0,2.2).rotateY(Math.PI/2));
  g.add(sh(instanced(14,box(1.1,4.6,.14),MAT.aluFin,(m,i)=>tf(m,1.25,-9.0,-.2+i*.36))));
  // m.2 socket (the drive itself lifts out separately)
  g.add(M(box(.3,1.9,8.4),MAT.chipDark,.4,-9.75,-5.4));
  g.add(M(box(.5,1.2,.6),MAT.chip,.5,-9.75,-9.4));
  // connectors along the edges
  g.add(M(box(1.3,5.4,1.0),MAT.plastic,.75,6.8,11.5));        // 24-pin
  g.add(M(box(1.2,1.9,3.9),MAT.plastic,.7,14.4,-6.2));        // eps 12v
  for(let i=0;i<4;i++) g.add(M(box(.8,1.5,.9),MAT.chipDark,.55,-6.2+i*0,11.4-i*1.1)); // sata
  for(let i=0;i<5;i++) g.add(M(box(.7,.8,1.6),MAT.chip,.5,-14.2,-8+i*3.4));           // headers
  g.add(M(box(.9,1.6,2.4),MAT.chip,.6,-1.2,11.4));            // usb3 header
  // battery
  g.add(M(cyl(1.0,1.0,.28,20),MAT.nickel,.4,-6.0,6.2).rotateZ(Math.PI/2));
  // capacitors + chokes + small ics
  const caps=[];
  for(let i=0;i<26;i++) caps.push([.25+.5,4.0+Math.random()*11,-11.5+Math.random()*4.5]);
  g.add(sh(instanced(caps.length,cyl(.30,.30,.95,10),MAT.cap,(m,i)=>tf(m,caps[i][0],caps[i][1],caps[i][2],0,0,Math.PI/2))));
  const chk=[];
  for(let i=0;i<18;i++) chk.push([.62,3.6+Math.random()*11.5,-11.9+Math.random()*4.2]);
  g.add(sh(instanced(chk.length,box(.75,.95,.95),MAT.chipDark,(m,i)=>tf(m,chk[i][0],chk[i][1],chk[i][2]))));
  const ics=[];
  for(let i=0;i<24;i++) ics.push([.4,-14+Math.random()*22,-9+Math.random()*20]);
  g.add(sh(instanced(ics.length,box(.28,.9+Math.random(),1.5),MAT.chip,(m,i)=>tf(m,ics[i][0],ics[i][1],ics[i][2]))));
  g.position.set(CASE.board,5.25,-9.6);
  return sh(g);
}

/* ---------------------------------------------------------------- processor */
function buildCPU(){
  const g=new T.Group();
  const sub=M(box(.28,4.0,4.0),new T.MeshStandardMaterial({color:0x14532d,roughness:.5,metalness:.2,envMap:MAT.pcb.envMap}),0,0,0);
  g.add(sub);
  // land grid on the underside
  g.add(M(box(.06,3.7,3.7),MAT.gold,-.17,0,0));
  // integrated heat spreader
  const ihs=M(rbox(3.72,3.72,.34,.28,.06),MAT.ihs,.31,0,0); ihs.rotation.y=Math.PI/2; g.add(ihs);
  const c=labelCanvas(512,512,[
    {t:'PROCESSOR',x:256,y:196,s:44,w:'600',a:'center',f:'sans-serif',c:'#cbd4de'},
    {t:'16 CORES  ·  32 THREADS',x:256,y:244,s:22,w:'400',a:'center',c:'#8b96a3',ls:3},
    {t:'DIFFUSED IN TAIWAN  ·  5 nm',x:256,y:318,s:19,w:'400',a:'center',c:'#6d7883'},
    {t:'13 140 000 000 TRANSISTORS',x:256,y:348,s:17,w:'400',a:'center',c:'#5d6873'},
    {t:'LGA 1718',x:256,y:392,s:15,w:'400',a:'center',c:'#59636e',ls:2},
  ],'#a9b3bd');
  const lt=new T.CanvasTexture(c); lt.colorSpace=T.SRGBColorSpace;
  const lab=M(new T.PlaneGeometry(3.5,3.5),
    new T.MeshStandardMaterial({map:lt,transparent:true,opacity:.55,roughness:.15,metalness:1,envMap:MAT.pcb.envMap}),
    .49,0,0);
  lab.rotation.y=Math.PI/2; lab.material.polygonOffset=true; lab.material.polygonOffsetFactor=-2; g.add(lab);
  // little corner notch + surface-mount caps underneath
  g.add(sh(instanced(12,box(.12,.22,.34),MAT.chipDark,(m,i)=>tf(m,-.16,-1.6+(i%4)*1.05,-1.5+((i/4)|0)*1.5))));
  g.position.set(CASE.board+.4,14.5,-12.5);
  return sh(g);
}

/* -------------------------------------------------------------- air cooler */
function buildCooler(){
  const g=new T.Group();          // origin at the cpu contact plane
  g.add(M(rbox(4.6,4.6,.5,.2,.06),MAT.nickel,.25,0,0).rotateY(Math.PI/2));
  g.add(M(box(.8,6.8,1.2),MAT.aluDark,.7,0,0));
  g.add(M(box(.5,8.6,.5),MAT.nickel,.55,0,2.6));
  g.add(M(box(.5,8.6,.5),MAT.nickel,.55,0,-2.6));
  // six heatpipes
  const pipeGeo=cyl(.31,.31,14.6,12);
  const pipes=[];
  for(let i=0;i<6;i++) pipes.push([-2.05+i*.82, (i%2?.55:-.55)]);
  g.add(sh(instanced(6,pipeGeo,MAT.copper,(m,i)=>tf(m,7.5,pipes[i][1],pipes[i][0],0,0,Math.PI/2))));
  // fin stack
  const FIN=46;
  g.add(sh(instanced(FIN,box(.045,12.4,12.6),MAT.aluFin,(m,i)=>tf(m,2.6+i*.268,0,0))));
  g.add(M(box(.12,12.4,12.6),MAT.aluDark,2.5,0,0));
  const cap=M(rbox(12.6,12.4,.4,.4,.1),MAT.aluDark,15.05,0,0); cap.rotation.y=Math.PI/2; g.add(cap);
  const badge=M(new T.PlaneGeometry(6.4,6.4),
    new T.MeshStandardMaterial({color:0x0c0e11,roughness:.4,metalness:.6,envMap:MAT.pcb.envMap}),15.28,0,0);
  badge.rotation.y=Math.PI/2; g.add(badge);
  g.add(M(new T.TorusGeometry(2.4,.1,6,32),ledMat(0x6fd8ff),15.34,0,0).rotateY(Math.PI/2));
  // wire clips
  g.add(M(box(12.0,.14,.14),MAT.nickel,8.6,5.9,6.2));
  g.add(M(box(12.0,.14,.14),MAT.nickel,8.6,-5.9,6.2));
  g.position.set(CASE.board+.55,14.5,-12.5);
  return sh(g);
}

/* --------------------------------------------------------------- memory dimm */
function buildRAM(i){
  const g=new T.Group();
  g.add(M(box(3.4,13.3,.16),pcbMat(9,0x0a0d0f),1.7,0,0));
  // chips both sides
  const chips=[];
  for(let s=0;s<2;s++) for(let n=0;n<4;n++) chips.push([1.35,-4.6+n*3.0,(s?.17:-.17)]);
  g.add(sh(instanced(chips.length,box(1.6,2.3,.14),MAT.chip,(m,k)=>tf(m,chips[k][0],chips[k][1],chips[k][2]))));
  // gold fingers
  g.add(M(box(.5,13.0,.19),MAT.gold,.14,0,0));
  g.add(M(rbox(3.5,13.2,.62,.22,.07),MAT.ramAl,2.05,0,0));
  // machined ribs + an inset label plate
  g.add(sh(instanced(11,box(.34,.42,.70),MAT.ramAl,(m,k)=>tf(m,3.12,-5.6+k*1.12,0))));
  g.add(sh(instanced(2,box(3.2,.16,.66),MAT.plasticSat,(m,k)=>tf(m,2.0,-6.3+k*12.6,0))));
  g.add(M(box(2.2,4.6,.02),MAT.plasticSat,1.7,-2.4,.33));
  const lc=labelCanvas(620,300,[
    {t:'8 GB',x:40,y:118,s:62,w:'600',f:'sans-serif',c:'#dbe3ec'},
    {t:'DDR5-6000',x:42,y:166,s:27,w:'400',c:'#93a0ae',ls:3},
    {t:'CL30  ·  1.35 V',x:42,y:214,s:22,w:'400',c:'#6f7b88',ls:2},
    {t:'ON-DIE ECC',x:400,y:214,s:18,w:'400',c:'#5c6773',ls:2},
  ],'#0b0e12');
  const lp=M(new T.PlaneGeometry(4.6,2.2),stickerMat(lc),1.7,-2.4,.345);
  lp.rotation.z=Math.PI/2; g.add(lp);
  // rgb diffuser along the top edge
  const diff=M(box(.55,13.0,.5),ledMat([0x59d2ff,0x8b7bff,0x4be0c0,0xff7bd0][i%4]),3.86,0,0);
  g.add(diff); g.userData.diffuser=diff;
  g.add(M(box(.62,13.1,.62),new T.MeshBasicMaterial({color:0x9fe4ff,transparent:true,opacity:.26,
    blending:T.AdditiveBlending,depthWrite:false}),3.86,0,0));
  g.position.set(CASE.board+.25,13.4,-2.6+i*1.0);
  return sh(g);
}

/* ------------------------------------------------------------ graphics card */
function buildGPU(){
  const g=new T.Group();   /* origin at the pcie slot: +x out of the board, +z front */
  const pcbM=pcbMat(11,0x0b0e11);
  g.add(M(box(11.0,.2,22.1),pcbM,5.5,0,4.95));
  g.add(M(box(.95,.22,8.9),MAT.gold,.48,-.02,0));
  for(let i=0;i<2;i++) g.add(M(box(.05,.24,8.9),MAT.chipDark,.86-i*.38,-.02,0));
  // backplate
  const bp=M(panel(11.4,27.4,.18,.5,s=>{holeRect(s,3.2,-6.0,4.4,7.0,.5);}),MAT.aluDark,5.7,.34,7.4);
  bp.rotation.x=-Math.PI/2; g.add(bp);
  // fin stack under the pcb
  g.add(sh(instanced(74,box(10.4,3.4,.05),MAT.aluFin,(m,i)=>tf(m,5.6,-2.4,-4.6+i*.30))));
  g.add(sh(instanced(16,box(10.4,2.6,.05),MAT.aluFin,(m,i)=>tf(m,5.6,-2.0,17.3+i*.30))));
  // vapour chamber + heatpipes
  g.add(M(box(9.4,.5,12.0),MAT.copper,5.4,-.55,2.6));
  g.add(sh(instanced(5,cyl(.28,.28,24,10),MAT.copper,(m,i)=>tf(m,2.3+i*2.1,-.95,7.2,Math.PI/2,0,0))));
  // shroud
  const shroudGeo=panel(11.6,29.2,6.0,.9,s=>{
    holeCircle(s,0,-9.6,4.75); holeCircle(s,0,0,4.75); holeCircle(s,0,9.6,4.75);
  });
  const sm=M(shroudGeo,MAT.plasticSat,5.75,-3.05,8.4); sm.rotation.x=-Math.PI/2; g.add(sm);
  // the shroud above only rims the fans; add side skirts
  g.add(M(box(.35,6.0,29.2),MAT.plasticSat,11.55,-3.05,8.4));
  g.add(M(box(.35,6.0,29.2),MAT.plasticSat,-.05,-3.05,8.4));
  g.add(M(box(11.6,6.0,.35),MAT.plasticSat,5.75,-3.05,22.85));
  // three fans, blowing down through the fins
  const fans=[];
  [-1.2,8.4,18.0].forEach((z,i)=>{
    const f=buildFan(9.2,9,0x66d9ff,1.5);
    f.rotation.x=Math.PI/2; f.position.set(5.75,-5.35,z); g.add(f); fans.push(f);
  });
  g.userData.fans=fans;
  // rear i/o bracket
  const brk=M(panel(12.0,4.2,.2,.3,s=>{
    for(let i=0;i<3;i++) holeRect(s,-3.6+i*2.4,-.7,1.7,.85,.1);
    holeRect(s,3.6,-.7,2.0,.9,.1);
    for(let i=0;i<9;i++) for(let j=0;j<3;j++) holeCircle(s,-5.2+i*1.2,1.2-j*.7,.22);
  }),MAT.steel,5.9,-1.6,-6.5); g.add(brk);
  for(let i=0;i<3;i++) g.add(M(box(1.6,.75,1.4),MAT.chipDark,2.3+i*2.4,-2.3,-5.9));
  g.add(M(box(1.9,.8,1.4),MAT.chipDark,9.5,-2.3,-5.9));
  // 12v-2x6 power connector
  g.add(M(box(3.6,1.15,1.5),MAT.chipDark,4.6,.72,7.2));
  g.add(M(box(3.2,.5,1.1),MAT.plastic,4.6,1.05,7.2));
  // lit side logo
  const logo=M(box(.14,1.0,7.0),ledMat(0x7ee0ff),11.76,-2.6,6.0); g.add(logo);
  g.add(M(box(.5,1.6,7.4),new T.MeshBasicMaterial({color:0x8fe6ff,transparent:true,opacity:.22,
    blending:T.AdditiveBlending,depthWrite:false}),11.9,-2.6,6.0));
  // support bracket foot
  g.add(M(box(1.4,1.2,1.4),MAT.aluDark,9.6,-6.4,17.0));
  g.position.set(CASE.board+.25,2.2,-14.5);
  return sh(g);
}

/* -------------------------------------------------------------- power supply */
function buildPSU(){
  const g=new T.Group();
  g.add(M(rbox(15,8.6,16,.4,.12),MAT.steel));
  // intake fan on the top face
  const f=buildFan(12,9,0x2a2f36,2.0); f.rotation.x=-Math.PI/2; f.position.set(-.5,2.5,0);
  f.traverse(n=>{if(n.material===MAT.fanBlade)n.material=MAT.plastic;});
  g.add(f); g.userData.fan=f;
  const gr=M(new T.PlaneGeometry(12.4,12.4),MAT.grille,-.5,4.36,0); gr.rotation.x=-Math.PI/2; g.add(gr);
  // rear: iec + switch + honeycomb
  g.add(M(box(3.2,2.6,.6),MAT.chipDark,-4.6,-1.4,-8.1));
  g.add(M(box(2.0,1.2,.5),MAT.plasticSat,-1.0,-1.6,-8.1));
  const hc=M(new T.PlaneGeometry(13.6,7.2),
    new T.MeshStandardMaterial({color:0x0a0c0f,roughness:.8,metalness:.5,alphaMap:TEXBANK.hex,
      transparent:true,side:T.DoubleSide,envMap:MAT.steel.envMap}),0,.6,-8.14);
  hc.rotation.y=Math.PI; g.add(hc);
  // front: modular sockets
  g.add(M(box(14.2,7.6,.35),MAT.plasticSat,0,-.2,8.05));
  const sock=[[-5.4,2.0,5.6,1.5],[1.4,2.0,4.2,1.5],[-5.0,-.4,4.4,1.4],[.6,-.4,4.4,1.4],
              [-5.0,-2.8,4.4,1.4],[.6,-2.8,4.4,1.4],[5.2,-1.6,2.4,3.6]];
  sock.forEach(s=>g.add(M(box(s[2],s[3],.5),MAT.chipDark,s[0],s[1],8.28)));
  // label
  const c=labelCanvas(700,420,[
    {t:'750 W',x:40,y:110,s:76,w:'700',f:'sans-serif',c:'#e8edf4'},
    {t:'80 PLUS GOLD',x:44,y:158,s:22,w:'500',c:'#cfa855',ls:4},
    {t:'DC OUTPUT',x:44,y:224,s:18,w:'600',c:'#8b96a3',ls:3},
    {t:'+12V   62.5A     +5V  20A     +3.3V  20A',x:44,y:258,s:19,w:'400',c:'#aeb8c4'},
    {t:'-12V   0.3A      +5Vsb  3.0A',x:44,y:288,s:19,w:'400',c:'#aeb8c4'},
    {t:'AC INPUT  100-240V ~ 10A  50/60Hz',x:44,y:342,s:17,w:'400',c:'#7e8794'},
    {t:'MADE UNDER ATX12V 3.1',x:44,y:376,s:14,w:'400',c:'#5f6873',ls:2},
  ],'#101318');
  const lab=M(new T.PlaneGeometry(11.6,7.0),stickerMat(c),7.53,-.2,0);
  lab.rotation.y=Math.PI/2; g.add(lab);
  g.position.set(1.5,-18.6,-14.0);
  return sh(g);
}

/* ------------------------------------------------------------------ shroud */
function buildShroud(){
  const g=new T.Group();
  const top=M(panel(17.7,30.8,.3,.5,s=>{holeRect(s,0,-10.2,9.0,6.4,.6);}),MAT.steelIn,0,0,0);
  top.rotation.x=-Math.PI/2; g.add(top);
  g.add(M(new T.PlaneGeometry(9.0,6.4),MAT.grille,0,-.06,10.2).rotateX(-Math.PI/2));
  const face=M(panel(17.7,10.7,.3,.4,s=>{holeRect(s,-3,-1.0,8.0,4.6,.4);}),MAT.steelIn,0,0,0);
  face.rotation.y=Math.PI; face.position.set(0,-5.4,15.4); face.rotation.set(0,0,0); g.add(face);
  g.add(M(new T.PlaneGeometry(8.0,4.6),MAT.grille,-3,-5.4,15.55));
  const bar=M(box(15.4,.34,.3),ledMat(0x4fc9ff),0,-.35,15.3); g.add(bar);
  g.position.set(1.55,-12.65,-7.4);
  return sh(g);
}

/* ----------------------------------------------------------------- storage */
function buildStorage(){
  const g=new T.Group();
  // 2.5" ssd on the shroud
  const s=new T.Group();
  s.add(M(rbox(7.0,10.0,.7,.3,.08),MAT.aluDark).rotateX(-Math.PI/2));
  const c=labelCanvas(520,380,[
    {t:'SSD',x:36,y:96,s:62,w:'700',f:'sans-serif',c:'#e8edf4'},
    {t:'2.5"  SATA III  6 Gb/s',x:38,y:140,s:20,w:'400',c:'#8b96a3',ls:2},
    {t:'2 TB',x:38,y:236,s:44,w:'300',f:'sans-serif',c:'#8fd8f2'},
    {t:'3D TLC NAND · 232 LAYER',x:38,y:276,s:15,w:'400',c:'#6d7883',ls:2},
    {t:'S/N  0x7F3A91C4',x:38,y:330,s:14,w:'400',c:'#59636e',ls:1},
  ],'#0d1015');
  s.add(M(new T.PlaneGeometry(6.6,9.6),stickerMat(c),0,.37,0).rotateX(-Math.PI/2));
  s.position.set(3.0,-11.9,1.0); g.add(s);
  // m.2 module with its heatsink
  const m=new T.Group();
  m.add(M(box(.16,2.2,8.0),pcbMat(6,0x0b0e11),.1,0,0));
  m.add(sh(instanced(4,box(.14,1.7,1.5),MAT.chip,(k,i)=>tf(k,.26,0,-2.4+i*1.6))));
  m.add(M(box(.1,1.4,.5),MAT.gold,.02,0,3.9));
  const hs=M(rbox(8.6,2.4,.85,.28,.1),MAT.aluDark,.72,0,0); hs.rotation.y=Math.PI/2; m.add(hs);
  m.add(sh(instanced(11,box(.7,2.2,.1),MAT.aluFin,(k,i)=>tf(k,.82,0,-3.8+i*.76))));
  m.position.set(CASE.board+.3,-4.5,-15.0); g.add(m);
  return sh(g);
}

/* ------------------------------------------------------------------- cables */
function cableRun(pts,r,mat,n){
  const c=new T.CatmullRomCurve3(pts.map(p=>new T.Vector3(p[0],p[1],p[2])));
  const g=new T.TubeGeometry(c,n||42,r,9,false);
  return new T.Mesh(g,mat);
}
function buildCables(){
  const g=new T.Group();
  // 24-pin atx: up through the front grommet
  const a=[[-8.6,-8.0,10.6],[-7.4,-4.0,11.6],[-6.2,2.0,12.2],[-5.6,8.0,10.0],[-5.2,11.6,5.6],[-5.3,11.9,2.9]];
  for(let i=0;i<3;i++){
    const off=(i-1)*.42;
    g.add(cableRun(a.map(p=>[p[0]+off*.3,p[1],p[2]+off]),.36,i===1?MAT.wire:MAT.wire2));
  }
  g.add(M(box(1.4,5.6,1.2),MAT.plastic,-5.5,11.9,2.6));
  // eps 12v: over the top, behind the tray
  const b=[[-8.4,10.0,-19.0],[-8.0,18.0,-19.4],[-7.2,21.4,-18.0],[-6.4,20.6,-16.4],[-5.8,19.4,-15.8]];
  for(let i=0;i<2;i++) g.add(cableRun(b.map(p=>[p[0],p[1],p[2]+(i-.5)*.8]),.34,MAT.wire));
  g.add(M(box(1.2,2.0,4.0),MAT.plastic,-5.7,19.3,-15.6));
  // pcie 12v-2x6 to the card
  const d=[[-8.2,-9.0,9.0],[-6.0,-6.0,11.0],[-2.0,-2.0,10.4],[1.0,1.4,7.0],[-1.4,3.0,-6.6],[-1.6,3.2,-7.4]];
  for(let i=0;i<2;i++) g.add(cableRun(d.map(p=>[p[0],p[1]+(i-.5)*.6,p[2]]),.40,MAT.wire));
  g.add(M(box(3.6,1.5,1.4),MAT.chipDark,-1.7,3.3,-7.3));
  // sata power over the shroud
  const e=[[-7.8,-12.0,6.0],[-4.0,-11.6,5.0],[-.6,-11.5,3.4],[-.4,-11.6,1.0]];
  g.add(cableRun(e,.26,MAT.wire2));
  return sh(g,true,false);
}

/* ============================================================================
   ASSEMBLY + CHOREOGRAPHY
   ========================================================================== */
const PARTS=[], FANS=[], GLOWS=[], BYNAME={};
/* screen-aligned basis for the final exploded plate, in rig space:
   SR = right of frame, SU = up, SD = away from the camera */
const SR=new T.Vector3(.90,0,-.43), SU=new T.Vector3(0,1,0), SD=new T.Vector3(-.42,-.15,-.89);
const at=(sx,sy,sd)=>new T.Vector3(
  SR.x*sx+SU.x*sy+SD.x*sd, SR.y*sx+SU.y*sy+SD.y*sd, SR.z*sx+SU.z*sy+SD.z*sd);
function reg(name,obj,c){
  const home=obj.position.clone();
  obj.userData.home=home; obj.userData.rot0=obj.rotation.clone();
  const off=new T.Vector3(c.off[0],c.off[1],c.off[2]);
  const rot=new T.Vector3(c.rot?c.rot[0]:0,c.rot?c.rot[1]:0,c.rot?c.rot[2]:0);
  PARTS.push({name,obj,t0:c.t0,t1:c.t1,lead:c.lead,off,rot,
    fin:c.to?at(c.to[0],c.to[1],c.to[2]):home.clone().add(off),
    rotF:c.rotTo?new T.Vector3(c.rotTo[0],c.rotTo[1],c.rotTo[2]):rot,
    label:c.label,sub:c.sub,anchor:c.anchor?new T.Vector3(...c.anchor):new T.Vector3(),
    fade:c.fade===undefined?1:c.fade,mats:isolate(obj)});
  BYNAME[name]=PARTS[PARTS.length-1];
  return obj;
}
/* every part gets its own copy of the materials it uses, so it can be
   ghosted once its chapter is over and brought back for the final plate */
function isolate(root){
  const map=new Map();
  root.traverse(n=>{ if(n.material&&!Array.isArray(n.material)){
    if(!map.has(n.material)){
      const o=n.material, c=o.clone();
      c.userData.o0=c.opacity; c.userData.dw=c.depthWrite;
      if(RGBSET.has(o)){MAT.rgb.push(c);RGBSET.add(c);}
      map.set(o,c);
    }
    n.material=map.get(n.material);} });
  return [...map.values()];
}
function collectFX(root,rpm){
  root.traverse(n=>{
    if(n.material&&n.material.blending===T.AdditiveBlending&&n.material.opacity!==undefined&&!n.userData.fx){
      n.userData.fx=1; GLOWS.push({m:n.material,o:n.material.opacity});}
  });
  const own=PARTS[PARTS.length-1];
  if(root.userData.rotor) FANS.push({r:root.userData.rotor,rpm:rpm||1,v:0,p:own});
  if(root.userData.fan&&root.userData.fan.userData.rotor) FANS.push({r:root.userData.fan.userData.rotor,rpm:rpm||1,v:0,p:own});
  if(root.userData.fans) root.userData.fans.forEach(f=>FANS.push({r:f.userData.rotor,rpm:(rpm||1)*1.5,v:0,p:own}));
}

let rig;
function assemble(scene){
  rig=new T.Group(); scene.add(rig);

  /* every part has two destinations:
     off/rot  — where it drifts while its own chapter plays,
     to/rotTo — where it settles in the final exploded plate.            */

  reg('chassis',buildChassis(),{t0:.862,t1:.962,off:[-20,-4,-20],rot:[0,.10,-.03],
      to:[2,-1,54],rotTo:[0,.34,-.03],fade:.26,anchor:[-6,-14,10]});

  reg('glass',buildGlass(),{t0:.088,t1:.182,off:[34,6,3],rot:[0,-.10,.05],
      to:[6,2,50],rotTo:[0,-.52,.04],
      label:'Side panel',sub:'4 mm tempered glass',lead:[1,104],anchor:[0,-19,19]});

  reg('front',buildFront(),{t0:.176,t1:.258,off:[2,7,28],rot:[.10,0,0],
      to:[-40,1,12],rotTo:[.04,.62,0],anchor:[0,-6,1]});

  reg('top',buildTop(),{t0:.198,t1:.272,off:[0,26,7],rot:[-.08,.06,0],
      to:[-30,25,18],rotTo:[.14,0,1.30]});

  reg('filter',buildFilter(),{t0:.212,t1:.288,off:[-4,-24,16],rot:[.12,0,.05],
      to:[-40,-30,20],rotTo:[-.12,0,-1.28]});

  const fp=[[17.6,.268,.348,[10,22,22]],[5.6,.288,.368,[24,2,26]],[-6.4,.308,.388,[10,-21,24]]];
  fp.forEach((q,i)=>{
    const f=buildFan(12,7,[0x59d2ff,0x7ea8ff,0x4be0c0][i],2.5);
    f.position.set(0,q[0],18.6);
    reg('fanF'+i,f,{t0:q[1],t1:q[2],off:q[3],rot:[.1*(i-1),.28,.12],
        to:[-8+i*15,25,-2],rotTo:[.1*(i-1),.28,.12],
        label:i===0?'Intake fans':null,sub:'120 mm · 60 CFM',lead:[-1,-74],anchor:[0,-5.6,0]});
    collectFX(f,1.0);
  });
  const fr=buildFan(12,7,0x59d2ff,2.5);
  fr.position.set(4.4,14.5,-21.6); fr.rotation.y=Math.PI;
  reg('fanR',fr,{t0:.256,t1:.336,off:[16,13,-26],rot:[0,-.3,-.12],to:[37,25,-2],rotTo:[0,-.3,-.12]});
  collectFX(fr,1.0);

  reg('shroud',buildShroud(),{t0:.348,t1:.428,off:[-9,-21,15],rot:[.1,-.12,0],
      to:[-16,-30,10],rotTo:[.06,0,1.24]});

  const psu=buildPSU();
  reg('psu',psu,{t0:.384,t1:.472,off:[3,-28,-6],rot:[0,.22,.05],to:[4,-30,-4],rotTo:[0,.22,.05],
      label:'Power supply',sub:'750 W · 80 PLUS Gold',lead:[-1,-54],anchor:[0,0,0]});
  collectFX(psu,.55);

  reg('cables',buildCables(),{t0:.368,t1:.458,off:[-20,-11,3],rot:[0,.14,0],fade:0});

  reg('storage',buildStorage(),{t0:.452,t1:.534,off:[30,-14,14],rot:[.14,.3,0],
      to:[30,-26,4],rotTo:[.5,.3,0],
      label:'Storage',sub:'NVMe + SATA',lead:[1,50],anchor:[2,-8,0]});

  const gpu=buildGPU();
  reg('gpu',gpu,{t0:.524,t1:.616,off:[30,-6,4],rot:[.02,.10,.05],
      to:[15,-17,-12],rotTo:[-.20,.34,.72],
      label:'Graphics card',sub:'76.3 billion transistors',lead:[1,66],anchor:[6,-3,6]});
  collectFX(gpu,1.35);

  for(let i=0;i<4;i++){
    const r=buildRAM(i);
    reg('ram'+i,r,{t0:.606+i*.011,t1:.678+i*.011,off:[26+i*1.2,14,12+i*3],rot:[0,.1,.06],
        to:[32+i*5.4,1+(i%2?1.6:-1.6),-8],rotTo:[0,.60,.06],
        label:i===3?'Memory':null,sub:'4 × 8 GB DDR5',lead:[1,-88],anchor:[2,0,0]});
    collectFX(r,0);
  }

  const cooler=buildCooler();
  reg('cooler',cooler,{t0:.690,t1:.778,off:[30,12,4],rot:[0,.14,.04],
      to:[17,9,-8],rotTo:[0,-.20,.04],
      label:'CPU cooler',sub:'6 heatpipes · 46 fins',lead:[-1,132],anchor:[7,0,0]});
  collectFX(cooler,0);

  const cfan=buildFan(12,7,0x4fc9ff,2.4);
  cfan.position.set(2.55,14.5,-4.95);
  reg('coolerFan',cfan,{t0:.672,t1:.744,off:[24,18,-20],rot:[.1,.24,.1],to:[52,25,-2],rotTo:[.1,.24,.1]});
  collectFX(cfan,1.0);

  reg('cpu',buildCPU(),{t0:.762,t1:.842,off:[26,12,14],rot:[0,-1.14,0],
      to:[48,-10,-30],rotTo:[0,-1.12,0],
      label:'Processor',sub:'5 nm · 5.7 GHz',lead:[1,118],anchor:[1,0,0]});

  const mobo=buildMobo();
  reg('mobo',mobo,{t0:.838,t1:.918,off:[15,-6,-12],rot:[0,.06,-.02],
      to:[-14,2,-4],rotTo:[0,-.34,-.02],
      label:'Mainboard',sub:'12-layer ATX',lead:[-1,54],anchor:[1,-4,4]});
  collectFX(mobo,0);

  const l1=new T.PointLight(0x63d4ff,0,72,2); l1.position.set(3,10,2); rig.add(l1);
  const l2=new T.PointLight(0x86b4ff,0,64,2); l2.position.set(2,-6,12); rig.add(l2);
  rig.userData.lights=[l1,l2];

  PARTS.forEach(p=>rig.add(p.obj));
}

/* ---------------------------------------------------------- camera path
   Each keyframe frames a named part: the camera sits at focus + dir·dist,
   so it follows whatever is currently moving instead of a fixed rail.     */
const CAM=[
  [.000,null,     [0,  2,  0],[.62, .22,.76],150,26],
  [.130,'glass',  [0,  0,  0],[.50, .16,.85],120,26],
  [.212,'chassis',[0,  1,  4],[.80, .26,.54],128,27],
  [.300,'fanF1',  [0,  0, -6],[.82, .26,.51],116,27],
  [.398,'psu',    [0,  0,  0],[.74, .34,.58], 68,28],
  [.485,'storage',[1, -9, -3],[.58, .30,.76], 40,27],
  [.565,'gpu',    [6, -2,  6],[.50,-.24,.83], 76,26],
  [.642,'ram1',   [2,  0,  3],[.44, .20,.88], 48,26],
  [.717,'cooler', [7,  0,  0],[.60, .24,.76], 58,26],
  [.797,'cpu',    [.4, 0,  0],[.50, .22,.84], 17,20],
  [.872,'mobo',   [3,  1,  0],[.86, .20,.47], 84,27],
  [1.00,null,     [6, -2,  0],[.62, .16,.76],205,26],
];
let DISTK=1;
const _fa=new T.Vector3(),_fb=new T.Vector3(),_da=new T.Vector3(),_db=new T.Vector3();
function focusOf(k,out){
  out.set(k[2][0],k[2][1],k[2][2]);
  const part=k[1]?BYNAME[k[1]]:null;
  return part?part.obj.localToWorld(out):rig.localToWorld(out);
}
function camAt(t,pos,tgt){
  const n=CAM.length-1; let i=0;
  for(let j=0;j<n;j++) if(t>=CAM[j][0]) i=j;
  const A=CAM[i],B=CAM[Math.min(i+1,n)];
  const f=smooth(inv(t,A[0],B[0]));
  focusOf(A,_fa); focusOf(B,_fb); tgt.copy(_fa).lerp(_fb,f);
  _da.set(A[3][0],A[3][1],A[3][2]); _db.set(B[3][0],B[3][1],B[3][2]);
  _da.lerp(_db,f).normalize();
  pos.copy(tgt).addScaledVector(_da,lerp(A[4],B[4],f)*DISTK);
  return lerp(A[5],B[5],f);
}

/* ============================================================================
   RUNTIME
   ========================================================================== */
const canvas=document.getElementById('gl');
let renderer;
try{
  renderer=new T.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
}catch(e){
  document.body.innerHTML='<div class="nowebgl">This page needs WebGL.<br>Try another browser or enable hardware acceleration.</div>';
  throw e;
}
renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.8));
renderer.setSize(innerWidth,innerHeight,false);
renderer.outputColorSpace=T.SRGBColorSpace;
renderer.toneMapping=T.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.16;
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=T.PCFSoftShadowMap;

const scene=new T.Scene();
scene.fog=new T.FogExp2(0x06070a,0.0042);
const camera=new T.PerspectiveCamera(30,innerWidth/innerHeight,1,600);

const envTex=buildEnv(renderer);
buildTextures();
buildMaterials(envTex);
scene.environment=envTex;

/* lights */
const key=new T.DirectionalLight(0xfffaf2,3.4); key.position.set(72,92,58);
key.castShadow=true; key.shadow.mapSize.set(2048,2048);
key.shadow.camera.near=30; key.shadow.camera.far=280;
key.shadow.camera.left=-58; key.shadow.camera.right=58;
key.shadow.camera.top=62; key.shadow.camera.bottom=-62;
key.shadow.bias=-0.0006; key.shadow.normalBias=.45; key.shadow.radius=1.4;
scene.add(key);
const fill=new T.DirectionalLight(0x8cc0ff,1.05); fill.position.set(-64,24,-46); scene.add(fill);
const rim =new T.DirectionalLight(0xffc98e,1.05); rim.position.set(26,-34,-72); scene.add(rim);
scene.add(new T.HemisphereLight(0x3d4a5e,0x090c11,.55));

assemble(scene);

/* --------------------------------------------------------------- hud build */
const cardsEl=document.getElementById('cards');
const railEl =document.getElementById('rail');
const leadEl =document.getElementById('leaders');
const introEl=document.getElementById('intro');
const barFill=document.getElementById('barfill');
const roPct=document.getElementById('ro-pct'), roStage=document.getElementById('ro-stage'), roParts=document.getElementById('ro-parts');
const counterEl=document.querySelector('#counter b');

CH.forEach((c,i)=>{
  const d=document.createElement('article'); d.className='card';
  d.innerHTML='<div class="cnum">'+String(i).padStart(2,'0')+'</div>'+
    '<div class="ctag"><i></i><span>'+c.tag+'</span></div>'+
    '<h2 class="ctitle">'+c.title+'</h2>'+
    '<p class="cbody">'+c.body+'</p>'+
    '<dl class="specs">'+c.specs.map(s=>'<div><dt>'+s[0]+'</dt><dd>'+s[1]+'</dd></div>').join('')+'</dl>';
  cardsEl.appendChild(d);
  const tk=document.createElement('div'); tk.className='tick';
  tk.innerHTML='<em>'+c.rail+'</em><i></i>'; railEl.appendChild(tk);
});
const cardEls=[...cardsEl.children], tickEls=[...railEl.children];
document.querySelector('#counter').firstChild.textContent='';
counterEl.textContent='00';

/* leader lines for the final exploded view */
const LEAD=PARTS.filter(p=>p.label);
const NS='http://www.w3.org/2000/svg';
LEAD.forEach(p=>{
  const g=document.createElementNS(NS,'g');
  const path=document.createElementNS(NS,'path');
  const dot=document.createElementNS(NS,'circle'); dot.setAttribute('r','2.6');
  const t1=document.createElementNS(NS,'text');  t1.textContent=p.label;
  const t2=document.createElementNS(NS,'text');  t2.textContent=p.sub||''; t2.setAttribute('class','s');
  g.append(path,dot,t1,t2); leadEl.appendChild(g);
  p.svg={g,path,dot,t1,t2};
});

/* ----------------------------------------------------------- scroll driver */
document.getElementById('scroller').style.height=SCROLL_VH+'vh';
let tTarget=0,tCur=0,vel=0,active=-1,pointer=new T.Vector2(),pointerS=new T.Vector2();
let LOCK=false;
function readScroll(){
  const max=document.documentElement.scrollHeight-innerHeight;
  tTarget=max>0?sat(scrollY/max):0;
}
addEventListener('scroll',()=>{if(!LOCK)readScroll();},{passive:true});
addEventListener('pointermove',e=>{
  pointer.set((e.clientX/innerWidth-.5)*2,(e.clientY/innerHeight-.5)*2);
},{passive:true});

/* deep link:  ?t=0.62  */
const qs=new URLSearchParams(location.search);
LOCK=qs.has('lock');
if(qs.has('t')){
  const v=sat(parseFloat(qs.get('t'))||0);
  if(LOCK){ tTarget=v; }
  else addEventListener('load',()=>{
    scrollTo(0,(document.documentElement.scrollHeight-innerHeight)*v);
    readScroll(); tCur=tTarget;
  });
}

/* ------------------------------------------------------------------- resize */
function resize(){
  const w=innerWidth,h=innerHeight;
  renderer.setSize(w,h,false);
  camera.aspect=w/h;
  /* push the subject clear of the text column */
  const ox=w>1080?-w*.105:(w>820?-w*.06:0), oy=w>820?0:h*.13;
  DISTK=clamp(1.52/(w/h),1,2.6);
  camera.setViewOffset(w,h,ox,oy,w,h);
  camera.updateProjectionMatrix();
  leadEl.setAttribute('viewBox','0 0 '+w+' '+h);
  leadEl.setAttribute('width',w); leadEl.setAttribute('height',h);
  if(!LOCK)readScroll();
}
addEventListener('resize',resize); resize();

/* --------------------------------------------------------------- the frame */
const _v=new T.Vector3(), _c=new T.Vector3(), _tg=new T.Vector3();
const camOff=new T.Vector3();
let last=performance.now(), started=false;

function updateHUD(t){
  let idx=0;
  for(let i=0;i<CH.length;i++) if(t>=CH[i].t0) idx=i;
  if(idx!==active){
    active=idx;
    cardEls.forEach((el,i)=>{
      el.classList.toggle('on',i===idx);
      el.classList.toggle('past',i<idx);
    });
    tickEls.forEach((el,i)=>{
      el.classList.toggle('on',i===idx);
      el.classList.toggle('done',i<idx);
    });
    counterEl.textContent=String(idx).padStart(2,'0');
    roStage.textContent=CH[idx].rail.toUpperCase();
  }
  const pct=(t*100).toFixed(1);
  roPct.textContent=(pct.length<5?'0':'')+pct+'%';
  barFill.style.width=(t*100)+'%';
  let out=0; for(const p of PARTS) if(t>=p.t1) out++;
  roParts.textContent=Math.min(out,N_PARTS)+' / '+N_PARTS;
  introEl.classList.toggle('gone',t>0.014);
}

function updateLeaders(t){
  const a=inv(t,.905,.965);
  leadEl.classList.toggle('on',a>0);
  if(a<=0) return;
  const w=innerWidth,h=innerHeight;
  LEAD.forEach((p,i)=>{
    _v.copy(p.anchor); p.obj.localToWorld(_v); _v.project(camera);
    const x=(_v.x*.5+.5)*w, y=(-_v.y*.5+.5)*h;
    const vis=_v.z<1&&x>10&&x<w-10&&y>60&&y<h-60;
    p.svg.g.setAttribute('opacity',vis?(a*.95).toFixed(3):0);
    if(!vis) return;
    const L=430;
    const dir=p.lead?p.lead[0]:((w-x)>(x-L)?1:-1);
    const rise=p.lead?p.lead[1]:(i%2?-1:1)*(24+((i*17)%40));
    const x1=x+dir*34, y1=y+rise;
    let x2=dir>0?clamp(x1+74,L,w-152):clamp(x1-74,152,w-40);
    p.svg.path.setAttribute('d','M'+x.toFixed(1)+' '+y.toFixed(1)+'L'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+x2.toFixed(1)+' '+y1.toFixed(1));
    p.svg.dot.setAttribute('cx',x.toFixed(1)); p.svg.dot.setAttribute('cy',y.toFixed(1));
    const tx=x2+dir*7, an=dir<0?'end':'start';
    p.svg.t1.setAttribute('x',tx.toFixed(1)); p.svg.t1.setAttribute('y',(y1-3).toFixed(1)); p.svg.t1.setAttribute('text-anchor',an);
    p.svg.t2.setAttribute('x',tx.toFixed(1)); p.svg.t2.setAttribute('y',(y1+11).toFixed(1)); p.svg.t2.setAttribute('text-anchor',an);
  });
}

function frame(now){
  requestAnimationFrame(frame);
  const dt=Math.min((now-last)/1000,.05); last=now;
  const k=REDUCED?1:1-Math.pow(.0009,dt);
  const prev=tCur; tCur+=(tTarget-tCur)*k;
  vel=vel*.88+(tCur-prev)*.12/Math.max(dt,.001);
  const t=tCur;

  /* power state: dies as the supply is pulled */
  const power=1-smooth(inv(t,.372,.452));
  for(const m of MAT.rgb){ m.emissiveIntensity=4.6*power; }
  for(const g of GLOWS){ g.m.opacity=g.o*power; }
  rig.userData.lights[0].intensity=980*power;
  rig.userData.lights[1].intensity=620*power;

  /* parts: drift out during their own chapter, then gather into the plate */
  const eF=easeIO(inv(t,.885,.998));
  for(const p of PARTS){
    const e=easeIO(inv(t,p.t0,p.t1))+1.05*smooth(inv(t,p.t1,p.t1+.16));
    _v.copy(p.obj.userData.home).addScaledVector(p.off,e);
    if(eF>0) _v.lerp(p.fin,eF);
    p.obj.position.copy(_v);
    const r0=p.obj.userData.rot0;
    const er=e>1?1:e;
    const rx=lerp(p.rot.x*er,p.rotF.x,eF),ry=lerp(p.rot.y*er,p.rotF.y,eF),rz=lerp(p.rot.z*er,p.rotF.z,eF);
    p.obj.rotation.set(r0.x+rx,r0.y+ry,r0.z+rz);
    /* removed parts recede to a ghost, then return for the final plate */
    let vis=t>p.t1?lerp(1,.11,smooth(inv(t,p.t1,p.t1+.055))):1;
    if(eF>0) vis=lerp(vis,p.fade,eF);
    if(vis!==p.vis){
      p.vis=vis;
      for(const m of p.mats){
        const o=m.userData.o0*vis;
        m.opacity=o; m.transparent=o<.998; m.depthWrite=m.userData.dw&&o>.55;
      }
      p.obj.visible=vis>.015;
    }
  }
  /* fans keep turning until they are unplugged or unbolted */
  for(const f of FANS){
    const det=f.p?easeIO(inv(t,f.p.t0,f.p.t1)):0;
    const want=power*(1-det)*f.rpm;
    f.v+=(want-f.v)*Math.min(dt*2.2,1);
    f.r.rotation.z-=f.v*dt*22;
  }

  /* the whole assembly turns slowly, always */
  rig.rotation.y=-0.34+t*0.62;
  rig.rotation.x=Math.sin(t*3.1)*0.012;

  /* camera */
  const fv=camAt(t,_c,_tg);
  pointerS.lerp(pointer,REDUCED?1:.06);
  camOff.set(pointerS.x*2.6,-pointerS.y*1.9,0);
  camera.position.copy(_c).add(camOff);
  camera.up.set(0,1,0);
  camera.lookAt(_tg);
  camera.rotation.z+=clamp(vel*.55,-.05,.05);
  if(Math.abs(camera.fov-fv)>1e-4){camera.fov=fv;camera.updateProjectionMatrix();}

  /* the key light tracks the subject so the shadow box stays tight */
  key.position.set(72,92,58); key.target.position.copy(_tg); key.target.updateMatrixWorld();

  updateHUD(t);
  updateLeaders(t);
  renderer.render(scene,camera);

  if(!started){
    started=true;
    const L=document.getElementById('loader');
    L.querySelector('.lb i').style.width='100%';
    setTimeout(()=>{L.classList.add('gone');setTimeout(()=>L.remove(),700);},260);
  }
}
scene.add(key.target);
if(!LOCK)readScroll();
tCur=tTarget;
requestAnimationFrame(frame);
