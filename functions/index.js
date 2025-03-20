const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "goberto88@gmail.com",
    pass: "axob rpkd dpnt nvus" 
  }
});

exports.enviarCorreoSuscripcion = onDocumentCreated(
  "suscriptores/{docId}",
  async (event) => {
    const snap = event.data; // El snapshot del documento creado
    const email = snap.data().email;

    const mailOptions = {
      from: "goberto88@gmail.com",
      to: email,
      subject: "¡Bienvenido a Sonidos del Odio!",
      text: "Hola, gracias por suscribirte a nuestro newsletter. En Sonidos del Odio encontrarás información sobre música extrema desde una visión amateur, pero llena de sentimiento. Este es un espacio dedicado al metal y sus distintos subgéneros.",
      html: `<div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
          <h1 style="color: #000; font-size: 24px; margin-bottom: 20px;">¡Gracias por suscribirte!</h1>
          <p style="color: #333; font-size: 16px; line-height: 1.5; max-width: 600px; margin: 0 auto;">
            En Sonidos del Odio encontrarás información sobre música extrema desde una visión amateur, pero llena de sentimiento. Este es un espacio dedicado al metal y sus distintos subgéneros.
          </p>
          <img style="width: 8rem; padding-top: 5px" src="https://firebasestorage.googleapis.com/v0/b/sonidos-del-odio.firebasestorage.app/o/img%2FlogoSection.png?alt=media&token=4303e628-9ef5-4720-a82a-6b75f1b3dd17" alt="Imagen sonido del odio" class="imagen-1">
        </div>`
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Correo enviado a:", email);
    } catch (error) {
      console.error("Error al enviar correo:", error);
    }
  }
);