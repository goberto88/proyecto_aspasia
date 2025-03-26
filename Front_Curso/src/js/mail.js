import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, } from "firebase/firestore";
import Swal from "sweetalert2";
import firebaseConfig from "./config.js";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
    const suscribeteBtn = document.getElementById('suscribete-btn');

    if (suscribeteBtn) {
        suscribeteBtn.addEventListener('click', async () => {
            const { value: email } = await Swal.fire({
                title: "Suscríbete a nuestro newsletter",
                imageUrl: "/img/logoFooter.png",
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
                    await addDoc(collection(db, "suscriptores"), {
                        email: email,
                        fecha: new Date().toISOString()
                    });
                    console.log("Email guardado en Firestore:", email);
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
    } else {
        console.error("No se encontró el botón con id 'suscribete-btn'");
    }
});