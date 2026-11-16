import {mkdir,writeFile,cp,access} from 'node:fs/promises';
import {business,services,images,projects,heroVideo,heroDesktop,commercialFeature,finishedResult} from '../src/content.mjs';
import {layout,home,servicesPage,servicePage,work,about,contact,privacy} from '../src/site.mjs';
const assets=[finishedResult,heroDesktop,commercialFeature.before,commercialFeature.after,images.hero,images.about,images.team,...Object.values(images.services),...projects.map(p=>p.image)].filter(Boolean);
for(const image of assets){if(!image.src.startsWith('/images/')||image.src.includes('..'))throw Error('Invalid image path');await access('public'+image.src);}
export const pages=[
 ['/', 'Painters Queenstown | Colour Effection Painting & Decoration','Interior and exterior painting for homes, new builds and commercial properties in Queenstown and Central Otago. Request a free quote.',home()],
 ['/services/','Painting & Decorating Services Queenstown | Colour Effection','Explore residential and commercial painting, new builds, renovations, wallpaper installation and decorative finishes in Queenstown.',servicesPage()],
 ['/our-work/','Our Painting & Decorating Work | Colour Effection Queenstown','Explore interior, exterior, residential and commercial painting with Colour Effection. Discuss your next Queenstown or Central Otago project.',work()],
 ['/about/','About Colour Effection | Queenstown Painters & Decorators','Meet Colour Effection Painting & Decoration, based in Frankton, Queenstown, serving residential and commercial clients across Central Otago.',about()],
 ['/contact/','Request a Free Painting Quote | Colour Effection Queenstown','Contact Colour Effection for your painting and decorating project. Call +64 22 150 8486 or prepare an email enquiry for a free quote.',contact()],
 ['/privacy/','Privacy Policy | Colour Effection','How Colour Effection handles contact details and project enquiries shared through this website.',privacy()],
 ...services.map(s=>[`/services/${s.slug}/`,`${s.name} Queenstown | Colour Effection`,`${s.short} ${s.name} in Queenstown and Central Otago. Contact Colour Effection to discuss your project and request a free quote.`,servicePage(s)])
];
await access('public'+heroVideo.src);
await access('public'+heroVideo.mobileSrc);
await access('public'+heroVideo.poster);
await mkdir('dist',{recursive:true});await cp('public','dist',{recursive:true});
for(const [path,title,description,body]of pages){const dir='dist'+path;await mkdir(dir,{recursive:true});await writeFile(dir+'index.html',layout(path,title,description,body));}
await writeFile('dist/404.html',layout('/404/','Page not found | Colour Effection','The page could not be found.','<section class="container page-intro"><p class="eyebrow">404</p><h1>A different direction.</h1><p>This page could not be found.</p><a class="button" href="/">Back to Home</a></section>').replace('<head>','<head><meta name="robots" content="noindex">'));
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(([path])=>`<url><loc>${business.url}${path}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${business.url}/sitemap.xml\n`);
console.log(`Built ${pages.length} pages in dist/. No external assets or runtime dependencies.`);
