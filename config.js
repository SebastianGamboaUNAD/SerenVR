/* ===================== CONFIGURACIÓN DE SERENVR =====================
   Este es el único archivo que necesitas editar para cambiar contenido.
   Los archivos (audio, video, imágenes) se suben a la carpeta assets/. */

// Contactos de apoyo (se muestran en Ayuda). Puedes usar HTML sencillo.
const CONTACTO_HTML=`<p>Emergencias: <b>123</b>.<br>
Línea Nacional de Salud Mental: <b>106</b> (gratuita, atiende en todo el país).<br>
Teleorientación en salud mental del Ministerio de Salud: <b>192, opción 4</b>.<br>
Soporte de SerenVR: <b>escribe aquí tu correo</b>.</p>`;

// ICONOS del menú lateral y de las tarjetas del inicio.
// Puedes poner un emoji ("🌿") o la ruta de una imagen PNG/SVG ("assets/img/icons/respirar.png").
const ICONOS={
 inicio:"🏠",
 completa:"🎬",
 respiracion:"🫁",
 sonidos:"🎵",
 ayuda:"🎧"
};

// Música que suena (opcional) durante la respiración guiada.
const BREATH_MUSIC="assets/audio/musica.mp3";

// SONIDOS AMBIENTALES: una línea por audio. Para CAMBIAR un audio, solo cambia el nombre en f.
// Para AGREGAR uno, copia una línea completa, pégala debajo y cambia t y f (cuida la coma al final).
// SONIDOS AMBIENTALES: t = nombre, f = archivo en assets/audio
const AUDIOS=[
 {t:"Lluvia suave",f:"assets/audio/Lluvia.mp3",ico:"🌧"},
 {t:"Música relajante",f:"assets/audio/Relajante_1.mp3",ico:"🎶"},
 {t:"Música relajante",f:"assets/audio/Relajante_2.mp3",ico:"🎶"},
 {t:"Música relajante",f:"assets/audio/Memoria_distante.mp3",ico:"🎶"},
 {t:"Música relajante",f:"assets/audio/Bajo_la_lluvia.mp3",ico:"🎶"}, 
 {t:"Música relajante",f:"assets/audio/Mañana.mp3",ico:"🎶"},
 {t:"Meditación",f:"assets/audio/Meditación_1.mp3",ico:"🌊"},
 {t:"Meditación",f:"assets/audio/Meditación_2.mp3",ico:"🌊"},
 {t:"Bosque",f:"assets/audio/Naturaleza.mp3",ico:"🌲"}
 // Para agregar otro: {t:"Nombre",f:"assets/audio/archivo.mp3",img:"assets/img/foto.jpg",ico:"🍃"},
];

// EXPERIENCIA COMPLETA: video (v) en assets/videos + música (a) en assets/audio
const COMPLETA=[
 {t:"Bosque",v:"assets/videos/Naturaleza.mp4",a:"assets/audio/Naturaleza.mp3",ico:"🏔"}, 
 {t:"Amanecer nevado",v:"assets/videos/Relajante_1.mp4",a:"assets/audio/Relajante_1.mp3",ico:"🌅"},
 {t:"Bosque atardecer",v:"assets/videos/Relajante_2.mp4",a:"assets/audio/Relajante_2.mp3",ico:"🏔"},
 {t:"Meditación 1",v:"assets/videos/Meditación_1.mp4",a:"assets/audio/Meditación_1.mp3",ico:"🌲"},
 {t:"Despertar",v:"assets/videos/Mañana.mp4",a:"assets/audio/Mañana.mp3",ico:"🌅"},
 {t:"Meditación 2",v:"assets/videos/Meditación_2.mp4",a:"assets/audio/Meditación_2.mp3",ico:"🌲"},
 {t:"Noche lluviosa",v:"assets/videos/Lluvia.mp4",a:"assets/audio/Lluvia.mp3",ico:"🌲"},
 {t:"Merecido descanso",v:"assets/videos/Bajo_la_lluvia.mp4",a:"assets/audio/Bajo_la_lluvia.mp3",ico:"🌲"},
 {t:"Cielo estrellado",v:"assets/videos/Estrellas.mp4",a:"assets/audio/Estrellas.mp3",ico:"🌅"}
];

// RESPIRACIÓN: [fase, segundos, tamaño del círculo]
const TEC={
 estres:{n:"estrés",d:"Exhalar más largo que inhalar ayuda a bajar la tensión (4 segundos inhalando, 6 exhalando).",p:[["Inhala",4,1.5],["Exhala",6,1]]},
 ansiedad:{n:"ansiedad",d:"Respiración en caja: cuatro tiempos iguales para recuperar el ritmo.",p:[["Inhala",4,1.5],["Sostén",4,1.5],["Exhala",4,1],["Pausa",4,1]]},
 dormir:{n:"dificultad para dormir",d:"Técnica 4-7-8: lenta y profunda, útil antes de acostarte.",p:[["Inhala",4,1.5],["Sostén",7,1.5],["Exhala",8,1]]},
 agitado:{n:"agitación fuerte",d:"Inhalaciones cortas y exhalaciones largas y suaves, sin forzar.",p:[["Inhala",3,1.4],["Exhala",6,1]]},
 enfoque:{n:"poca concentración",d:"Ritmo parejo de 5 segundos para despejar la mente.",p:[["Inhala",5,1.5],["Exhala",5,1]]}
};

// PREGUNTAS FRECUENTES (chat de Ayuda). Para agregar una, copia una línea y cambia k y r:
//   k = palabras clave en minúsculas y SIN tildes (con que aparezca una en la pregunta, responde)
//   r = la respuesta que verá la persona
const FAQ=[
 {k:["que es","serenvr","para que sirve"],r:"SerenVR es un espacio web para relajarte: videos con música, sonidos ambientales y ejercicios de respiración guiada."},
 {k:["cuesta","gratis","precio","pagar"],r:"SerenVR es gratuito y no necesitas crear una cuenta."},
 {k:["no se oye","no suena","sin sonido","volumen","silencio"],r:"Pulsa primero un botón de reproducir: los navegadores solo activan el audio tras un toque. Revisa también el volumen de tu dispositivo y el de la página."},
 {k:["no carga","no abre","no funciona","error","no se ve"],r:"Prueba recargar la página (Ctrl+F5 en computador). Si sigue igual, revisa tu conexión a internet o prueba con otro navegador actualizado."},
 {k:["respiracion","respirar","tecnica","cual elijo"],r:"En «Respiración guiada» eliges cómo te sientes (estrés, ansiedad, dormir…) y qué tan intenso es; la técnica y la duración se ajustan. Si dudas, empieza con estrés: 4 segundos inhalando y 6 exhalando."},
 {k:["recomiend","cual sonido","que sonido","mejor sonido"],r:"Para relajarte, prueba lluvia u olas con música suave a volumen bajo. Para concentrarte, un sonido constante como lluvia. Puedes mezclar varios en «Sonidos ambientales»."},
 {k:["ansiedad","nervios","nervioso","estres","estresado","estresada"],r:"Prueba la respiración en caja (opción ansiedad) y un sonido suave como lluvia u olas. Si la ansiedad es frecuente o muy intensa, conviene hablar con un profesional de salud."},
 {k:["panico","me ahogo","taquicardia","muy agitado","muy agitada"],r:"Intenta respirar lento: inhala 3 segundos y exhala 6, sin forzar (opción «agitación fuerte»). Si sientes dolor en el pecho, falta de aire fuerte o crees que es una emergencia, llama al 123 o acude a urgencias."},
 {k:["dormir","sueno","insomnio","noche","acostarme"],r:"Elige «dificultad para dormir» en respiración (técnica 4-7-8) y activa lluvia o música suave en Sonidos ambientales con volumen bajo. Evita las pantallas brillantes justo antes de dormir."},
 {k:["triste","tristeza","deprimido","deprimida","solo","sola","llorar"],r:"Lamento que te sientas así. Un video relajante o una respiración lenta pueden acompañarte un rato, pero también ayuda hablar con alguien de confianza. Si la tristeza dura varios días, un profesional puede apoyarte; los contactos están al final de esta página."},
 {k:["concentr","estudiar","enfoque","trabajar","foco"],r:"En «Respiración guiada» elige «poca concentración» (ritmo de 5 segundos) y, al estudiar, deja un sonido constante como lluvia a volumen bajo."},
 {k:["cuanto dura","duracion","tiempo","minutos"],r:"Cada sesión de respiración dura entre 5 y 9 ciclos, según el nivel de malestar que indiques (aprox. 1 a 3 minutos). Los videos y sonidos suenan hasta que los detengas."},
 {k:["video","experiencia completa","pantalla completa"],r:"En «Experiencia completa» eliges un video y su música va incluida. Puedes ponerlo en pantalla completa y ajustar el volumen."},
 {k:["audifonos","auriculares","parlante"],r:"Con audífonos la experiencia es más envolvente, pero también funciona con el parlante del dispositivo. Mantén un volumen cómodo."},
 {k:["datos","privacidad","guarda","registro","cuenta"],r:"SerenVR no pide cuenta ni guarda tus datos en un servidor."},
 {k:["celular","movil","telefono","tablet","computador"],r:"Funciona en celular, tablet y computador con un navegador actualizado."},
 {k:["profesional","psicologo","psicologa","terapia","ayuda"],r:"SerenVR es un apoyo para tu bienestar y no reemplaza la atención profesional. Si lo necesitas, mira los contactos de apoyo al final de esta página o consulta con tu servicio de salud."}
];
const PREG=["¿Qué es SerenVR?","¿Cuánto cuesta?","No se oye el audio","¿Qué respiración elijo?","¿Qué sonido me recomiendas?","Tengo ansiedad","No puedo dormir","Quiero concentrarme"];
const CRISIS=/suicid|quitarme la vida|matarme|hacerme dano|no quiero vivir|acabar con todo/;
const CRISIS_MSG="Siento que estés pasando por esto, y me importa que estés a salvo. No tienes que cargarlo solo/a. Si estás en peligro ahora mismo, llama al 123. También puedes llamar a la Línea Nacional de Salud Mental, 106, o a la 192 opción 4, y contarle ahora a alguien de confianza que esté cerca. ¿Quieres que te acompañe con una respiración lenta mientras llega esa ayuda?";
