import{Z as t,M as a,a3 as z}from"./index-BJz4FO4R.js";const s=0;class r{init(n){const e=n.container,i=n.options.size,o=i.animation;o.enable&&(n.size.velocity=(n.retina.sizeAnimationSpeed??e.retina.sizeAnimationSpeed)/t*e.retina.reduceFactor,o.sync||(n.size.velocity*=a()))}isEnabled(n){return!n.destroyed&&!n.spawning&&n.size.enable&&((n.size.maxLoops??s)<=s||(n.size.maxLoops??s)>s&&(n.size.loops??s)<(n.size.maxLoops??s))}reset(n){n.size.loops=s}update(n,e){this.isEnabled(n)&&z(n,n.size,!0,n.options.size.animation.destroy,e)}}export{r as SizeUpdater};
