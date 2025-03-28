import"./chunks/mail.js";document.addEventListener("DOMContentLoaded",()=>{async function s(){try{const t=await fetch("http://localhost:1337/api/blogs");if(!t.ok)throw new Error("Error en la solicitud a la API");const r=await t.json();return console.log("Datos de fetchPosts (blogs):",r),r}catch(t){return console.error("Error fetching blogs:",t),{error:t}}}function c(t){const[r,e,o]=t.split("-").map(Number),n=r<10?`0${r}`:r,a=e<10?`0${e}`:e;return`${o}-${a}-${n}`}function l(t,r){r.innerHTML="",t.forEach(e=>{const o=document.createElement("article");o.classList.add("card"),o.innerHTML=`
                <a class="card-link" href="/content.html?id=${e.id}">
                    <img src="${e.portada}" alt="${e.titulo}" class="card-image">
                    <h4 class="title-card">${e.titulo}</h4>
                    <p class="subtitle-card">${e.subtitulo}</p>
                    <p class="date">${e.fecha}</p>
                </a>
            `,r.appendChild(o)})}s().then(t=>{if(t.error){console.error("Error:",t.error);return}const r=t.data,e=document.getElementById("reviews-container");if(!e){console.error('No se encontró el elemento con ID "reviews-container"');return}r.sort((o,n)=>{const a=new Date(c(o.fecha));return new Date(c(n.fecha))-a}),l(r,e)})});
