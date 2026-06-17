/* WC2026 AI LAB — 캐릭터 얼굴 시스템 (KOR animeFace 포팅, 식별용) */
window.FACES = (function(){
  const _fc={};
  function faceCanvas(cfg){
    const k=JSON.stringify(cfg); if(_fc[k])return _fc[k];
    const c=document.createElement('canvas'); c.width=c.height=256; const x=c.getContext('2d'); const ey=118;
    function eye(cx,fl){x.save();x.translate(cx,ey);if(fl)x.scale(-1,1);
      if(cfg.eyes==='smile'){x.strokeStyle='#23150f';x.lineWidth=7;x.lineCap='round';x.beginPath();x.arc(0,7,17,Math.PI*1.15,Math.PI*1.85);x.stroke();}
      else{x.fillStyle='#fff';x.beginPath();x.ellipse(0,0,17,cfg.eyes==='sharp'?14:19,0,0,7);x.fill();x.strokeStyle='#23150f';x.lineWidth=4;x.stroke();
        const g=x.createRadialGradient(0,2,2,0,3,13);g.addColorStop(0,'#000');g.addColorStop(.45,cfg.iris||'#3a2417');g.addColorStop(1,'#120a05');
        x.fillStyle=g;x.beginPath();x.ellipse(1,3,10,cfg.eyes==='sharp'?10:13,0,0,7);x.fill();
        x.fillStyle='#fff';x.beginPath();x.ellipse(-3,-2,3.5,4.5,0,0,7);x.fill();
        x.strokeStyle='#23150f';x.lineWidth=6;x.lineCap='round';x.beginPath();
        if(cfg.eyes==='sharp'){x.moveTo(-18,-8);x.quadraticCurveTo(0,-17,19,-4);}else{x.moveTo(-17,-11);x.quadraticCurveTo(0,-19,17,-11);}x.stroke();}
      x.restore();}
    eye(84,false);eye(172,true);
    x.strokeStyle='#1c1108';x.lineWidth=7;x.lineCap='round';
    [[84],[172]].forEach(([cx])=>{x.beginPath();x.moveTo(cx-19,84);x.quadraticCurveTo(cx,75-(cfg.brow||0)*7,cx+19,84+(cfg.brow||0)*5);x.stroke();});
    x.strokeStyle='#c98e63';x.lineWidth=3.5;x.beginPath();x.moveTo(128,150);x.lineTo(124,161);x.stroke();
    x.strokeStyle='#8a3f2c';x.lineWidth=5;x.lineCap='round';x.beginPath();
    if(cfg.mouth==='grin'){x.moveTo(107,188);x.quadraticCurveTo(128,204,149,188);x.stroke();x.fillStyle='#fff';x.beginPath();x.moveTo(110,190);x.quadraticCurveTo(128,201,146,190);x.quadraticCurveTo(128,196,110,190);x.fill();}
    else if(cfg.mouth==='flat'){x.moveTo(116,191);x.lineTo(140,191);x.stroke();}else{x.moveTo(111,189);x.quadraticCurveTo(128,199,145,189);x.stroke();}
    if(cfg.beard==='stubble'){x.fillStyle='#2a201855';x.beginPath();x.ellipse(128,176,26,8,0,0,7);x.fill();x.beginPath();x.ellipse(128,218,40,22,0,0,7);x.fill();x.fillStyle='#2a201833';x.beginPath();x.ellipse(62,185,14,26,.3,0,7);x.fill();x.beginPath();x.ellipse(194,185,14,26,-.3,0,7);x.fill();}
    if(cfg.beard==='mustache'){x.fillStyle='#2a201844';x.beginPath();x.ellipse(128,176,22,6,0,0,7);x.fill();}
    _fc[k]=c; return c;
  }
  function hair2D(c,cx,cy,R,style,color){
    const drop={crop:.95,swept:.92,neat:.82,side:.8,curtain:.8,fringe:.72,natural:.72,fluffy:.72,curtainL:.74,wavyL:.74,bowl:.68,blunt:.6,heavy:.55}[style]||.74;
    c.save();c.fillStyle=color;c.beginPath();c.ellipse(cx,cy-R*drop,R*1.05,R*.72,0,0,7);c.fill();
    if(style==='curtainL'||style==='wavyL'){[-1,1].forEach(s=>{c.beginPath();c.ellipse(cx+s*R*.92,cy+R*.05,R*.28,R*.7,0,0,7);c.fill();});}
    if(style==='fluffy'){[-1,1].forEach(s=>{c.beginPath();c.arc(cx+s*R*.82,cy-R*.45,R*.36,0,7);c.fill();});}
    if(style==='side'||style==='swept'){c.beginPath();c.ellipse(cx-R*.3,cy-R*.62,R*.5,R*.22,-.5,0,7);c.fill();}
    c.restore();
  }
  // 머리 토큰을 캔버스에 그림. ringColor 없으면 팀링 생략.
  function drawHead(cv,p,R,ringColor){
    const c=cv.getContext('2d'),W=cv.width,H=cv.height,cx=W/2,cy=H/2; c.clearRect(0,0,W,H);
    if(ringColor){c.beginPath();c.arc(cx,cy,R+3,0,7);c.fillStyle=ringColor;c.fill();}
    c.beginPath();c.arc(cx,cy,R,0,7);c.fillStyle=p.f.s;c.fill();
    c.save();c.beginPath();c.arc(cx,cy,R,0,7);c.clip();
    hair2D(c,cx,cy,R,p.f.st,p.f.h);
    c.drawImage(faceCanvas({eyes:p.f.e,mouth:p.f.m,beard:p.f.b,brow:p.f.br}),cx-R,cy-R,R*2,R*2);
    c.restore();
  }
  function headCanvas(p,size,R,ringColor){const cv=document.createElement('canvas');cv.width=cv.height=size;drawHead(cv,p,R,ringColor);return cv;}
  return {faceCanvas,hair2D,drawHead,headCanvas};
})();
