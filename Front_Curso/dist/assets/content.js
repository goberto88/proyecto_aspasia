import"./chunks/mail.js";document.addEventListener("DOMContentLoaded",()=>{async function s(){try{const a=await fetch("http://localhost:1337/api/blogs");if(!a.ok)throw new Error("Error en la solicitud a la API");const r=await a.json();return console.log("Datos de fetchPosts:",r),r}catch(a){return console.error("Error fetching posts:",a),{error:a}}}const e=new URLSearchParams(window.location.search).get("id");console.log("ID obtenido de la URL:",e),e?s().then(a=>{if(a.error){console.error("Error:",a.error);return}const r=a.data.find(t=>t.id===parseInt(e));if(!r){console.error("No se encontró el post con el ID especificado");return}console.log("Post encontrado:",r);const o=document.getElementById("reviews");if(!o){console.error('No se encontró el elemento con ID "reviews"');return}const i=document.createElement("div");i.classList.add("title-container"),i.innerHTML=`
                <h2 class="title-content">${r.titulo}</h2>
                <h3 class="subtitle">${r.subtitulo}</h3>
            `;const p=document.createElement("div");p.classList.add("article-review"),p.innerHTML=`
                <img src="${r.img_principal||"ruta-de-imagen-placeholder.jpg"}" alt="${r.titulo}" class="review-img">
                <p class="review-paragraph">${r.parrafo1}</p>
                ${r.img2?`<img src="${r.img2}" alt="${r.titulo}" class="review-img">`:""}
                <p class="review-paragraph">${r.parrafo2}</p>
                <p class="review-paragraph">${r.parrafo3}</p>
                ${r.img3?`<img src="${r.img3}" alt="${r.titulo}" class="review-img">`:""}
                <p class="review-paragraph">${r.parrafo4}</p>
                ${r.img4?`<img src="${r.img4}" alt="${r.titulo}" class="review-img">`:""}
                <p class="review-paragraph">${r.parrafo5}</p>
                ${r.parrafo6?`<p class="review-paragraph">${r.parrafo6}</p>`:""}
                ${r.parrafo7?`<p class="review-paragraph">${r.parrafo7}</p>`:""}
                ${r.parrafo8?`<p class="review-paragraph">${r.parrafo8}</p>`:""}
                ${r.img5?`<img src="${r.img5}" alt="${r.titulo}" class="review-img">`:""}
                ${r.parrafo9?`<p class="review-paragraph">${r.parrafo9}</p>`:""}
                ${r.parrafo10?`<p class="review-paragraph">${r.parrafo10}</p>`:""}
                ${r.parrafo11?`<p class="review-paragraph">${r.parrafo11}</p>`:""}
                ${r.img6?`<img src="${r.img6}" alt="${r.titulo}" class="review-img">`:""}
                ${r.parrafo12?`<p class="review-paragraph">${r.parrafo12}</p>`:""}
                ${r.parrafo13?`<p class="review-paragraph">${r.parrafo13}</p>`:""}
                ${r.parrafo14?`<p class="review-paragraph">${r.parrafo14}</p>`:""}
                ${r.parrafo15?`<p class="review-paragraph">${r.parrafo15}</p>`:""}
                ${r.parrafo16?`<p class="review-paragraph">${r.parrafo16}</p>`:""}
                ${r.parrafo17?`<p class="review-paragraph">${r.parrafo17}</p>`:""}
                ${r.parrafo18?`<p class="review-paragraph">${r.parrafo18}</p>`:""}
                ${r.parrafo19?`<p class="review-paragraph">${r.parrafo19}</p>`:""}
                ${r.videos?`<div class="video-container"><iframe width="560" height="315" src="${r.videos}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`:""}
                ${r.video2?`<div class="video-container"><iframe width="560" height="315" src="${r.video2}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`:""}
            `,o.appendChild(i),o.appendChild(p)}):console.error("No se encontró el ID en la URL")});
