<template>
  <section class="home">
    <div class="divLinkContact">
      <RouterLink to="/contacto" class="linkContact">
        <button class="btnContactMovil" onclick="this.blur()">Contáctanos</button>
      </RouterLink>
    </div>

    <div class="hero">
      <h1 class="tituloGrande"><span class="textoColor">Potencia tu negocio</span> con agentes de IA personalizados</h1>
      <p class="texto">
        En <strong>DigitRise</strong>, creamos <em>agentes de inteligencia artificial</em> adaptados a las necesidades
        de tu empresa. Desde asistentes virtuales hasta soluciones de automatización, ponemos el poder de la IA al
        alcance de todos.
      </p>
      <RouterLink to="/agentes"><button class="btn" onclick="this.blur()">Explora nuestros agentes</button></RouterLink>
    </div>

    <div class="info-extra">
      <div>
        <h3 class="tituloGrande"><span class="textoColor">Proyectos</span> llevados a cabo</h3>
        <p class="texto">
          Descubre cómo hemos ayudado a empresas como la tuya a transformar su presencia digital y optimizar sus procesos
          con nuestras soluciones de IA. Cada proyecto es una historia de éxito.
        </p>
        <RouterLink to="/proyectos"><button class="btn" onclick="this.blur()">Descubre los proyectos</button></RouterLink>
      </div>

      <div>
        <h3 class="tituloGrande">Equipo de <span class="textoColor">DigitRise</span></h3>
        <p class="texto">
          Conoce al equipo detrás de <strong>DigitRise</strong>, apasionados por la tecnología y la innovación. Estamos aquí para ayudarte a
          llevar tu negocio al siguiente nivel con soluciones de IA personalizadas.
        </p>
        <RouterLink to="/equipo"><button class="btn" onclick="this.blur()">Conoce al equipo</button></RouterLink>
      </div>

      <div>
        <h3 class="tituloGrande"><span class="textoColor">Soluciones inteligentes</span>, listas para implementar</h3>
        <p class="texto">
          Elige entre una variedad de agentes IA entrenados para tareas como atención al cliente, ventas, soporte técnico
          y más. Personalízalos según tus necesidades y empieza a automatizar procesos hoy mismo.
        </p>
        <RouterLink to="/contacto"><button class="btn" onclick="this.blur()">Habla con un experto</button></RouterLink>
      </div>
    </div>
  </section>
</template>
