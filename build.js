const fs=require('fs'),p=require('path');
const R=f=>fs.readFileSync(p.join(__dirname,f),'utf8');
const B=f=>fs.readFileSync(p.join(__dirname,f)).toString('base64');

let html=R('src/index.html');
const three=R('vendor/three.core.js');
const app=R('src/app.js');

for(const [n,src] of [['three','vendor/three.core.js'],['app','src/app.js']])
  if(R(src).includes('</script')) throw new Error(n+' contains a script-closing tag');

const fonts=`<style>
@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:block;
  src:url(data:font/woff2;base64,${B('fonts/inter-latin-wght-normal.woff2')}) format("woff2");
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215;}
@font-face{font-family:"JetBrains Mono";font-style:normal;font-weight:100 800;font-display:block;
  src:url(data:font/woff2;base64,${B('fonts/jetbrains-mono-latin-wght-normal.woff2')}) format("woff2");
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+2000-206F,U+2074,U+20AC,U+2122,U+2212;}
</style>`;

/* replacer functions: the payload contains $' and $& sequences */
html=html.replace('<!--FONTS-->',()=>fonts)
         .replace('<!--APP-->',()=>'<script type="module">\n'+three+'\n/* ---- app ---- */\n;(function(){\n'+app+'\n})();\n</script>');

const out=p.join(__dirname,'dist/Anatomy-of-a-Machine.html');
fs.writeFileSync(out,html);
const dst=process.env.HOME+'/Documents/Anatomy-of-a-Machine.html';
fs.copyFileSync(out,dst);
console.log('built  '+dst+'   '+(fs.statSync(out).size/1048576).toFixed(2)+' MB');
