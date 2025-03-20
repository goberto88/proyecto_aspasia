document.addEventListener('DOMContentLoaded', () => {
    async function fetchPosts() {
        try {
            const response = await fetch('http://localhost:1337/api/concerts');
            if (!response.ok) throw new Error('Error en la solicitud a la API');
            const data = await response.json();
            console.log('Datos de fetchPosts:', data);
            return data;
        } catch (error) {
            console.error('Error fetching posts:', error);
            return { error };
        }
    }

    // Función para convertir DD-MM-YYYY a YYYY-MM-DD
    function parseDate(dateStr) {
        const [day, month, year] = dateStr.split('-');
        return `${year}-${month}-${day}`; // Convierte a YYYY-MM-DD
    }

    // Función para renderizar las tarjetas
    function renderPosts(posts, container) {
        container.innerHTML = ''; // Limpiar el contenedor antes de renderizar
        const today = new Date().setHours(0, 0, 0, 0); // Fecha actual a 00:00:00

        posts.forEach(post => {
            const postDate = new Date(parseDate(post.fecha)).setHours(0, 0, 0, 0); // Fecha del post a 00:00:00
            if (postDate >= today) { // Mostrar solo eventos futuros
                const postElement = document.createElement('div');
                postElement.classList.add('card');
                postElement.dataset.fecha = post.fecha; // Guardar la fecha en el elemento para referencia
                
                postElement.innerHTML = `
                    <a class="card-link" href="${post.link}">
                        <img src="${post.poster}" alt="${post.titulo}" class="card-image">
                        <h4 class="title-card">${post.title}</h4>
                        <p class="date">${post.fecha}</p>
                    </a>
                `;
                container.appendChild(postElement);
            }
        });
    }

    // Función para actualizar las tarjetas y eliminar las pasadas
    function updateCards(container) {
        const today = new Date().setHours(0, 0, 0, 0); // Fecha actual a 00:00:00
        const cards = container.querySelectorAll('.card');

        cards.forEach(card => {
            const cardDateStr = card.dataset.fecha; // Obtener la fecha del dataset
            const cardDate = new Date(parseDate(cardDateStr)).setHours(0, 0, 0, 0);
            if (cardDate < today) { // Si la fecha ya pasó, eliminar la tarjeta
                card.remove();
            }
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

        // Ordenar por fechas (más cercano primero)
        posts.sort((a, b) => {
            const dateA = new Date(parseDate(a.fecha));
            const dateB = new Date(parseDate(b.fecha));
            return dateA - dateB;
        });

        // Renderizar las tarjetas inicialmente
        renderPosts(posts, container);

        // Actualizar las tarjetas cada cierto tiempo (por ejemplo, cada 24 horas)
        setInterval(() => {
            updateCards(container);
        }, 24 * 60 * 60 * 1000); // 24 horas en milisegundos
    });
});