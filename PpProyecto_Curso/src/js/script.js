document.addEventListener('DOMContentLoaded', () => {
    async function fetchPosts() {
        try {
            const response = await fetch('http://localhost:1337/api/blogs');
            if (!response.ok) throw new Error('Error en la solicitud a la API');
            const data = await response.json();
            console.log('Datos de fetchPosts (blogs):', data);
            return data;
        } catch (error) {
            console.error('Error fetching blogs:', error);
            return { error };
        }
    }

    function parseCustomDate(dateString) {
        const [day, month, year] = dateString.split('-').map(Number);
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${year}-${formattedMonth}-${formattedDay}`;
    }

    function renderPosts(posts, container) {
        container.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('card');
            postElement.innerHTML = `
                <a class="card-link" href="/content.html?id=${post.id}">
                    <img src="${post.portada}" alt="${post.titulo}" class="card-image">
                    <h4 class="title-card">${post.titulo}</h4>
                    <p class="subtitle-card">${post.subtitulo}</p>
                    <p class="date">${post.fecha}</p>
                </a>
            `;
            container.appendChild(postElement);
        });
    }

    fetchPosts().then(data => {
        if (data.error) {
            console.error('Error:', data.error);
            return;
        }
        const posts = data.data;
        const container = document.getElementById('reviews-container');
        if (!container) {
            console.error('No se encontró el elemento con ID "reviews-container"');
            return;
        }

        posts.sort((a, b) => {
            const dateA = new Date(parseCustomDate(a.fecha));
            const dateB = new Date(parseCustomDate(b.fecha));
            return dateB - dateA; // De más reciente a más antigua
        });

        renderPosts(posts, container);
    });
});