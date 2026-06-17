/* WC2026 AI LAB — 공유 데이터 (FIFA EFI 실측 기반)
   출처: FIFA Training Centre EFI Post-Match Reports (Hawk-Eye 트래킹).
   현재: Group A 1차전 2경기 (M01 멕시코-남아공 / M02 한국-체코). 경기 추가 시 여기에 append. */
window.LAB = (function(){
  const TEAM = {
    KOR:{c:'#c8102e',fl:'🇰🇷',name:'한국'},
    MEX:{c:'#0a7c3a',fl:'🇲🇽',name:'멕시코'},
    RSA:{c:'#e8a300',fl:'🇿🇦',name:'남아공'},
    CZE:{c:'#1b4a8a',fl:'🇨🇿',name:'체코'},
    BRA:{c:'#f5c518',fl:'🇧🇷',name:'브라질'},
    MAR:{c:'#c0392b',fl:'🇲🇦',name:'모로코'}
  };
  const KS='#f6cfa6',MS='#d9a06f',RS='#7a5236',CS='#f0d2b0';
  const F=(s,h,st,e,m,b,br)=>({s,h,st,e,m,b,br});
  // 선수: spd=최고속도 spr=스프린트 hsr=고속런 dist=km lb=라인브레이크완료 rg=볼탈취 g=골
  const P=[
   {t:'KOR',num:7,n:'손흥민',po:'FW',spd:35.2,spr:38,hsr:58,dist:7.0,lb:3,rg:0,g:0,f:F(KS,'#241a10','side','smile','grin',0,0)},
   {t:'KOR',num:22,n:'설영우',po:'RWB',spd:31.8,spr:53,hsr:115,dist:11.28,lb:4,rg:2,g:0,f:F(KS,'#2a1d12','fluffy','round','grin',0,0)},
   {t:'KOR',num:4,n:'김민재',po:'CB',spd:31.9,spr:35,hsr:113,dist:10.12,lb:6,rg:9,g:0,f:F(KS,'#171008','crop','sharp','flat','stubble',1)},
   {t:'KOR',num:6,n:'황인범',po:'MF',spd:28.5,spr:36,hsr:111,dist:9.52,lb:11,rg:3,g:1,f:F(KS,'#241a10','fringe','calm','smile',0,0)},
   {t:'KOR',num:19,n:'이강인',po:'AM',spd:28.8,spr:22,hsr:88,dist:9.53,lb:11,rg:0,g:0,f:F(KS,'#241a10','curtainL','sharp','smile',0,0)},
   {t:'KOR',num:3,n:'이기혁',po:'CB',spd:29.2,spr:51,hsr:158,dist:10.66,lb:13,rg:7,g:0,f:F(KS,'#2a1d12','blunt','calm','flat',0,0)},
   {t:'KOR',num:2,n:'이한범',po:'CB',spd:30.1,spr:39,hsr:117,dist:10.26,lb:11,rg:8,g:0,f:F(KS,'#2a1d12','curtain','calm','smile',0,0)},
   {t:'KOR',num:8,n:'백승호',po:'MF',spd:29.3,spr:20,hsr:115,dist:9.35,lb:12,rg:2,g:0,f:F(KS,'#2a1d12','neat','calm','flat',0,0)},
   {t:'KOR',num:18,n:'오현규',po:'FW',spd:29.1,spr:15,hsr:31,dist:3.04,lb:0,rg:0,g:1,f:F(KS,'#241a10','crop','round','grin',0,0)},
   {t:'MEX',num:9,n:'R.히메네스',po:'FW',spd:33.3,spr:33,hsr:67,dist:7.50,lb:2,rg:2,g:1,f:F(MS,'#0f0a05','neat','sharp','flat','mustache',0)},
   {t:'MEX',num:16,n:'키뇨네스',po:'FW',spd:32.9,spr:42,hsr:115,dist:8.83,lb:12,rg:1,g:1,f:F('#cf9760','#0f0a05','crop','sharp','grin','stubble',0)},
   {t:'MEX',num:25,n:'알바라도',po:'RW',spd:32.2,spr:43,hsr:116,dist:10.03,lb:8,rg:5,g:0,f:F(MS,'#100b06','crop','round','smile',0,0)},
   {t:'MEX',num:5,n:'바스케스',po:'CB',spd:27.9,spr:33,hsr:102,dist:10.05,lb:13,rg:3,g:0,f:F('#cf9760','#0f0a05','neat','sharp','flat','stubble',1)},
   {t:'MEX',num:8,n:'피달고',po:'MF',spd:30.8,spr:49,hsr:132,dist:8.58,lb:4,rg:1,g:0,f:F(MS,'#100b06','fluffy','round','smile',0,0)},
   {t:'MEX',num:15,n:'레예스',po:'DF',spd:30.0,spr:27,hsr:117,dist:10.27,lb:9,rg:3,g:0,f:F(MS,'#100b06','fringe','calm','flat',0,0)},
   {t:'MEX',num:23,n:'가야르도',po:'LB',spd:30.3,spr:29,hsr:86,dist:9.69,lb:5,rg:8,g:0,f:F(MS,'#0f0a05','side','calm','flat','mustache',0)},
   {t:'MEX',num:6,n:'리라',po:'MF',spd:31.4,spr:27,hsr:103,dist:8.88,lb:10,rg:1,g:0,f:F(MS,'#100b06','crop','calm','smile',0,0)},
   {t:'MEX',num:3,n:'몬테스',po:'CB',spd:30.1,spr:25,hsr:72,dist:8.55,lb:12,rg:4,g:0,f:F('#dca877','#c9a86a','neat','sharp','flat','stubble',1)},
   {t:'RSA',num:5,n:'음바타',po:'MF',spd:34.4,spr:24,hsr:59,dist:3.97,lb:1,rg:0,g:0,f:F(RS,'#0c0805','crop','round','smile',0,0)},
   {t:'RSA',num:15,n:'레이너스',po:'FW',spd:34.1,spr:41,hsr:82,dist:8.15,lb:2,rg:0,g:0,f:F(RS,'#0c0805','crop','sharp','grin',0,0)},
   {t:'RSA',num:20,n:'무다우',po:'DF',spd:33.3,spr:48,hsr:100,dist:9.34,lb:4,rg:2,g:0,f:F('#6b4a32','#0c0805','crop','calm','flat','stubble',0)},
   {t:'RSA',num:4,n:'모케나',po:'MF',spd:31.4,spr:44,hsr:136,dist:9.86,lb:11,rg:4,g:0,f:F(RS,'#0c0805','fringe','calm','smile',0,0)},
   {t:'RSA',num:21,n:'오콘',po:'DF',spd:31.6,spr:52,hsr:119,dist:9.56,lb:6,rg:9,g:0,f:F('#6b4a32','#0c0805','crop','sharp','flat',0,1)},
   {t:'RSA',num:19,n:'시비시',po:'DF',spd:29.9,spr:38,hsr:101,dist:9.39,lb:14,rg:5,g:0,f:F(RS,'#0c0805','crop','calm','flat','stubble',0)},
   {t:'RSA',num:14,n:'음보카지',po:'DF',spd:31.5,spr:43,hsr:91,dist:8.87,lb:3,rg:5,g:0,f:F('#6b4a32','#0c0805','crop','sharp','flat',0,0)},
   {t:'RSA',num:9,n:'포스터',po:'FW',spd:31.2,spr:16,hsr:66,dist:5.97,lb:0,rg:0,g:0,f:F(RS,'#0c0805','crop','round','grin','stubble',0)},
   {t:'CZE',num:6,n:'할로우펙',po:'DF',spd:34.0,spr:46,hsr:141,dist:10.87,lb:6,rg:9,g:0,f:F(CS,'#3a2a18','neat','sharp','flat','stubble',1)},
   {t:'CZE',num:17,n:'프로보드',po:'MF',spd:33.3,spr:45,hsr:109,dist:7.93,lb:3,rg:2,g:0,f:F(CS,'#6b4a28','fringe','calm','smile',0,0)},
   {t:'CZE',num:5,n:'쿠팔',po:'DF',spd:30.6,spr:48,hsr:145,dist:11.39,lb:3,rg:2,g:0,f:F(CS,'#2a1d10','neat','sharp','flat','stubble',0)},
   {t:'CZE',num:24,n:'소이카',po:'MF',spd:29.9,spr:50,hsr:163,dist:10.70,lb:6,rg:3,g:0,f:F(CS,'#caa86a','fluffy','calm','smile',0,0)},
   {t:'CZE',num:22,n:'소우첵',po:'MF',spd:27.5,spr:30,hsr:153,dist:11.83,lb:6,rg:1,g:0,f:F(CS,'#3a2a18','crop','calm','flat','stubble',1)},
   {t:'CZE',num:7,n:'크레이치',po:'DF',spd:26.5,spr:27,hsr:136,dist:10.88,lb:8,rg:3,g:1,f:F(CS,'#caa86a','neat','sharp','flat',0,1)},
   {t:'CZE',num:20,n:'젤레니',po:'DF',spd:30.4,spr:49,hsr:96,dist:10.85,lb:7,rg:4,g:0,f:F(CS,'#3a2a18','neat','calm','flat',0,0)},
   {t:'CZE',num:10,n:'시크',po:'FW',spd:28.9,spr:28,hsr:90,dist:8.05,lb:0,rg:0,g:0,f:F(CS,'#2a1d10','swept','sharp','grin','stubble',0)},
   {t:'CZE',num:18,n:'사딜렉',po:'MF',spd:29.3,spr:30,hsr:71,dist:3.92,lb:2,rg:1,g:0,f:F(CS,'#3a2a18','fringe','calm','smile',0,0)},
   {t:'BRA',num:7,n:'비니시우스',po:'FW',spd:34.1,spr:60,hsr:117,dist:10.10,lb:5,rg:1,g:1,f:F('#6b4a32','#0a0806','fluffy','sharp','grin',0,0)},
   {t:'BRA',num:11,n:'하피냐',po:'FW',spd:33.1,spr:80,hsr:152,dist:11.65,lb:2,rg:1,g:0,f:F('#8a5a3a','#1a120a','crop','sharp','grin','stubble',0)},
   {t:'BRA',num:4,n:'마르키뉴스',po:'CB',spd:33.3,spr:26,hsr:98,dist:9.79,lb:7,rg:8,g:0,f:F('#a06a44','#15100a','crop','sharp','flat',0,1)},
   {t:'BRA',num:3,n:'G.마갈량이스',po:'CB',spd:31.0,spr:30,hsr:122,dist:10.18,lb:10,rg:3,g:0,f:F('#6b4a32','#0c0805','crop','calm','flat','stubble',0)},
   {t:'BRA',num:8,n:'B.기마랑이스',po:'MF',spd:28.0,spr:32,hsr:133,dist:9.81,lb:5,rg:2,g:0,f:F('#a06a44','#15100a','fringe','calm','smile','stubble',0)},
   {t:'BRA',num:16,n:'더글라스 산투스',po:'LB',spd:30.9,spr:51,hsr:145,dist:10.53,lb:17,rg:8,g:0,f:F('#c8945f','#15100a','crop','calm','flat',0,0)},
   {t:'BRA',num:5,n:'카제미루',po:'MF',spd:26.5,spr:11,hsr:55,dist:5.32,lb:4,rg:4,g:0,f:F('#6b4a32','#0c0805','crop','sharp','flat','stubble',1)},
   {t:'BRA',num:25,n:'이고르 치아구',po:'FW',spd:33.2,spr:43,hsr:95,dist:7.50,lb:0,rg:3,g:0,f:F('#8a5a3a','#15100a','crop','round','grin',0,0)},
   {t:'MAR',num:2,n:'하키미',po:'RB',spd:30.8,spr:53,hsr:112,dist:10.15,lb:9,rg:5,g:0,f:F('#c8945f','#15100a','fluffy','sharp','grin',0,0)},
   {t:'MAR',num:11,n:'사이바리',po:'MF',spd:33.7,spr:76,hsr:120,dist:10.12,lb:2,rg:1,g:1,f:F('#a06a44','#15100a','crop','sharp','grin',0,0)},
   {t:'MAR',num:6,n:'부아디',po:'MF',spd:31.6,spr:42,hsr:142,dist:11.87,lb:11,rg:4,g:0,f:F('#6b4a32','#0c0805','fringe','calm','smile',0,0)},
   {t:'MAR',num:24,n:'엘아이나위',po:'MF',spd:30.2,spr:46,hsr:134,dist:11.78,lb:13,rg:7,g:0,f:F('#8a5a3a','#15100a','crop','calm','flat','stubble',0)},
   {t:'MAR',num:10,n:'브라힘 디아스',po:'AM',spd:31.1,spr:32,hsr:83,dist:6.68,lb:3,rg:1,g:0,f:F('#cf9760','#1a120a','side','sharp','smile',0,0)},
   {t:'MAR',num:14,n:'이사 디오프',po:'CB',spd:32.0,spr:22,hsr:94,dist:10.13,lb:10,rg:5,g:0,f:F('#5a3a26','#0c0805','crop','sharp','flat',0,1)},
   {t:'MAR',num:23,n:'엘칸누스',po:'MF',spd:33.2,spr:38,hsr:114,dist:8.55,lb:6,rg:4,g:0,f:F('#8a5a3a','#15100a','fringe','calm','smile',0,0)},
   {t:'MAR',num:3,n:'마즈라위',po:'DF',spd:31.3,spr:33,hsr:79,dist:8.04,lb:11,rg:3,g:0,f:F('#a06a44','#15100a','crop','calm','flat','stubble',0)}
  ];
  // 팀 EFI (경기 단위 실측) — ph: 국면 % / hiLine: 하이블록 라인높이 m / ballRec: 볼회수 s
  const T={
   MEX:{poss:57.1,xg:1.78,lb:105,ftr:117,dlb:10,hiLine:46,dist:107.3,ballRec:14.4,
        ph:{highPress:9,midBlock:25,lowBlock:11,defTrans:12,counterPress:8,attTrans:10},
        style:'점유·고압박 (final third 지배)',form:'4-1-2-3'},
   KOR:{poss:55.8,xg:1.77,lb:92,ftr:125,dlb:10,hiLine:42,dist:111.8,ballRec:12.8,
        ph:{highPress:4,midBlock:13,lowBlock:20,defTrans:17,counterPress:11,attTrans:10},
        style:'반응형 카운터 (깊은 블록 + 빠른 전환)',form:'3-4-3'},
   RSA:{poss:36.1,xg:0.1,lb:57,ftr:36,dlb:3,hiLine:43,dist:97.1,ballRec:22.4,
        ph:{highPress:6,midBlock:30,lowBlock:14,defTrans:10,counterPress:7,attTrans:12},
        style:'수비 블록 (5-3-2)',form:'5-3-2'},
   CZE:{poss:34.2,xg:0.64,lb:54,ftr:77,dlb:5,hiLine:46,dist:117.6,ballRec:18.4,
        ph:{highPress:5,midBlock:18,lowBlock:26,defTrans:10,counterPress:7,attTrans:17},
        style:'수비 + 세트피스/롱볼',form:'5-2-3'},
   BRA:{poss:46.7,xg:0.99,lb:89,ftr:100,dlb:11,hiLine:49,dist:113.7,ballRec:18.0,
        ph:{highPress:7,midBlock:16,lowBlock:19,defTrans:16,counterPress:10,attTrans:12},
        style:'개인 능력·좌측 비니시우스',form:'4-4-2'},
   MAR:{poss:45.2,xg:1.33,lb:81,ftr:149,dlb:5,hiLine:48,dist:114.9,ballRec:16.8,
        ph:{highPress:4,midBlock:34,lowBlock:20,defTrans:12,counterPress:8,attTrans:16},
        style:'미드블록·역습·세트피스',form:'4-2-3-1'}
  };
  // 실제 결과 (검증된 사실)
  const MATCHES=[
   {id:'M01',h:'MEX',a:'RSA',hs:2,as:0,venue:'Mexico City Stadium',scorers:['키뇨네스 8\'','R.히메네스 66\''],note:'몬테스 레드 90+2'},
   {id:'M02',h:'KOR',a:'CZE',hs:2,as:1,venue:'Guadalajara Stadium',scorers:['크레이치 59\'(CZE)','황인범 66\'','오현규 79\''],note:'손흥민 69\' 교체'},
   {id:'M07',h:'BRA',a:'MAR',hs:1,as:1,venue:'New York/New Jersey Stadium',scorers:['사이바리 20\'(MAR)','비니시우스 32\''],note:'1-1 무 · 브라질 4-4-2'}
  ];
  // 다가올 경기 (예언 엔진용)
  const FIXTURES=[
   {id:'M28',h:'MEX',a:'KOR',date:'2026-06-18',venue:'Estadio Akron (과달라하라, 1,566m)',played:false}
  ];
  return {TEAM,P,T,MATCHES,FIXTURES};
})();
