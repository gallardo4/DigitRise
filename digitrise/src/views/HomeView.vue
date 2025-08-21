<template>
  <section class="home">
    <div class="divLinkContact">
      <a href="https://calendly.com/info-digitrise/30min" target="_blank" class="linkContact">
        <button class="btnContactMovil" onclick="this.blur()">Contáctanos</button>
      </a>
    </div>

    <div class="hero">
      <h1 class="tituloGrande"><span class="textoColor">Potencia tu negocio</span> con agentes de IA personalizados</h1>
      <p class="texto">
        En <strong>DigitRise</strong>, creamos <em>agentes de inteligencia artificial</em> adaptados a las necesidades
        de tu empresa. Desde asistentes virtuales hasta soluciones de automatización, ponemos el poder de la IA al
        alcance de todos.
      </p>
      <RouterLink class="linkContact" to="/agentes"><button class="btn" onclick="this.blur()">Explora nuestros agentes</button></RouterLink>
    </div>

    <div class="info-extra">
      <div>
        <h3 class="tituloGrande"><span class="textoColor">Proyectos</span> llevados a cabo</h3>
        <p class="texto">
          Descubre cómo hemos ayudado a empresas como la tuya a transformar su presencia digital y optimizar sus procesos
          con nuestras soluciones de IA. Cada proyecto es una historia de éxito.
        </p>
        <RouterLink class="linkContact" to="/proyectos"><button class="btn" onclick="this.blur()">Descubre los proyectos</button></RouterLink>
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
        <h3 class="tituloGrande"><span class="textoColor">Soluciones inteligentes</span>, listas para implementar</h3>
        <p class="texto">
          Elige entre una variedad de agentes IA entrenados para tareas como atención al cliente, ventas, soporte técnico
          y más. Personalízalos según tus necesidades y empieza a automatizar procesos hoy mismo.
        </p>
        <a href="https://calendly.com/info-digitrise/30min" target="_blank" class="linkContact"><button class="btn" onclick="this.blur()">Habla con un experto</button></a>
      </div>
    </div>
  </section>
</template>
