export const business = {
 name: 'Colour Effection Painting & Decoration', shortName: 'Colour Effection',
 url: 'https://www.cepdecoration.com', phone: '+64 22 150 8486', tel: '+64221508486',
 email: 'leonardo@cepdecoration.com', street: '24A Douglas Street', locality: 'Frankton, Queenstown', postcode: '9300',
 hours: 'Monday–Friday, 8:00 am–7:00 pm', instagram: 'https://www.instagram.com/coloureffection/', google: 'https://share.google/mFpQ2ZH1T7CoUxoqG',
 areas: ['Queenstown', 'Frankton', 'Arrowtown', 'Wānaka', 'Cromwell', 'Alexandra', 'Central Otago']
};
// Services supplied in the client brief. Official website unavailable during research; owner confirmation pending.
export const services = [
 {slug:'interior-painting',name:'Interior Painting',short:'A considered refresh for the spaces you live and work in.', intro:'Make room for a fresh perspective.',body:'From a single room to a complete interior, discuss the colours, surfaces and finish you have in mind. We provide interior painting for homes and commercial properties in Queenstown and the surrounding region.',details:['Interior walls and ceilings','Painting for new interiors and existing spaces','Drywall repairs and GIB stopping'],question:'Which rooms or surfaces would you like painted? Let us know about their current condition and whether the property will be occupied.'},
 {slug:'exterior-painting',name:'Exterior Painting',short:'A fresh exterior, with attention to every visible detail.',intro:'Give your property a fresh outlook.',body:'Exterior painting starts with understanding your property and the surfaces involved. Tell us about your house or commercial building so we can discuss preparation, access and an appropriate painting approach.',details:['Exterior house painting','Exterior repainting','Roof spray painting'],question:'Tell us about the exterior surfaces, access to the building and any areas that need particular attention.'},
 {slug:'residential-painting',name:'Residential Painting',short:'Thoughtful painting for the place you call home.',intro:'A finish that feels like home.',body:'Whether you are updating a room or planning a house repaint, Colour Effection offers residential painting across Queenstown and Central Otago. Share your ideas and we can discuss the scope that suits your home.',details:['Interior and exterior home painting','House repainting','Painting as part of home renovations'],question:'Is this a room refresh, a full repaint or part of a larger renovation? Share your location and the areas involved.'},
 {slug:'commercial-painting',name:'Commercial Painting',short:'Well-presented spaces for your business and its people.',intro:'Make the right first impression.',body:'A considered paint finish is part of how your business presents itself. We offer commercial painting and welcome enquiries about your premises, access requirements and preferred project timeframe.',details:['Commercial interior painting','Commercial exterior painting','New and existing commercial properties'],question:'Let us know how your premises are used, the surfaces involved and any access or operating-hour considerations.'},
 {slug:'new-builds-renovations',name:'New Builds & Renovations',short:'Bring the finishing stages of your project together.',intro:'The finishing touch to a new chapter.',body:'Planning a new build or renovating an existing property? Talk to us about painting at the right stage of your project, including the areas to be finished and any preparation requirements.',details:['New build painting','Painting for renovations','GIB stopping and drywall repairs'],question:'Share your project stage, plans if available, and the painting or preparation work you need.'},
 {slug:'decorating-finishes',name:'Decorating & Specialist Finishes',short:'Wallpaper, decorative finishes and spray painting.',intro:'Details that make a space your own.',body:'Explore a different finish for your space with decorative painting, wallpaper installation or spray painting. Tell us what you have in mind so we can discuss suitability for the surface and your project.',details:['Decorative painting and finishes','Wallpaper installation','Spray painting'],question:'Describe your preferred finish or wallpaper, the surface and the approximate area. Specific techniques and material suitability are confirmed when we discuss your project.'}
];
// Use local /images/... paths only, plus meaningful alt text and intrinsic dimensions.
const photos = [
  {
    "src": "/images/projects/spray-painting.jpg",
    "alt": "Painter spray painting beside a masked window",
    "width": 900,
    "height": 1600
  },
  {
    "src": "/images/projects/interior-preparation.jpg",
    "alt": "Interior walls being prepared around a fireplace",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/images/projects/renovation-preparation.jpg",
    "alt": "Living space during renovation and surface preparation",
    "width": 960,
    "height": 1280
  },
  {
    "src": "/images/projects/bedroom-preparation.jpg",
    "alt": "Bedroom with protected furniture and prepared walls",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/images/projects/finished-living-space.jpg",
    "alt": "Painted living space with a dark kitchen and pendant light",
    "width": 1600,
    "height": 1200
  },
  {
    "src": "/images/projects/protected-interior.jpg",
    "alt": "Protected windows and interior surfaces during painting",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/images/projects/wall-preparation.jpg",
    "alt": "Prepared walls and ceiling before finishing",
    "width": 1500,
    "height": 2000
  },
  {
    "src": "/images/projects/finished-bedroom.jpg",
    "alt": "Finished bedroom with light walls and a recessed ceiling",
    "width": 1600,
    "height": 1200
  },
  {
    "src": "/images/projects/finished-hallway.jpg",
    "alt": "Light-painted hallway leading into a bedroom",
    "width": 1200,
    "height": 1600
  },
  {
    "src": "/images/projects/warehouse-interior.jpg",
    "alt": "Interior of a warehouse with exposed roof structure",
    "width": 1200,
    "height": 1600
  }
];
// Client-confirmed commercial before/after pair. No location or coating specification inferred.
export const commercialFeature = {
 title:'A fresh finish for a working space.',
 before:{src:'/images/projects/commercial-before.png',alt:'Commercial warehouse before painting, with unfinished concrete walls and floor',width:1200,height:1600},
 after:{src:'/images/projects/commercial-after.png',alt:'The commercial warehouse after painting, with light walls and a finished floor area',width:1200,height:1600}
};
export const finishedResult = {src:'/images/projects/finished-interior-result.png',alt:'Completed interior with painted walls and ceiling, dark kitchen cabinetry and a lake-facing living area',width:1448,height:1086};
export const heroDesktop = {src:'/images/hero/living-space-desktop.png',width:1448,height:1086};
export const heroVideo = {src:'/videos/colour-effection-desktop.mp4',mobileSrc:'/videos/colour-effection-mobile-76fad575.mp4',poster:finishedResult.src};
export const exteriorResult = {src:'/images/projects/exterior-completed.jpg',alt:'Completed exterior painting with charcoal cladding and light grey walls',width:1080,height:1920};
export const clientPhotos = {
  "team-queenstown": {
    "src": "/images/projects/team-queenstown.jpg",
    "width": 1200,
    "height": 1200,
    "alt": "Three members of the Colour Effection team outdoors with mountains behind them"
  },
  "ceiling-spray-in-progress": {
    "src": "/images/projects/ceiling-spray-in-progress.jpg",
    "width": 720,
    "height": 1280,
    "alt": "Painter spray painting a white timber ceiling during interior work"
  },
  "interior-spray-in-progress": {
    "src": "/images/projects/interior-spray-in-progress.jpg",
    "width": 480,
    "height": 852,
    "alt": "Painter applying paint to an interior wall during preparation work"
  },
  "exterior-garage-finish": {
    "src": "/images/projects/exterior-garage-finish.jpg",
    "width": 1080,
    "height": 1920,
    "alt": "Dark garage door and light roof at a completed exterior"
  },
  "hallway-renovation-in-progress": {
    "src": "/images/projects/hallway-renovation-in-progress.jpg",
    "width": 1440,
    "height": 1920,
    "alt": "Hallway with tools and surfaces being prepared during renovation"
  },
  "painted-doors-drying": {
    "src": "/images/projects/painted-doors-drying.jpg",
    "width": 720,
    "height": 1280,
    "alt": "White painted doors arranged on a drying rack"
  },
  "driveway-detail": {
    "src": "/images/projects/driveway-detail.jpg",
    "width": 1080,
    "height": 1920,
    "alt": "Concrete driveway outside an open garage"
  },
  "neutral-wall-finish": {
    "src": "/images/projects/neutral-wall-finish.jpg",
    "width": 828,
    "height": 1472,
    "alt": "Neutral painted wall with white skirting and ceiling trim"
  },
  "interior-alcove-finish": {
    "src": "/images/projects/interior-alcove-finish.jpg",
    "width": 828,
    "height": 1472,
    "alt": "Painted interior wall and alcove with white trim"
  },
  "exterior-masking-preparation": {
    "src": "/images/projects/exterior-masking-preparation.jpg",
    "width": 1440,
    "height": 1440,
    "alt": "Exterior walls with windows carefully masked before painting"
  },
  "interior-trim-finish": {
    "src": "/images/projects/interior-trim-finish.jpg",
    "width": 720,
    "height": 1280,
    "alt": "Light interior walls and white doorway trim during building work"
  },
  "window-trim-detail": {
    "src": "/images/projects/window-trim-detail.jpg",
    "width": 828,
    "height": 1472,
    "alt": "Painted white window trim with scaffolding visible outside"
  },
  "green-feature-wall": {
    "src": "/images/projects/green-feature-wall.jpg",
    "width": 1440,
    "height": 1440,
    "alt": "Olive green bedroom feature wall with white doors and pendant lights"
  },
  "gib-preparation": {
    "src": "/images/projects/gib-preparation.jpg",
    "width": 768,
    "height": 768,
    "alt": "Plasterboard joints and fixing points prepared before painting"
  },
  "colour-effection-family": {
    "src": "/images/projects/colour-effection-family.jpg",
    "width": 1440,
    "height": 1440,
    "alt": "Two adults and a child wearing Colour Effection branded clothing outdoors"
  }
};
export const images = {hero:photos[0],about:clientPhotos['team-queenstown'],team:clientPhotos['team-queenstown'],services:{'interior-painting':finishedResult,'exterior-painting':exteriorResult,'residential-painting':photos[7],'commercial-painting':commercialFeature.after,'new-builds-renovations':clientPhotos['interior-trim-finish'],'decorating-finishes':clientPhotos['green-feature-wall']}};
// Add only owner-approved, real projects: {id,title,category,location,image:{src,alt,width,height}}.
export const projects = [
 {id:'featured-commercial',title:'Commercial painting — completed finish',category:'Commercial Projects',image:commercialFeature.after},
 {id:'interior-finish',title:'Completed interior — actual result',category:'Interior Painting',image:finishedResult},
 {id:'exterior-finish',title:'Exterior painting — completed finish',category:'Exterior Painting',image:exteriorResult},
 {id:'bedroom-finish',title:'Bedroom finish',category:'Residential Projects',image:photos[7]},
 {id:'green-feature-wall',title:'Bedroom feature wall',category:'Residential Projects',image:clientPhotos['green-feature-wall']},
 {id:'exterior-masking-preparation',title:'Exterior preparation — windows protected',category:'Exterior Painting',image:clientPhotos['exterior-masking-preparation']},
 {id:'painted-doors-drying',title:'Painted doors on the drying rack',category:'Interior Painting',image:clientPhotos['painted-doors-drying']},
 {id:'ceiling-spray-in-progress',title:'Ceiling spray painting — in progress',category:'Interior Painting',image:clientPhotos['ceiling-spray-in-progress']},
 {id:'gib-preparation',title:'Surface preparation before painting',category:'Interior Painting',image:clientPhotos['gib-preparation']},
 {id:'exterior-garage-finish',title:'Exterior garage finish',category:'Exterior Painting',image:clientPhotos['exterior-garage-finish']},
 {id:'spray-application',title:'Spray painting in progress',category:'Interior Painting',image:photos[0]},
 {id:'commercial-interior',title:'Commercial space — before painting',category:'Commercial Projects',image:photos[9]},
 {id:'hallway-finish',title:'Hallway finish',category:'Interior Painting',image:photos[8]},
 {id:'surface-preparation',title:'Surface preparation',category:'Residential Projects',image:photos[6]}
];
export const categories = ['Interior Painting','Exterior Painting','Residential Projects','Commercial Projects'];
// Display only verified reviews with permission/source: {name,text,sourceUrl}.
export const reviews = [];




