import{a as d,_ as i,o as s,c as o,b as a,t as p,d as c,F as _,e as l}from"./entry-94bf2d35.mjs";var u=d.exports;const m={data(){return{post:{}}},async asyncData({params:n,payload:t}){return t?{post:t}:u.get("http://jamstack.local/wp-json/wp/v2/posts/"+n.id).then(r=>({post:r.data}))}},h={class:"container"},f={key:0,class:"mb-8"},v=["innerHTML"],x=l(" Have a dope day ");function k(n,t,r,y,e,g){return s(),o("div",null,[a("div",h,[e.post.title.rendered?(s(),o("h2",f,p(e.post.title.rendered),1)):c("",!0),e.post.content.rendered?(s(),o(_,{key:1},[a("div",{innerHTML:e.post.content.rendered},null,8,v),x],64)):c("",!0)])])}var H=i(m,[["render",k]]);export{H as default};
