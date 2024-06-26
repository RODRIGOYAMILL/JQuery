window.view = {};
window.onload = () => {
    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    let content = document.getElementById('content');
    content.innerHTML = `
    <section id="quienSoy" class="containerInfo m-auto animated fadeIn">
            <h1 class="titlePage">Quién soy</h1>
            <div class="row stitchedHome">
                <div class="col-md-5 col-12 pt-2 pb-2 animated zoomIn">
                    <img src="img/yamill.jpeg" class="img-fluid imgstyle d-block m-auto animated fadeIn">
                </div>
                <div class="col-md-7 col-12">
                    <div class="containerText p-1 text-center animated zoomIn">
                        <p class="lead animated fadeIn">Mi nombre es Rodrigo Yamill Rodríguez Ávila, egresado del colegio N. Andrés Ibáñez
                        y actualmente estudiante de la carrera de Ingeniería en Sistemas en la UPDS. Actualmente estoy 
                        aprendiendo frameworks de Front End y Back End, me siento seguro utilizando herramientas 
                        como HTML, CSS, Python, JavaScript, SQL, Django y Bootstrap.También tengo experiencia en trabajar en equipo.
                    
                        Desde mi formación escolar, siempre he sentido una gran pasión por la tecnología y los sistemas.
                        Esta pasión me ha llevado a embarcarme en la emocionante aventura de estudiar una carrera relacionada
                        con ello.
                        En la Universidad Privada de Santa Cruz de la Sierra (UPDS), me encuentro inmerso en un ambiente de 
                        aprendizaje dinámico y en constante evolución. A través de mi carrera de Ingeniería en Sistemas, 
                        estoy adquiriendo conocimientos sólidos en áreas como programación, bases de datos, redes y seguridad informática.
                        Mi objetivo es convertirme en un profesional altamente capacitado y contribuir al desarrollo de 
                        soluciones tecnológicas innovadoras. Me apasiona explorar nuevas tendencias y tecnologías emergentes que puedan
                        mejorar la eficiencia y la calidad en diversos ámbitos.
                        Estoy emocionado por el camino que he elegido y estoy seguro de que mi dedicación y perseverancia me 
                        llevarán a alcanzar mis metas. Estoy abierto a nuevas oportunidades y desafíos que me permitan crecer
                        y aplicar mis conocimientos en el mundo real.
                        ¡Estoy entusiasmado por lo que el futuro me depara como profesional en Ingeniería en Sistemas y estoy 
                        listo para enfrentar cualquier desafío que se presente en mi camino!</p>
                    </div>

                </div>
            </div>
        </section>
    `;
}

window.view.habilidades = () => {
    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    let content = document.getElementById('content');
    content.innerHTML = `
    <section id="habilidades" class="containerInfo m-auto  animated fadeIn">
            <h1 class="titlePage">Habilidades</h1>
            <div class="stitched">
                <div class="row mt-2 mb-4">
                    <div class="col-md-4 col-12  animated zoomIn">
                        <img src="img/html5Final.png" alt="html5" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo">HTML5</p>
                    </div>
                    <div class="col-md-4 col-sm-12 animated zoomIn">
                        <img src="img/css3Final.png" alt="css3" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo">css3</p>
                    </div>
                    <div class="col-md-4 col-12 animated zoomIn">
                        <img src="img/jsFinal.png" alt="javascript" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo">JavaScript</p>
                    </div>
                </div>
                <div class="row mt-3 ">
                    <div class="col-md-4 col-12 animated zoomIn">
                        <img src="img/bootstrapFinal.png" alt="bootstrap" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo lead">Bootstrap</p>
                    </div>
                    <div class="col-md-4 col-12 animated zoomIn">
                        <img src="img/angularFinal.png" alt="angular" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo">Angular</p>
                    </div>
                    <div class="col-md-4 col-12 animated zoomIn">
                        <img src="img/githubFinal.png" alt="github" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo">Github</p>
                    </div>
                </div>

            </div>
        </section>
    `;
}

window.view.portafolio = () => {
    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    let content = document.getElementById('content');
    content.innerHTML = `
    <section id="portafolio" class="containerInfo m-auto  animated fadeIn">
            <h1 class="titlePage">Portafolio</h1>
            <div class="stitched">
                <div class="row justify-content-around">
                    <div class="col-md-3 col-sm-12 px-0 py-3 containerCard animated zoomIn">
                        <img class="card-img-top px-3 imgCard" src="img/vistaTraslab.png">
                        <div class="card-body px-0 ">
                            <h5 class="card-title titleCard">TransLab</h5>
                            <a href="https://valepm0511.github.io/TransLab/" target="_blank"><button class="btn btnStyle mb-2">Link Deploy</button></a>
                            <a href="https://github.com/valepm0511/TransLab" target="_blank"> <button class="btn btnStyle">Link Github</button></a>

                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 px-0 py-3 containerCard animated zoomIn">
                        <img class="card-img-top px-3 imgCard" src="img/vistaCesar.png">
                        <div class="card-body px-0">
                            <h5 class="card-title titleCard">Cifrado Cesar</h5>
                            <a href="https://valepm0511.github.io/Cifrado-Cesar/" target="_blank"><button class="btn btnStyle mb-2">Link Deploy</button></a>
                            <a href="https://github.com/valepm0511/Cifrado-Cesar" target="_blank"> <button class="btn btnStyle">Link Github</button></a>

                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 px-0 py-3 containerCard animated zoomIn">
                        <img class="card-img-top px-3 imgCard" src="img/vistaFoodMap.png">
                        <div class="card-body px-0 ">
                            <h5 class="card-title titleCard">FoodMap</h5>
                            <a href="https://valepm0511.github.io/FoodMap/" target="_blank"><button class="btn btnStyle mb-2">Link Deploy</button></a>
                            <a href="https://github.com/valepm0511/FoodMap" target="_blank"><button class="btn btnStyle">Link Github</button></a>

                        </div>
                    </div>

                </div>
                <div class="row justify-content-center mt-1">
                    <div class="col-md-5 col-12 justify-content-center mt-5 linkProyect animated zoomIn">
                        <a href="https://github.com/RODRIGOYAMILL" target="_blank"> <button class="btn btnProyect linkRepo">Mas proyectos aqui!</button></a>
                    </div>
                </div>
        </section>
    `;
}

window.view.contacto = () => {
    $(".navbar-nav>li>a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });


    let content = document.getElementById('content');
    content.innerHTML = `<section id="contacto" class="containerInfo m-auto mb-5  animated fadeIn">
    <h1 class="titlePage">Contacto</h1>
    <div class="row">
  <div class="col-md-6">
    <div class="stitched">
      <div class="animated zoomIn">
        <h5 class="text-center titleContact">Si quieres saber más de mí, sígueme en Linkedin:</h5>
        <div class="iconRedSocial">
          <a href="https://www.linkedin.com/in/valeria-pe%C3%B1aloza-martinez/" target="_blank"><i class="fab fa-linkedin styleIcon"></i></a>
        </div>
        <h5 class="text-center titleContact">Mira mi repositorio en Github:</h5>
        <div class="iconRedSocial">
          <a href="https://github.com/RODRIGOYAMILL" target="_blank"><i class="fab fa-github styleIcon"></i></a>
        </div>
        <h5 class="text-center titleContact">Envíame un correo a:</h5>
        <div class="iconRedSocial">
          <p class="text-center styleLinkCorreo">fernandosanchezavila111@gmail.com</p>
        </div>
        <h5 class="text-center titleContact">O descarga mi currículum:</h5>
        <div class="col-md-4 col-12 mt-4 linkProyect m-auto">
          <a href="https://drive.google.com/file/d/1WbT83JeddvCzBDEmDVFeWyccJNu7PAVH/view?usp=drive_link" target="_blank" class="btn btnStyle">Mi currículum</a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="stitched" style="max-height: 400px; overflow: auto;">
      <form action="#" method="post" class="register-form">
        <div class="form-group">
          <label for="name" class="titleContact">Nombre completo:</label>
          <input id="name" type="text" class="form-control form-control-lg" placeholder="Ingrese su nombre completo" required>
        </div>
        <div class="form-group">
          <label for="email" class="titleContact">Correo electrónico:</label>
          <input id="email" type="email" class="form-control form-control-lg" placeholder="Ingrese su correo electrónico" required>
        </div>
        <div class="form-group">
          <label for="phone" class="titleContact">Número de teléfono:</label>
          <input id="phone" type="text" class="form-control form-control-lg" placeholder="Ingrese su número de teléfono" required>
        </div>
        <div class="form-group">
          <label for="message" class="titleContact">Mensaje:</label>
          <textarea id="message" rows="5" class="form-control form-control-lg" placeholder="Ingrese su mensaje" required></textarea>
        </div>
        <div class="form-group">
  <button type="submit" class="btn btn-primary btn-lg btn-block">
    <a href="mailto:fernandosanchezavila111@gmail.com" style="color: white; text-decoration: none;">Enviar Mensaje</a>
  </button>
</div>
      </form>
    </div>
  </div>
</div>
</section>`;
}