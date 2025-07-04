const equipos = [
  { id: 'palmeiras', nombre: 'Palmeiras', pais: 'Brasil', descripcion: 'Club brasileño con gran tradición en la Libertadores.', img: 'img/palmeiras.png' },
  { id: 'intermiami', nombre: 'Inter Miami', pais: 'Estados Unidos', descripcion: 'Equipo emergente de la MLS fundado por David Beckham.', img: 'img/intermiami.png' },
  { id: 'alahly', nombre: 'Al Ahly', pais: 'Egipto', descripcion: 'Club más laureado de África, con gran historia continental.', img: 'img/ahly.png' },
  { id: 'porto', nombre: 'FC Porto', pais: 'Portugal', descripcion: 'Potente club portugués con títulos europeos.', img: 'img/porto.png' },
  { id: 'psg', nombre: 'Paris Saint-Germain', pais: 'Francia', descripcion: 'Club francés, potencia europea.', img: 'img/psg.png' },
  { id: 'atlmadrid', nombre: 'Atlético de Madrid', pais: 'España', descripcion: 'Firme club español.', img: 'img/atlmadrid.png' },
  { id: 'botafogo', nombre: 'Botafogo', pais: 'Brasil', descripcion: 'Tradición brasileña.', img: 'img/botafogo.png' },
  { id: 'seattle', nombre: 'Seattle Sounders FC', pais: 'Estados Unidos', descripcion: 'Representante MLS de EE.UU.', img: 'img/seattle.png' },
  { id: 'bayern', nombre: 'FC Bayern München', pais: 'Alemania', descripcion: 'Dominador histórico alemán.', img: 'img/bayern.png' },
  { id: 'auckland', nombre: 'Auckland City FC', pais: 'Nueva Zelanda', descripcion: 'Potencia neozelandesa.', img: 'img/auckland.png' },
  { id: 'boca', nombre: 'CA Boca Juniors', pais: 'Argentina', descripcion: 'Histórico argentino.', img: 'img/boca.png' },
  { id: 'benfica', nombre: 'SL Benfica', pais: 'Portugal', descripcion: 'Gran club portugués.', img: 'img/benfica.png' },
  { id: 'flamengo', nombre: 'CR Flamengo', pais: 'Brasil', descripcion: 'Potencia brasileña.', img: 'img/flamengo.png' },
  { id: 'esperance', nombre: 'Espérance Sportive de Tunis', pais: 'Túnez', descripcion: 'Gran club tunecino.', img: 'img/esperance.png' },
  { id: 'chelsea', nombre: 'Chelsea FC', pais: 'Inglaterra', descripcion: 'Histórico inglés.', img: 'img/chelsea.png' },
  { id: 'lafc', nombre: 'LAFC', pais: 'Estados Unidos', descripcion: 'Club MLS de Los Ángeles.', img: 'img/lafc.png' },
  { id: 'river', nombre: 'CA River Plate', pais: 'Argentina', descripcion: 'Gigante argentino.', img: 'img/river.png' },
  { id: 'urawa', nombre: 'Urawa Red Diamonds', pais: 'Japón', descripcion: 'Club japonés con historia.', img: 'img/urawa.png' },
  { id: 'monterrey', nombre: 'CF Monterrey', pais: 'México', descripcion: 'Fuerza mexicana.', img: 'img/monterrey.png' },
  { id: 'inter', nombre: 'FC Internazionale Milano', pais: 'Italia', descripcion: 'Histórico italiano.', img: 'img/inter.png' },
  { id: 'fluminense', nombre: 'Fluminense FC', pais: 'Brasil', descripcion: 'Club brasileño tradicional.', img: 'img/fluminense.png' },
  { id: 'borussia', nombre: 'Borussia Dortmund', pais: 'Alemania', descripcion: 'Potencia alemana.', img: 'img/borussia.png' },
  { id: 'ulsan', nombre: 'Ulsan Hyundai', pais: 'Corea del Sur', descripcion: 'Club surcoreano destacado.', img: 'img/ulsan.png' },
  { id: 'mamelodi', nombre: 'Mamelodi Sundowns FC', pais: 'Sudáfrica', descripcion: 'Líder sudafricano.', img: 'img/mamelodi.png' },
  { id: 'mancity', nombre: 'Manchester City', pais: 'Inglaterra', descripcion: 'Gigante inglés.', img: 'img/mancity.png' },
  { id: 'wydad', nombre: 'Wydad AC', pais: 'Marruecos', descripcion: 'Potencia marroquí.', img: 'img/wydad.png' },
  { id: 'alain', nombre: 'Al Ain FC', pais: 'Emiratos Árabes Unidos', descripcion: 'Club de Emiratos Árabes Unidos.', img: 'img/alain.png' },
  { id: 'juve', nombre: 'Juventus FC', pais: 'Italia', descripcion: 'Tradicional club italiano.', img: 'img/juve.png' },
  { id: 'realmadrid', nombre: 'Real Madrid C. F.', pais: 'España', descripcion: 'Club histórico español.', img: 'img/realmadrid.png' },
  { id: 'alhilal', nombre: 'Al Hilal', pais: 'Arabia Saudita', descripcion: 'Gran club saudí.', img: 'img/alhilal.png' },
  { id: 'pachuca', nombre: 'CF Pachuca', pais: 'México', descripcion: 'Club mexicano con tradición.', img: 'img/pachuca.png' },
  { id: 'salzburgo', nombre: 'FC Salzburg', pais: 'Austria', descripcion: 'Club austríaco con gran desarrollo.', img: 'img/salzburgo.png' }
];
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-btn').style.display = 'block';
});

document.getElementById('install-btn').addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
      document.getElementById('install-btn').style.display = 'none';
    });
  }
});

let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');

const equiposSection = document.getElementById('equipos-section');
const buscador = document.getElementById('buscador');
const modal = document.getElementById('modal');
const cerrarModal = document.getElementById('cerrar-modal');
const detalleEquipo = document.getElementById('detalle-equipo');

function mostrarEquipos(lista) {
  equiposSection.innerHTML = '';
  lista.forEach(eq => {
    const card = document.createElement('article');
    card.className = 'team-card';
    card.innerHTML = `
      <img src="${eq.img}" alt="${eq.nombre}">
      <h3>${eq.nombre}</h3>
      <p><strong>País:</strong> ${eq.pais}</p>
      <button data-id="${eq.id}" class="fav-btn">${favoritos.includes(eq.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}</button>
      <button data-id="${eq.id}" class="detalle-btn">Ver detalles</button>
    `;
    equiposSection.appendChild(card);
  });

  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleFavorito(btn.dataset.id, btn);
    });
  });
  document.querySelectorAll('.detalle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      verDetalles(btn.dataset.id);
    });
  });
}

function toggleFavorito(id, btn) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(favId => favId !== id);
    btn.textContent = 'Añadir a favoritos';
  } else {
    favoritos.push(id);
    btn.textContent = 'Quitar de favoritos';
  }
  localStorage.setItem('favoritos', JSON.stringify(favoritos));

  if (!modal.classList.contains('oculto')) {
    const modalBtn = detalleEquipo.querySelector('button.fav-modal-btn');
    if (modalBtn && modalBtn.dataset.id === id) {
      modalBtn.textContent = favoritos.includes(id) ? 'Quitar de favoritos' : 'Añadir a favoritos';
    }
  }
}

function verDetalles(id) {
  const equipo = equipos.find(e => e.id === id);
  if (!equipo) return;

  detalleEquipo.innerHTML = `
    <h2>${equipo.nombre}</h2>
    <img src="${equipo.img}" alt="${equipo.nombre}">
    <p><strong>País:</strong> ${equipo.pais}</p>
    <p>${equipo.descripcion}</p>
    <button data-id="${equipo.id}" class="fav-modal-btn">${favoritos.includes(equipo.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}</button>
  `;

  const modalBtn = detalleEquipo.querySelector('button.fav-modal-btn');
  modalBtn.addEventListener('click', () => {
    toggleFavorito(equipo.id, modalBtn);
    const cardBtn = [...document.querySelectorAll('.fav-btn')].find(b => b.dataset.id === equipo.id);
    if (cardBtn) cardBtn.textContent = modalBtn.textContent;
  });

  modal.classList.remove('oculto');
}

cerrarModal.addEventListener('click', () => {
  modal.classList.add('oculto');
});

buscador.addEventListener('input', e => {
  const texto = e.target.value.toLowerCase();
  const filtrados = equipos.filter(eq => eq.nombre.toLowerCase().includes(texto));
  mostrarEquipos(filtrados);
});

mostrarEquipos(equipos);
