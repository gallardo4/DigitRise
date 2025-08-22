<script setup lang="ts">
import Volver from '../components/Volver.vue';
</script>

<template>
    <header class="header">
        <div class="containerHeader">
            <div>
                <Volver class="btnVolver" />
            </div>
            <RouterLink to="/">
                <img src="/logoGrandeHeader.svg" alt="DigitRise Logo" class="logoHeader" />
            </RouterLink>
        </div>
    </header>

    <div class="containerPolitica">
        <div>
            <Volver class="btnVolverMovil" />
        </div>

        <header>
            <h1 class="tituloGrande"><span class="textoColor">Política de Privacidad</span></h1>
            <p class="textoPolitica">Última actualización: 21 de agosto de 2025</p>
            <p class="textoPolitica">
                En DigitRise nos tomamos muy en serio tu privacidad. En esta página te contamos
                qué datos recogemos, para qué los usamos, durante cuánto tiempo y qué opciones tienes
                para controlarlos cuando visitas
                <a href="https://digitrise.net" target="_blank" class="textoColor">https://digitrise.net</a>
                o te comunicas con nosotros.
            </p>
            <div class="card">
                <p class="textoPolitica"><span class="textoColor">Responsable del tratamiento:</span> 
                    DigitRise (España)
                    <a href="mailto:info.digitrise@gmail.com" class="textoColor">info.digitrise@gmail.com</a>
                </p>
            </div>
        </header>

        <div>
            <h2 class="tituloPolitica">1. Datos que recopilamos</h2>
            <p class="textoPolitica">Podemos recoger datos personales si completas un formulario o nos contactas:</p>
            <ul>
                <li class="textoPolitica">Nombre y apellidos</li>
                <li class="textoPolitica">Correo electrónico</li>
                <li class="textoPolitica">Teléfono</li>
                <li class="textoPolitica">Posición y nombre de la empresa</li>
                <li class="textoPolitica">Tamaño, ingresos estimados y presupuesto del proyecto</li>
                <li class="textoPolitica">Servicios de interés y mensaje/consulta</li>
            </ul>
            <p class="textoPolitica">También podemos recoger datos no identificables automáticamente para analítica y seguridad:</p>
            <ul>
                <li class="textoPolitica">Dirección IP, tipo de dispositivo y navegador</li>
                <li class="textoPolitica">Páginas visitadas y tiempos de navegación</li>
            </ul>
        </div>

        <div>
            <h2 class="tituloPolitica">2. Para qué usamos tus datos</h2>
            <ul>
                <li class="textoPolitica">Responder a tus consultas y enviarte la información solicitada.</li>
                <li class="textoPolitica">Preparar propuestas y gestionar la prestación de servicios.</li>
                <li class="textoPolitica">Mejorar nuestro sitio y la calidad del servicio.</li>
                <li class="textoPolitica">Enviar comunicaciones informativas o comerciales, solo si has dado tu consentimiento.</li>
            </ul>
        </div>

        <div>
            <h2 class="tituloPolitica">3. Base legal</h2>
            <ul>
                <li class="textoPolitica"><span class="textoColor">Consentimiento</span>: cuando nos proporcionas datos a través de formularios.</li>
                <li class="textoPolitica"><span class="textoColor">Interés legítimo</span>: mantener la seguridad del sitio y mejorar servicios.</li>
                <li class="textoPolitica"><span class="textoColor">Ejecución de contrato</span>: si contratas nuestros servicios.</li>
            </ul>
        </div>

        <div>
            <h2 class="tituloPolitica">4. Con quién compartimos tus datos</h2>
            <p class="textoPolitica">No vendemos ni alquilamos tus datos. Podremos compartirlos únicamente con:</p>
            <ul>
                <li class="textoPolitica"><span class="textoColor">Proveedores de servicios</span> que nos ayudan a operar la web y prestar el servicio.</li>
                <li class="textoPolitica"><span class="textoColor">Autoridades</span> cuando exista obligación legal.</li>
                <li class="textoPolitica"><span class="textoColor">Colaboradores</span> involucrados en el servicio que nos solicites.</li>
            </ul>
        </div>

        <div>
            <h2 class="tituloPolitica">5. Plazos de conservación</h2>
            <p class="textoColor">Conservaremos tus datos el tiempo necesario para los fines indicados o el exigido por ley.</p>
        </div>

        <div>
            <h2 class="tituloPolitica">6. Seguridad</h2>
            <p class="textoPolitica">Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración.</p>
        </div>

        <div>
            <h2 class="tituloPolitica">7. Tus derechos</h2>
            <p class="textoPolitica">Puedes ejercer tus derechos de acuerdo con el RGPD/LOPDGDD:</p>
            <ul>
                <li class="textoPolitica"><span class="textoColor">Acceso</span> a los datos que tenemos sobre ti.</li>
                <li class="textoPolitica"><span class="textoColor">Rectificación</span> de datos inexactos.</li>
                <li class="textoPolitica"><span class="textoColor">Supresión</span> (“derecho al olvido”).</li>
                <li class="textoPolitica"><span class="textoColor">Oposición</span> y <span class="textoColor">limitación</span> del tratamiento.</li>
                <li class="textoPolitica"><span class="textoColor">Portabilidad</span> de tus datos.</li>
                <li class="textoPolitica"><span class="textoColor">Retirada del consentimiento</span>.</li>
            </ul>
            <p class="textoPolitica">Para ejercerlos, escríbenos a <a href="mailto:info.digitrise@gmail.com" class="textoColor">info.digitrise@gmail.com</a>.
            También puedes reclamar ante la AEPD (España).</p>
        </div>

        <div>
            <h2 class="tituloPolitica">8. Transferencias internacionales</h2>
            <p class="textoPolitica">Si trabajamos con proveedores fuera del EEE, garantizamos que existan medidas adecuadas
            (cláusulas contractuales tipo, etc.) para proteger tus datos.</p>
        </div>

        <div>
            <h2 class="tituloPolitica">9. Cookies y analítica</h2>
            <p class="textoPolitica">Podemos usar cookies o tecnologías similares para recordar preferencias y analizar el uso del sitio.
            Si usamos cookies no técnicas, pediremos tu consentimiento mediante un banner.</p>
        </div>

        <div>
            <h2 class="tituloPolitica">10. Cambios en esta política</h2>
            <p class="textoPolitica">Publicaremos en esta página cualquier cambio en la política de privacidad.</p>
        </div>

        <div>
            <h2 class="tituloPolitica">Contacto</h2>
            <p class="textoPolitica">Si tienes dudas, contáctanos en:</p>
            <p class="textoPolitica">
                📧 <a href="mailto:info.digitrise@gmail.com" class="textoColor">info.digitrise@gmail.com</a><br />
            </p>
        </div>
    </div>

    <footer class="footer">
        <div class="rights">
            <p class="textoRights">&copy; {{ new Date().getFullYear() }} DigitRise - Todos los derechos reservados.</p>
        </div>
    </footer>
</template>