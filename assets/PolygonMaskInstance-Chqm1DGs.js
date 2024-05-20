import{o as b,p as I,a2 as S,R as B,M as P,k as O,al as A,i as D,c as G,Z as R,_ as M,N,d as V}from"./index-BJz4FO4R.js";const v=2,x={min:0,max:1},U=2;function L(d,h,o){const t=b(o.color);if(!t)return;const s=0,e=h[s];d.beginPath(),d.moveTo(e.x,e.y);for(const i of h)d.lineTo(i.x,i.y);d.closePath(),d.strokeStyle=I(t),d.lineWidth=o.width,d.stroke()}function k(d,h,o,t){const s={a:1,b:0,c:0,d:1};d.setTransform(s.a,s.b,s.c,s.d,t.x,t.y);const e=b(o.color);e&&(d.strokeStyle=I(e,o.opacity),d.lineWidth=o.width,d.stroke(h),d.resetTransform())}function z(d,h,o){const t=[];for(const e of d){const i=e.element.pathSegList,a=(i==null?void 0:i.numberOfItems)??0,n={x:0,y:0};for(let y=0;y<a;y++){const c=i==null?void 0:i.getItem(y),r=window.SVGPathSeg;switch(c==null?void 0:c.pathSegType){case r.PATHSEG_MOVETO_ABS:case r.PATHSEG_LINETO_ABS:case r.PATHSEG_CURVETO_CUBIC_ABS:case r.PATHSEG_CURVETO_QUADRATIC_ABS:case r.PATHSEG_ARC_ABS:case r.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:{const g=c;n.x=g.x,n.y=g.y;break}case r.PATHSEG_LINETO_HORIZONTAL_ABS:n.x=c.x;break;case r.PATHSEG_LINETO_VERTICAL_ABS:n.y=c.y;break;case r.PATHSEG_LINETO_REL:case r.PATHSEG_MOVETO_REL:case r.PATHSEG_CURVETO_CUBIC_REL:case r.PATHSEG_CURVETO_QUADRATIC_REL:case r.PATHSEG_ARC_REL:case r.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:{const g=c;n.x+=g.x,n.y+=g.y;break}case r.PATHSEG_LINETO_HORIZONTAL_REL:n.x+=c.x;break;case r.PATHSEG_LINETO_VERTICAL_REL:n.y+=c.y;break;case r.PATHSEG_UNKNOWN:case r.PATHSEG_CLOSEPATH:continue}t.push({x:n.x*h+o.x,y:n.y*h+o.y})}}return t}function C(d,h,o){const{dx:t,dy:s}=S(o,d),{dx:e,dy:i}=S(h,d),a=(t*e+s*i)/(e**v+i**v),n={x:d.x+e*a,y:d.y+i*a,isOnSegment:a>=x.min&&a<=x.max};return a<x.min?(n.x=d.x,n.y=d.y):a>x.max&&(n.x=h.x,n.y=h.y),n}function H(d,h,o){const{dx:t,dy:s}=S(d,h),e=Math.atan2(s,t),i=B.create(Math.sin(e),-Math.cos(e)),a=U*(o.x*i.x+o.y*i.y);i.multTo(a),o.subFrom(i)}const $=Object.freeze(Object.defineProperty({__proto__:null,calcClosestPointOnSegment:C,drawPolygonMask:L,drawPolygonMaskPath:k,parsePaths:z,segmentBounce:H},Symbol.toStringTag,{value:"Module"})),T=`${O} No polygon data loaded.`,j=`${O} No polygon found, you need to specify SVG url in config.`,m={x:0,y:0},E=.5,F=2;class Q{constructor(h,o){this._checkInsidePolygon=t=>{const s=this._container,e=s.actualOptions.polygon;if(!(e!=null&&e.enable)||e.type==="none"||e.type==="inline")return!0;if(!this.raw)throw new Error(j);const i=s.canvas.size,a=(t==null?void 0:t.x)??P()*i.width,n=(t==null?void 0:t.y)??P()*i.height,y=1;let c=!1;for(let r=0,g=this.raw.length-y;r<this.raw.length;g=r++){const l=this.raw[r],p=this.raw[g];l.y>n!=p.y>n&&a<(p.x-l.x)*(n-l.y)/(p.y-l.y)+l.x&&(c=!c)}return e.type==="inside"?c:e.type==="outside"?!c:!1},this._createPath2D=()=>{var e,i;if(!(!this._container.actualOptions.polygon||!((e=this.paths)!=null&&e.length)))for(const a of this.paths){const n=(i=a.element)==null?void 0:i.getAttribute("d");if(n){const r=new Path2D(n),g=document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGMatrix(),l=new Path2D,p=g.scale(this._scale);l.addPath?(l.addPath(r,p),a.path2d=l):delete a.path2d}else delete a.path2d;if(a.path2d??!this.raw)continue;a.path2d=new Path2D;const y=0,c=this.raw[y];a.path2d.moveTo(c.x,c.y),this.raw.forEach((r,g)=>{var l;g>y&&((l=a.path2d)==null||l.lineTo(r.x,r.y))}),a.path2d.closePath()}},this._downloadSvgPath=async(t,s)=>{const e=this._container.actualOptions.polygon;if(!e)return;const i=t??e.url,a=s??!1;if(!i||this.paths!==void 0&&!a)return this.raw;const n=await fetch(i);if(!n.ok)throw new Error(`${O} occurred during polygon mask download`);return await this._parseSvgPath(await n.text(),s)},this._drawPoints=()=>{if(this.raw)for(const t of this.raw)this._container.particles.addParticle({x:t.x,y:t.y})},this._getEquidistantPointByIndex=t=>{var l,p,f,w;const s=this._container,e=s.actualOptions;if(!e.polygon)return;if(!((l=this.raw)!=null&&l.length)||!((p=this.paths)!=null&&p.length))throw new Error(T);let a=0,n;const y=0,c=this.paths.reduce((u,_)=>u+_.length,y),r=c/e.particles.number.value;for(const u of this.paths){const _=r*t-a;if(_<=u.length){n=u.element.getPointAtLength(_);break}else a+=u.length}const g=this._scale;return{x:((n==null?void 0:n.x)??m.x)*g+(((f=this.offset)==null?void 0:f.x)??m.x),y:((n==null?void 0:n.y)??m.y)*g+(((w=this.offset)==null?void 0:w.y)??m.y)}},this._getPointByIndex=t=>{var e;if(!((e=this.raw)!=null&&e.length))throw new Error(T);const s=this.raw[t%this.raw.length];return{x:s.x,y:s.y}},this._getRandomPoint=()=>{var s;if(!((s=this.raw)!=null&&s.length))throw new Error(T);const t=A(this.raw);return{x:t.x,y:t.y}},this._getRandomPointByLength=()=>{var c,r,g,l;if(!this._container.actualOptions.polygon)return;if(!((c=this.raw)!=null&&c.length)||!((r=this.paths)!=null&&r.length))throw new Error(T);const e=A(this.paths),i=1,a=Math.floor(P()*e.length)+i,n=e.element.getPointAtLength(a),y=this._scale;return{x:n.x*y+(((g=this.offset)==null?void 0:g.x)??m.x),y:n.y*y+(((l=this.offset)==null?void 0:l.y)??m.y)}},this._initRawData=async t=>{const s=this._container.actualOptions.polygon;if(s){if(s.url)this.raw=await this._downloadSvgPath(s.url,t);else if(s.data){const e=s.data;let i;if(D(e))i=e;else{const a=c=>`<path d="${c}" />`,n=G(e.path)?e.path.map(a).join(""):a(e.path);i=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${e.size.width}" height="${e.size.height}">${n}</svg>`}this.raw=await this._parseSvgPath(i,t)}this._createPath2D(),this._engine.dispatchEvent("polygonMaskLoaded",{container:this._container})}},this._parseSvgPath=async(t,s)=>{const e=s??!1;if(this.paths!==void 0&&!e)return this.raw;const i=this._container,a=i.actualOptions.polygon;if(!a)return;const n=new DOMParser,y=n.parseFromString(t,"image/svg+xml"),c=0,r=y.getElementsByTagName("svg")[c];let g=r.getElementsByTagName("path");g.length||(g=y.getElementsByTagName("path")),this.paths=[];for(let u=0;u<g.length;u++){const _=g.item(u);_&&this.paths.push({element:_,length:_.getTotalLength()})}const l=this._scale;this.dimension.width=parseFloat(r.getAttribute("width")??"0")*l,this.dimension.height=parseFloat(r.getAttribute("height")??"0")*l;const p=a.position??{x:50,y:50},f=i.canvas.size;this.offset={x:f.width*p.x/R-this.dimension.width*E,y:f.height*p.y/R-this.dimension.height*E};const{parsePaths:w}=await M(()=>Promise.resolve().then(()=>$),void 0);return w(this.paths,l,this.offset)},this._polygonBounce=(t,s,e)=>{const i=this._container.actualOptions.polygon;if(!this.raw||!(i!=null&&i.enable)||e!=="top")return!1;if(i.type==="inside"||i.type==="outside"){let a,n,y;const c=t.getPosition(),r=t.getRadius(),g=1;for(let l=0,p=this.raw.length-g;l<this.raw.length;p=l++){const f=this.raw[l],w=this.raw[p];a=C(f,w,c);const u=S(c,a);if([n,y]=[u.dx,u.dy],u.distance<r)return H(f,w,t.velocity),!0}if(a&&n!==void 0&&y!==void 0&&!this._checkInsidePolygon(c)){const l={x:1,y:1},p=r*F,f=-1;return c.x>=a.x&&(l.x=-1),c.y>=a.y&&(l.y=-1),t.position.x=a.x+p*l.x,t.position.y=a.y+p*l.y,t.velocity.mult(f),!0}}else if(i.type==="inline"&&t.initialPosition){const a=N(t.initialPosition,t.getPosition()),{velocity:n}=t;if(a>this._moveRadius)return n.x=n.y*E-n.x,n.y=n.x*E-n.y,!0}return!1},this._randomPoint=()=>{const t=this._container,s=t.actualOptions.polygon;if(!s)return;let e;if(s.type==="inline")switch(s.inline.arrangement){case"random-point":e=this._getRandomPoint();break;case"random-length":e=this._getRandomPointByLength();break;case"equidistant":e=this._getEquidistantPointByIndex(t.particles.count);break;case"one-per-point":case"per-point":default:e=this._getPointByIndex(t.particles.count)}else{const i=t.canvas.size;e={x:P()*i.width,y:P()*i.height}}return this._checkInsidePolygon(e)?e:this._randomPoint()},this._container=h,this._engine=o,this.dimension={height:0,width:0},this._moveRadius=0,this._scale=1}clickPositionValid(h){const o=this._container.actualOptions.polygon;return!!(o!=null&&o.enable)&&o.type!=="none"&&o.type!=="inline"&&this._checkInsidePolygon(h)}draw(h){var e;if(!((e=this.paths)!=null&&e.length))return;const o=this._container.actualOptions.polygon;if(!(o!=null&&o.enable))return;const t=o.draw;if(!t.enable)return;const s=this.raw;for(const i of this.paths){const a=i.path2d;h&&(a&&this.offset?k(h,a,t.stroke,this.offset):s&&L(h,s,t.stroke))}}async init(){const h=this._container,o=h.actualOptions.polygon,t=h.retina.pixelRatio;o&&(this._moveRadius=o.move.radius*t,this._scale=o.scale*t,o.enable&&await this._initRawData())}particleBounce(h,o,t){return this._polygonBounce(h,o,t)}particlePosition(h){var s;const o=this._container.actualOptions.polygon,t=0;if(o!=null&&o.enable&&(((s=this.raw)==null?void 0:s.length)??t)>t)return V({},h||this._randomPoint())}particlesInitialization(){const h=this._container.actualOptions.polygon;return h!=null&&h.enable&&h.type==="inline"&&(h.inline.arrangement==="one-per-point"||h.inline.arrangement==="per-point")?(this._drawPoints(),!0):!1}resize(){const h=this._container,o=h.actualOptions.polygon;if(!(o!=null&&o.enable&&o.type!=="none"))return;this.redrawTimeout&&clearTimeout(this.redrawTimeout);const t=250;this.redrawTimeout=window.setTimeout(()=>{(async()=>(await this._initRawData(!0),await h.particles.redraw()))()},t)}stop(){delete this.raw,delete this.paths}}export{Q as PolygonMaskInstance};
