import{s as a,_ as g,o as r,c as o,b as l,n as c}from"./index-CtDizlAM.js";const m=a("girl",{state:()=>({girlID:1,level:5}),getters:{},actions:{getGirlsImage(s,e){return`https://hh.hh-content.com/pictures/girls/${s}/ava${e}-1200x.webp`},getGirlsIcon(s,e){return`https://hh.hh-content.com/pictures/girls/${s}/ico${e}-300x.webp`}}}),p=["src"],u=["src"],_={__name:"girls-Image",props:{id:{default:1},level:{default:0},isIcon:{type:Boolean,default:!1},rarity:{type:String,default:"common"}},setup(s){const e=s,t=m(),i=t.getGirlsIcon(e.id,e.level),n=t.getGirlsImage(e.id,e.level);return(h,d)=>e.isIcon?(r(),o("img",{key:0,src:l(i),alt:"no girls icon",class:c(e.rarity)},null,10,p)):(r(),o("img",{key:1,src:l(n),alt:"no girls image",class:c(e.rarity)},null,10,u))}},I=g(_,[["__scopeId","data-v-16f0784f"]]);export{I as g};
