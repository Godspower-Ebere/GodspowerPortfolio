const __vite__fileDeps=["assets/GradientUpdater-Dnu0WVIC.js","assets/index-RZCRDvBu.js","assets/index-CBeR5PCN.css","assets/AnimatableColor-CnN4GYLZ.js","assets/AnimationOptions-C62jTSeL.js","assets/OptionsColor-DnzpZ_Vz.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-RZCRDvBu.js";async function i(t,a=!0){await t.addParticleUpdater("gradient",async()=>{const{GradientUpdater:r}=await e(()=>import("./GradientUpdater-Dnu0WVIC.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r},a)}export{i as loadGradientUpdater};