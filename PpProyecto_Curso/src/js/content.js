document.addEventListener('DOMContentLoaded', () => {
    async function fetchPosts() {
        try {
            const response = await fetch('http://localhost:1337/api/blogs');
            if (!response.ok) throw new Error('Error en la solicitud a la API');
            const data = await response.json();
            console.log('Datos de fetchPosts:', data);
            return data;
        } catch (error) {
            console.error('Error fetching posts:', error);
            return { error };
        }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log('ID obtenido de la URL:', id);

    if (id) {
        fetchPosts().then(data => {
            if (data.error) {
                console.error('Error:', data.error);
                return;
            }
            const post = data.data.find(post => post.id === parseInt(id));
            if (!post) {
                console.error('No se encontró el post con el ID especificado');
                return;
            }
            console.log('Post encontrado:', post);

            const container = document.getElementById('reviews');
            if (!container) {
                console.error('No se encontró el elemento con ID "reviews"');
                return;
            }
            const postContainer = document.createElement('div');
            postContainer.classList.add('title-container');
            postContainer.innerHTML = `
                <h2 class="title-content">${post.titulo}</h2>
                <h3 class="subtitle">${post.subtitulo}</h3>
            `;
            const postContent = document.createElement('div');
            postContent.classList.add('article-review');
            postContent.innerHTML = `
                <img src="${post.img_principal || 'ruta-de-imagen-placeholder.jpg'}" alt="${post.titulo}" class="review-img">
                <p class="review-paragraph">${post.parrafo1}</p>
                ${post.img2 ? `<img src="${post.img2}" alt="${post.titulo}" class="review-img">` : ''}
                <p class="review-paragraph">${post.parrafo2}</p>
                <p class="review-paragraph">${post.parrafo3}</p>
                ${post.img3 ? `<img src="${post.img3}" alt="${post.titulo}" class="review-img">` : ''}
                <p class="review-paragraph">${post.parrafo4}</p>
                ${post.img4 ? `<img src="${post.img4}" alt="${post.titulo}" class="review-img">` : ''}
                <p class="review-paragraph">${post.parrafo5}</p>
                ${post.parrafo6 ? `<p class="review-paragraph">${post.parrafo6}</p>` : ''}
                ${post.parrafo7 ? `<p class="review-paragraph">${post.parrafo7}</p>` : ''}
                ${post.parrafo8 ? `<p class="review-paragraph">${post.parrafo8}</p>` : ''}
                ${post.img5 ? `<img src="${post.img5}" alt="${post.titulo}" class="review-img">` : ''}
                ${post.parrafo9 ? `<p class="review-paragraph">${post.parrafo9}</p>` : ''}
                ${post.parrafo10 ? `<p class="review-paragraph">${post.parrafo10}</p>` : ''}
                ${post.parrafo11 ? `<p class="review-paragraph">${post.parrafo11}</p>` : ''}
                ${post.img6 ? `<img src="${post.img6}" alt="${post.titulo}" class="review-img">` : ''}
                ${post.parrafo12 ? `<p class="review-paragraph">${post.parrafo12}</p>` : ''}
                ${post.parrafo13 ? `<p class="review-paragraph">${post.parrafo13}</p>` : ''}
                ${post.parrafo14 ? `<p class="review-paragraph">${post.parrafo14}</p>` : ''}
                ${post.parrafo15 ? `<p class="review-paragraph">${post.parrafo15}</p>` : ''}
                ${post.parrafo16 ? `<p class="review-paragraph">${post.parrafo16}</p>` : ''}
                ${post.parrafo17 ? `<p class="review-paragraph">${post.parrafo17}</p>` : ''}
                ${post.parrafo18 ? `<p class="review-paragraph">${post.parrafo18}</p>` : ''}
                ${post.parrafo19 ? `<p class="review-paragraph">${post.parrafo19}</p>` : ''}
                ${post.videos ? `<div class="video-container"><iframe width="560" height="315" src="${post.videos}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>` : ''}
                ${post.video2 ? `<div class="video-container"><iframe width="560" height="315" src="${post.video2}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>` : ''}
            `;
            container.appendChild(postContainer);
            container.appendChild(postContent);
        });
    } else {
        console.error('No se encontró el ID en la URL');
    }
});