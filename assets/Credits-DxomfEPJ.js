import{I as m,r as a,K as f,j as t,S as j,B as i,T as r}from"./index-CHIl736j.js";const u=()=>{const{movieId:n}=m(),[o,c]=a.useState([]);a.useEffect(()=>{d(n)},[]);const d=async e=>{try{const s=await f(e);c(s.data.cast)}catch(s){console.error(s)}},h=o.slice(0,7);return t.jsx(t.Fragment,{children:h.map(e=>{const{character:s,original_name:x,profile_path:l,id:p}=e;return t.jsxs(j,{direction:"row",children:[t.jsx(i,{children:t.jsx("img",{width:70,src:"https://media.themoviedb.org/t/p/w220_and_h330_face"+l})}),t.jsxs(i,{sx:{height:"100px",display:"flex",flexDirection:"column",justifyContent:"flex-end",mx:"10px"},children:[t.jsx(r,{variant:"body2",children:x}),t.jsx(r,{variant:"body2",children:"as"}),t.jsx(r,{variant:"body2",children:s})]})]},p)})})};export{u as default};