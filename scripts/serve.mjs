import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');
const port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml','.txt':'text/plain','.webp':'image/webp','.avif':'image/avif','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.mp4':'video/mp4'};
const security={'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; media-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'"};
http.createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let file=resolve(root,'.'+pathname);
  if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403,security);res.end();return;}
  let info=await stat(file);
  if(info.isDirectory()){file=resolve(file,'index.html');info=await stat(file);}
  const headers={...security,'Content-Type':types[extname(file)]||'application/octet-stream','Accept-Ranges':'bytes'};
  if(req.headers.range){
   const match=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
   let start=0,end=info.size-1;
   if(match){if(match[1]){start=Number(match[1]);if(match[2])end=Math.min(Number(match[2]),end);}else if(match[2])start=Math.max(0,info.size-Number(match[2]));}
   if(!match||(!match[1]&&!match[2])||start>end||start>=info.size){res.writeHead(416,{...headers,'Content-Range':`bytes */${info.size}`});res.end();return;}
   res.writeHead(206,{...headers,'Content-Range':`bytes ${start}-${end}/${info.size}`,'Content-Length':end-start+1});
   if(req.method==='HEAD')res.end();else createReadStream(file,{start,end}).pipe(res);
  }else{
   res.writeHead(200,{...headers,'Content-Length':info.size});
   if(req.method==='HEAD')res.end();else createReadStream(file).pipe(res);
  }
 }catch{res.writeHead(404,{...security,'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(resolve(root,'404.html')));}
}).listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
