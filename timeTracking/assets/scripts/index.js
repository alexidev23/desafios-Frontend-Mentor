let jsonData

async function cargarDatos() {
  try {
    const response = await fetch('./assets/data/data.json');
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
}

const btnDaily = document.getElementById('daily')
const btnWeek = document.getElementById('week')
const btnMonth = document.getElementById('month')

btnDaily.addEventListener('click', () =>{
  mostrarInformacion('daily')
  btnActive('daily')
})

btnWeek.addEventListener('click', () =>{
  mostrarInformacion('weekly')
  btnActive('weekly')
})

btnMonth.addEventListener('click', () =>{
  mostrarInformacion('monthly')
  btnActive('monthly')
})

// Función para mostrar la información según el intervalo seleccionado
async function mostrarInformacion(intervalo) {
  // Obtener los datos mediante fetch
  const actividades = await cargarDatos();

  // Actualizar la información para cada actividad
  actividades.forEach(actividad => {
    const titulo = actividad.title.toLowerCase();
    const valorActual = actividad.timeframes[intervalo].current;
    const valorAnterior = actividad.timeframes[intervalo].previous;

    // Obtener los elementos específicos de la tarjeta
    const hoursElement = document.getElementById(`${titulo}-hours`);
    const subtitleElement = document.getElementById(`${titulo}-subtitle`);

    // Verificar si los elementos existen antes de actualizar su contenido
    if (hoursElement && subtitleElement) {
      // Actualizar el contenido de los elementos
      hoursElement.textContent = `${valorActual}hrs`;
      subtitleElement.textContent = `Previous - ${valorAnterior}hrs`;
    }
  });
}

const btnActive = (element) => {
  if (element === 'daily') {
    btnDaily.style.color='#fff'
    btnWeek.style.color='var(--Pale-Blue)'
    btnMonth.style.color='var(--Pale-Blue)'
  } else if (element === 'weekly') {
    btnWeek.style.color='#fff'
    btnDaily.style.color='var(--Pale-Blue)'
    btnMonth.style.color='var(--Pale-Blue)'
  } else if (element === 'monthly') {
    btnMonth.style.color='#fff'
    btnWeek.style.color='var(--Pale-Blue)'
    btnDaily.style.color='var(--Pale-Blue)'
  }
}

// Cargar los datos al cargar la página (opcional)
window.onload = () => {
  mostrarInformacion('daily')
  btnActive('daily')
};
