const __vite__fileDeps=["assets/OutOfCanvasUpdater-CGyjHQC-.js","assets/index-sGgwhAlq.js","assets/index-CBeR5PCN.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-sGgwhAlq.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-CGyjHQC-.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
