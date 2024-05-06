import{S as p}from"./SimplexNoise-BslOa3yb.js";import{d as a,R as l,M as f}from"./index-iGDHt5zD.js";const o={size:20,increment:.004,columns:0,rows:0,layers:0,width:0,height:0,offset:{x:4e4,y:4e4,z:4e4}};class z{constructor(){const s=new p;this._simplex=s.noise4d,this.field=[],this.noiseW=0,this.options=a({},o)}generate(s){var n,h,r;const t=s.getPosition(),i={x:Math.max(Math.floor(t.x/this.options.size),0),y:Math.max(Math.floor(t.y/this.options.size),0),z:Math.max(Math.floor(t.z/this.options.size),0)},e=l.origin;return(r=(h=(n=this.field)==null?void 0:n[i.x])==null?void 0:h[i.y])!=null&&r[i.z]&&e.setTo(this.field[i.x][i.y][i.z]),e}init(s){this.container=s,this._setup()}reset(){}update(){this.container&&(this._calculateField(),this.noiseW+=this.options.increment)}_calculateField(){const s=this.options;for(let t=0;t<s.columns;t++)for(let i=0;i<s.rows;i++)for(let e=0;e<s.layers;e++)this.field[t][i][e].angle=this._simplex.noise(t/50,i/50,e/50,this.noiseW)*Math.PI*2,this.field[t][i][e].length=this._simplex.noise(t/100+s.offset.x,i/100+s.offset.y,e/100+s.offset.z,this.noiseW)}_initField(){this.field=new Array(this.options.columns);for(let s=0;s<this.options.columns;s++){this.field[s]=new Array(this.options.rows);for(let t=0;t<this.options.rows;t++){this.field[s][t]=new Array(this.options.layers);for(let i=0;i<this.options.layers;i++)this.field[s][t][i]=l.origin}}}_resetField(){const s=this.container;if(!s)return;const t=s.actualOptions.particles.move.path.options;this.options.size=t.size>0?t.size:o.size,this.options.increment=t.increment>0?t.increment:o.increment,this.options.width=s.canvas.size.width,this.options.height=s.canvas.size.height;const i=t.offset;this.options.offset.x=(i==null?void 0:i.x)??o.offset.x,this.options.offset.y=(i==null?void 0:i.y)??o.offset.y,this.options.offset.z=(i==null?void 0:i.z)??o.offset.z,this.options.seed=t.seed??o.seed,this._simplex.seed(this.options.seed??f()),this.options.columns=Math.floor(this.options.width/this.options.size)+1,this.options.rows=Math.floor(this.options.height/this.options.size)+1,this.options.layers=Math.floor(s.zLayers/this.options.size)+1,this._initField()}_setup(){this.noiseW=0,this._resetField(),addEventListener("resize",()=>this._resetField())}}export{z as SimplexNoiseGenerator};