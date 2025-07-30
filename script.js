/*VARIABLES*/
const btnFrase = document.getElementsByClassName('btn-motivacion')[0];
const textFrase = document.getElementsByClassName('mensaje')[0];

const frasesMotivadoras = [
  "¡Tú puedes lograrlo!",
  "Cada día es una nueva oportunidad.",
  "El éxito comienza con la decisión de intentarlo.",
  "Pequeños pasos llevan a grandes metas.",
  "La constancia vence al talento.",
  "Hoy es el día para empezar.",
  "Cree en ti y llegarás lejos.",
  "El fracaso es solo una lección disfrazada.",
  "No te rindas, buen trabajo toma tiempo.",
  "Tu esfuerzo de hoy es tu éxito de mañana.",
  "Sé el cambio que quieres ver.",
  "La disciplina es el puente entre metas y logros.",
  "Lo imposible solo toma un poco más de tiempo.",
  "Si puedes soñarlo, puedes hacerlo.",
  "La motivación te impulsa, el hábito te mantiene.",
  "No esperes, crea.",
  "Cada 'no' te acerca más al 'sí'.",
  "El único límite es tu mente.",
  "Hazlo con pasión o no lo hagas.",
  "El miedo mata más sueños que el fracaso."
];

btnFrase.addEventListener('click', ()=>{
    const index = Math.floor(Math.random() * frasesMotivadoras.length);

    textFrase.innerHTML = frasesMotivadoras[index];
});