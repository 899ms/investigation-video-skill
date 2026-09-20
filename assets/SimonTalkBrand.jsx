import React from 'react';

// 星芒与底划几何与成片字标一致。
// Pass the live account.brand configuration; SignPainter must be installed.
export function SimonTalkBrand({brand={},dark=false,right=75,top=33,scale=1}) {
  const accent=brand.accent || '#10C46F';
  const signature=brand.signature || 'Simon Talk';
  return <div aria-label={brand.wordmark || 'SimonTalk'} style={{position:'absolute',right,top,width:265,height:84,color:dark?'#fafaf8':'#20262d',transform:`scale(${scale})`,transformOrigin:'top right',pointerEvents:'none'}}>
    <svg viewBox="0 0 40 40" style={{position:'absolute',left:0,top:1,width:24,height:24}}><path d="M20 0 L24 15 L40 20 L24 25 L20 40 L16 25 L0 20 L16 15 Z" fill={accent}/></svg>
    <div style={{position:'absolute',left:24,top:0,fontFamily:'SignPainter',fontSize:55,fontWeight:600,lineHeight:1.05,letterSpacing:1,textShadow:dark?'0 2px 6px #0007':'none'}}>{signature}</div>
    <svg viewBox="0 0 320 22" preserveAspectRatio="none" style={{position:'absolute',left:27,top:57,width:224,height:15}}><path d="M4 15 C 70 6 220 2 316 7 C 230 8 100 13 12 19 Z" fill={accent}/></svg>
  </div>;
}
