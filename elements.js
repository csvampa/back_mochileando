const footer = document.getElementById('div-footer').innerHTML = `<div class="left_f footer-col ta-l ">
  <div class="footer-logo-container">
  <a href="/index.html" class="active">
  <lord-icon src="https://cdn.lordicon.com/vkweisbr.json" trigger="loop-on-hover" delay="2000"
    colors="outline:#121331,primary:#646e78,secondary:#2ca58d,tertiary:#1d4e89"
    style="width:50px;height:50px">
 </lord-icon>
</a>
    <h3 class="text-mochileando">Mochileando</h3>
  </div>
  <p class="text-presentation">Somos la empresa de viajes líder en Latinoamérica que desde hace más de 4 años apuesta por el desarrollo tecnológico para revolucionar el mundo de las experiencias. </p>
  <p class='rights-text'>© 1999-2023 Mochileando. All right reserved.</p>
</div>
<div class="center_f footer-col ta-l">
  <h3>Siguenos en nuestras redes</h3>
  <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab icons-styles fa-twitter"> Twitter</i></a>
  <a href="https://www.facebook.com/" target="_blank"><i class="fab icons-styles fa-facebook"> Facebook</i></a>
  <a href="https://www.instagram.com/" target="_blank"><i class="fab icons-styles fa-instagram"> Instagram</i></a>
</div>
<div class="rigth_f footer-col ta-l">
  <h3>Mapa del sitio</h3>
  <a class="our-site" href="index.html">Home</a>
  <a class="our-site" href="/pages/login/login.html">Login</a>
  <a class="our-site" href="/pages/contacto/contacto.html">Contáctenos</a>
  <a class="our-site" href="/pages/acerca_de_nosotros/acerca_de_nosotros.html">Acerca de nosotros</a>
</div>`

let header = document.getElementById('div-header').innerHTML = `
<div class="navbar">
          <div class="topnav" id="myTopnav">
            <a href="/index.html" class="active">
              <lord-icon
                src="https://cdn.lordicon.com/vkweisbr.json"
                trigger="loop-on-hover"
                delay="2000"
                colors="outline:#121331,primary:#646e78,secondary:#2ca58d,tertiary:#1d4e89"
                style="width: 50px; height: 50px"
              >
              </lord-icon>
            </a>
            <a href="/pages/login/login.html">Login</a>
            <a href="/pages/contacto/contacto.html">Contáctenos</a>
            <a href="/pages/acerca_de_nosotros/acerca_de_nosotros.html"
              >Acerca de nosotros</a
            >
            <a href="/pages/admin/admin.html"
              >Administración</a
            >
            <a href="javascript:void(0);" class="icon" onclick="burguerMenu()">
              <i class="fa fa-bars"></i>
            </a>
            <div class="weather-box" id="weather-container">
              <div class="weather_1" id="weather-cont1">
                <h2 id="location" class="text-weather"></h2>
                <img
                  id="animated-icon"
                  src=""
                  alt=""
                  height="auto"
                  width="50px"
                />
                <h1 id="temp-value" class="text-weather"></h1>
                <h1 id="temp-description" class="text-weather"></h1>
              </div>
            </div>
          </div>
        </div>
        <div class="Carrousel">
        </div>`;

fetch('https://iroldan.pythonanywhere.com/cards')
.then(response => response.json())
.then(data => 
  {
    const myCards1 = [];
    const myCards2 = [];
    for (let i=0; i<=2;i++){
      myCards1.push(data[i])
    }
    for (let i=3; i< data.length ;i++){
      myCards2.push(data[i])
    }
    console.log(myCards1)
    console.log(myCards2)
    function loadCards(array, id) {
      const section = document.getElementById(id);
      if (!section) {
        throw new Error(`Element with id "${id}" not found`);
      }
      section.innerHTML = '';
      const fragment = document.createDocumentFragment();
      array.forEach((card) => {
        const article = document.createElement('article');
        article.innerHTML = `
        <div class="article-wrapper">
          <figure>
            <img src=${card.urlImg} alt=${card.city}, ${card.country} />
          </figure>
          <div class="article-body">
            <h2>${card.city}, ${card.country}</h2>
            <p>
            ${card.description}
            </p>
            <a href="/pages/error_404/error_404.html" class="read-more">
              Descubra más 
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      `;
        fragment.appendChild(article);
      });
      section.appendChild(fragment);
    }
    loadCards(myCards1, 'id-section-elegidos');
    loadCards(myCards2, 'id-section-recomendaciones');
  }
  );