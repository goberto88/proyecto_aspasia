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

    // Función para convertir "día-mes-año" a "año-mes-día" (ISO 8601)
    function parseCustomDate(dateString) {
        const [day, month, year] = dateString.split('-').map(Number);
        // Asegurarse de que mes y día tengan dos dígitos
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${year}-${formattedMonth}-${formattedDay}`; // Ejemplo: "2025-03-15"
    }

    // Función para renderizar las tarjetas
    function renderPosts(posts, container) {
        container.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('card');
           
            postElement.innerHTML = `
                <a class="card-link" href="content.html?id=${post.id}">
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

        // Ordenar por fechas (de más reciente a más antigua)
        posts.sort((a, b) => {
            const dateA = new Date(parseCustomDate(a.fecha));
            const dateB = new Date(parseCustomDate(b.fecha));
            return dateB - dateA; // De más reciente a más antigua
        });

        // Renderizar las tarjetas
        renderPosts(posts, container);
    });
});