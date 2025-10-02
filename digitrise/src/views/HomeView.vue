<template>
  <section class="home">
    <div class="divLinkContact">
      <a href="https://calendly.com/info-digitrise/30min" target="_blank" class="linkContact">
        <button class="btnContactMovil" onclick="this.blur()">Contáctanos</button>
      </a>
    </div>

    <div class="hero">
      <h1 class="tituloGrande"><span class="textoColor">Transforma tus procesos</span> y haz crecer tu negocio</h1>
      <p class="texto">
        En <strong>DigitRise</strong>, analizamos los retos de tu empresa y diseñamos soluciones de automatización 
        que <strong>eliminan tareas repetitivas</strong>, <strong>reducen costes</strong> y <strong>mejoran la experiencia</strong> de tus clientes. 
        Ponemos la inteligencia artificial al servicio de lo que realmente impulsa tu negocio.
      </p>
      <RouterLink class="linkContact" to="/agentes">
        <button class="btn" onclick="this.blur()">Descubre cómo</button>
      </RouterLink>
    </div>

    <div class="info-extra">
      <div>
        <h3 class="tituloGrande">Descubre nuestro <span class="textoColor">método</span></h3>
        <p class="texto">
          Te acompañamos desde la <strong>identificación de problemas</strong> hasta la 
          <strong>implementación de soluciones</strong> y un <strong>soporte continuo</strong>. 
          Nuestro enfoque garantiza que cada automatización se integre de forma efectiva en tus procesos 
          y aporte resultados reales a tu negocio.
        </p>
        <RouterLink class="linkContact" to="/proceso">
          <button class="btn" onclick="this.blur()">Explora el proceso</button>
        </RouterLink>
      </div>

      <div>
        <h3 class="tituloGrande">Equipo de Digit<span class="textoColor">Rise</span></h3>
        <p class="texto">
          Conoce al equipo detrás de <strong>DigitRise</strong>, apasionados por la tecnología y la innovación. Estamos aquí para ayudarte a
          llevar tu negocio al siguiente nivel con soluciones de IA personalizadas.
        </p>
        <RouterLink class="linkContact" to="/equipo"><button class="btn" onclick="this.blur()">Conoce al equipo</button></RouterLink>
      </div>

      <div>
        <h3 class="tituloGrande"><span class="textoColor">Optimiza tus procesos</span>, resuelve lo que frena tu negocio</h3>
        <p class="texto">
          <strong>Detectamos</strong> y <strong>automatizamos</strong> las <strong>tareas repetitivas</strong> que hacen perder <strong>tiempo</strong> y <strong>dinero</strong> a tu negocio. 
          Desde la gestión de llamadas y reservas hasta la atención al cliente, te ayudamos a transformar 
          procesos en soluciones inteligentes que liberan a tu equipo para enfocarse en lo que realmente importa.
        </p>
        <a href="https://calendly.com/info-digitrise/30min" target="_blank" class="linkContact">
          <button class="btn" onclick="this.blur()">Habla con un experto</button>
        </a>
      </div>
    </div>
  </section>
</template>
