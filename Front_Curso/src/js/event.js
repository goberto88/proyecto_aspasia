document.addEventListener('DOMContentLoaded', () => {
    async function fetchPosts() {
        try {
            const response = await fetch('http://localhost:1337/api/concerts');
            if (!response.ok) throw new Error('Error en la solicitud a la API');
            const data = await response.json();
            console.log('Datos de fetchPosts (concerts):', data);
            return data;
        } catch (error) {
            console.error('Error fetching concerts:', error);
            return { error };
        }
    }

    function parseDate(dateStr) {
        const [day, month, year] = dateStr.split('-');
        return `${year}-${month}-${day}`; // Convierte a YYYY-MM-DD
    }

    function renderPosts(posts, container) {
        container.innerHTML = '';
        const today = new Date().setHours(0, 0, 0, 0);
        posts.forEach(post => {
            const postDate = new Date(parseDate(post.fecha)).setHours(0, 0, 0, 0);
            if (postDate >= today) {
                const postElement = document.createElement('div');
                postElement.classList.add('card');
                postElement.dataset.fecha = post.fecha;
                postElement.innerHTML = `
                    <a class="card-link" href="${post.link}">
                        <img src="${post.poster}" alt="${post.title}" class="card-image">
                        <h4 class="title-card">${post.title}</h4>
                        <p class="date">${post.fecha}</p>
                    </a>
                `;
                container.appendChild(postElement);
            }
        });
    }

    function updateCards(container) {
        const today = new Date().setHours(0, 0, 0, 0);
        const cards = container.querySelectorAll('.card');
        cards.forEach(card => {
            const cardDateStr = card.dataset.fecha;
            const cardDate = new Date(parseDate(cardDateStr)).setHours(0, 0, 0, 0);
            if (cardDate < today) {
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

        posts.sort((a, b) => {
            const dateA = new Date(parseDate(a.fecha));
            const dateB = new Date(parseDate(b.fecha));
            return dateA - dateB; // De más cercano a más lejano
        });

        renderPosts(posts, container);
        setInterval(() => updateCards(container), 24 * 60 * 60 * 1000);
    });
});