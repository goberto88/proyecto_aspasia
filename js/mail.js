// Inicializar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBO-DC8LlWNHRCEqQbqDK9Cb_zXwkec75I",
    authDomain: "sonidos-del-odio.firebaseapp.com",
    projectId: "sonidos-del-odio",
    storageBucket: "sonidos-del-odio.firebasestorage.app",
    messagingSenderId: "542182226661",
    appId: "1:542182226661:web:0fac3aef867aafe67cf20c",
    measurementId: "G-D8NZX0FFZ7"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

document.addEventListener('DOMContentLoaded', () => {
    const suscribeteBtn = document.getElementById('suscribete-btn');

    suscribeteBtn.addEventListener('click', async () => {
        const { value: email } = await Swal.fire({
            title: "Suscríbete a nuestro newsletter",
            imageUrl: "./img/logoSection1.png",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "Custom image",
            input: "email",
            inputPlaceholder: "Escribe tu correo electrónico...",
            customClass: {
                confirmButton: 'btn-confirm',
                input: 'input-custom',
                popup: 'popup-custom',
                title: 'title-custom'
            },
            validationMessage: "Por favor, ingresa un correo electrónico válido",
            preConfirm: (email) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email || !emailRegex.test(email)) {
                    Swal.showValidationMessage("Por favor, ingresa un correo electrónico válido");
                }
                return email;
            }
        });

        if (email) {
            try {
                // Guardar el email en Firestore usando la API global
                await db.collection("suscriptores").add({
                    email: email,
                    fecha: new Date().toISOString()
                });
                console.log("Email guardado en Firestore:", email);

                // Mostrar mensaje de éxito con SweetAlert2
                Swal.fire({
                    title: `Gracias: ${email}`,
                    text: "Tu suscripción ha sido registrada con éxito.",
                    icon: "success",
                    customClass: {
                        confirmButton: 'btn-confirm',
                        popup: 'popup-custom',
                        title: 'title-custom'
                    }
                });
            } catch (error) {
                Swal.fire({
                    title: "Error",
                    text: "No se pudo procesar tu suscripción",
                    icon: "error",
                    customClass: {
                        confirmButton: 'btn-confirm',
                        popup: 'popup-custom',
                        title: 'title-custom'
                    }
                });
                console.error("Error detallado:", error);
            }
        } else {
            console.log("No se proporcionó un email válido");
        }
    });
});