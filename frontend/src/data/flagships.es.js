// Spanish translations of the signature case studies (mirrors flagships.js).

export const FLAGSHIPS_ES = [
  {
    slug: "fundacion-santa-fe",
    number: "01",
    title: "Fundación Santa Fe de Bogotá",
    client: "Fundación Santa Fe de Bogotá",
    industry: "Salud",
    role: "UX/UI Project Lead — Diseñador de Producto Digital",
    platform: "Web, Móvil & Sistema de Diseño",
    palette: { bg: "#0C3B45", accent: "#35B6A6", ink: "#EAF4F2", soft: "#124B57" },
    variant: "ecosystem",
    tagline: "Diseñando consistencia en un ecosistema de salud complejo.",
    challenge:
      "Los pacientes necesitaban gestionar citas, solicitudes médicas e imágenes diagnósticas desde el celular — incluyendo la búsqueda de médicos por especialidad y la misma gestión para su núcleo familiar.",
    approach:
      "Liderazgo del equipo de diseño usando metodologías UX — entrevistas, actividades de Design Thinking, prototipado y testeo constante — con una estrategia construida sobre Design Sprint y Design Thinking, apoyada en un sistema de diseño para la consistencia entre productos.",
    result:
      "Una app de pacientes que cubre citas, pagos, búsqueda de médicos y gestión familiar, complementada con una vista web de consulta de historia clínica. (Resultado cualitativo — narrativa de la fuente en Figma.)",
    snapshot: [
      { label: "Rol", value: "UX/UI Project Lead" },
      { label: "Equipo", value: "Equipo de producto multidisciplinario — diseño, ingeniería, negocio" },
      { label: "Contexto", value: "Ecosistema de productos digitales del grupo hospitalario" },
      { label: "Plataforma", value: "Experiencias web, aplicaciones móviles, flujos de autoservicio" },
      { label: "Herramientas", value: "Figma, UXCam, Hotjar, Maze, Jira" },
      { label: "Métodos", value: "UX Research, Pruebas de Usabilidad, Arquitectura de Información, Sistemas de Diseño, Analítica UX" },
      { label: "Restricciones", value: "Contexto de salud de alta confianza — claridad y prevención de errores por encima de la novedad" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Contexto & Problema",
        title: "Un ecosistema de salud que superó a sus interfaces",
        body: [
          "La Fundación Santa Fe de Bogotá opera uno de los servicios de salud más importantes de Colombia. Su presencia digital abarcaba experiencias web, aplicaciones móviles y flujos de autoservicio para pacientes — cada uno construido en momentos distintos por necesidades distintas.",
          "Las personas afectadas eran pacientes intentando completar tareas sensibles — encontrar información, gestionar servicios, entender los siguientes pasos — a menudo bajo estrés. Internamente, cada equipo de producto resolvía problemas similares de forma distinta, lo que hacía la experiencia inconsistente y costosa de evolucionar.",
        ],
        statement:
          "En salud, una interfaz poco clara no es un inconveniente — es una barrera entre una persona y la atención que necesita.",
      },
      {
        type: "steps",
        id: "discovery",
        label: "Descubrimiento",
        title: "Mapear el ecosistema antes de tocar una pantalla",
        intro: "La fase de descubrimiento alineó negocio, diseño y tecnología alrededor de una imagen compartida del estado actual.",
        steps: [
          { name: "Kickoff & Alineación", detail: "Sesiones con stakeholders para acordar objetivos, alcance y cómo debería verse el éxito para los pacientes y para la organización." },
          { name: "Mapeo del Ecosistema", detail: "Inventario de puntos de contacto digitales — web, móvil, autoservicio — y cómo los pacientes realmente se movían entre ellos." },
          { name: "Inventario de Fricciones", detail: "Recopilación de fricciones recurrentes de las experiencias existentes y del feedback de soporte en una lista compartida y priorizada." },
          { name: "Preguntas de Investigación", detail: "Definimos lo que necesitábamos aprender: dónde dudan los pacientes, dónde abandonan y por qué." },
          { name: "Áreas de Oportunidad", detail: "Hallazgos agrupados en temas — claridad del autoservicio, consistencia de navegación, patrones reutilizables." },
        ],
      },
      {
        type: "columns",
        id: "research",
        label: "Investigación",
        title: "Evidencia del comportamiento real, no suposiciones",
        columns: [
          {
            heading: "Pruebas de Usabilidad — Maze",
            body: "Las pruebas remotas sobre tareas clave de autoservicio mostraron dónde los pacientes esperaban la siguiente acción — y dónde la interfaz enviaba otra señal. Hallazgo cualitativo: los usuarios dudaban en pasos donde la acción principal no era visualmente dominante.",
          },
          {
            heading: "Analítica de Comportamiento — UXCam & Hotjar",
            body: "Las grabaciones de sesión y los mapas de calor revelaron relectura y retrocesos repetidos en pantallas densas — señal de que la jerarquía, no el volumen de contenido, era el problema central. (Observación cualitativa.)",
          },
          {
            heading: "Síntesis con el Equipo",
            body: "Los hallazgos se compartieron con negocio e ingeniería en sesiones de trabajo, de modo que la priorización fue una decisión conjunta y no un handoff de diseño.",
          },
        ],
      },
      {
        type: "insights",
        id: "synthesis",
        label: "Síntesis",
        title: "De observaciones a principios de diseño",
        items: [
          {
            observation: "Los pacientes dudaban cuando la siguiente acción competía con contenido secundario.",
            insight: "En contextos de alto estrés, las personas buscan un camino claro — las opciones se leen como obstáculos.",
            opportunity: "Hacer la acción principal inconfundible en cada paso de los flujos de autoservicio.",
            principle: "Una pantalla, una decisión.",
          },
          {
            observation: "Tareas similares se veían y comportaban diferente entre productos.",
            insight: "La inconsistencia obligaba a los usuarios a reaprender patrones que ya dominaban en otras partes del ecosistema.",
            opportunity: "Una librería compartida de componentes y patrones para web y móvil.",
            principle: "Diseña el sistema, no la pantalla.",
          },
          {
            observation: "Los equipos reconstruían UI similar una y otra vez.",
            insight: "Sin fundamentos compartidos, cada nueva funcionalidad pagaba de nuevo el mismo costo de diseño y desarrollo.",
            opportunity: "Tokens, componentes y documentación reutilizables por cualquier equipo de producto.",
            principle: "La reutilización es una funcionalidad.",
          },
        ],
      },
      {
        type: "steps",
        id: "architecture",
        label: "Arquitectura de Información",
        title: "Reorganizar alrededor de las tareas del paciente",
        intro: "La estructura pasó de la lógica organizacional interna a las tareas que los pacientes realmente vienen a completar.",
        steps: [
          { name: "Antes", detail: "La navegación y los flujos reflejaban estructuras internas de servicio — claras para la organización, ajenas a los pacientes." },
          { name: "Decisión", detail: "Reagrupar contenido y acciones de autoservicio alrededor de las intenciones del paciente, validado contra los hallazgos de investigación. (Decisión de diseño.)" },
          { name: "Después", detail: "Recorridos orientados a tareas con caminos más cortos hacia las acciones de autoservicio más frecuentes." },
        ],
      },
      {
        type: "steps",
        id: "wireframes",
        label: "Wireframes",
        title: "De la estructura a flujos testeables",
        steps: [
          { name: "Boceto", detail: "Exploraciones de bajo compromiso de los flujos de autoservicio — muchas direcciones, descarte rápido." },
          { name: "Baja fidelidad", detail: "Estructura y jerarquía validadas con el equipo antes de cualquier diseño visual." },
          { name: "Media fidelidad", detail: "Contenido real y estados realistas introducidos; casos límite identificados temprano con ingeniería." },
          { name: "Alta fidelidad", detail: "Pantallas guiadas por el sistema de diseño, listas para prototipado y pruebas de usabilidad." },
        ],
      },
      {
        type: "text",
        id: "interaction",
        label: "Diseño de Interacción",
        title: "Diseñar los estados que nadie ve en un mockup",
        body: [
          "Más allá del camino feliz: los estados de carga, error, vacío y recuperación se diseñaron explícitamente — crítico en flujos donde una acción fallida puede significar una cita perdida o una visita repetida.",
          "El comportamiento responsive se definió como parte del sistema, de modo que los patrones se adaptan con elegancia desde vistas de gestión en escritorio hasta el autoservicio móvil.",
        ],
      },
      {
        type: "text",
        id: "design-system",
        label: "Sistema de Diseño",
        title: "Por qué el sistema llegó antes que las pantallas",
        body: [
          "Color, tipografía, espaciado, botones, formularios, tarjetas y navegación se definieron como tokens y componentes con estados documentados — para que cualquier equipo pudiera ensamblar experiencias consistentes sin rediseñar los fundamentos.",
          "El sistema se estructuró alrededor de la realidad del ecosistema: múltiples productos, múltiples equipos, un solo paciente. Por eso las reglas de consistencia y la guía de uso importaron tanto como los componentes mismos.",
        ],
        images: ["/images/projects/design-system-colors.jpg", "/images/projects/design-system-typography.jpg"],
      },
      {
        type: "loop",
        id: "validation",
        label: "Validación & Iteración",
        title: "Un ciclo, no un lanzamiento",
        steps: [
          { name: "Hipótesis", detail: "Acciones primarias más claras y flujos orientados a tareas reducirían la duda en las tareas de autoservicio." },
          { name: "Prueba", detail: "Pruebas de usabilidad con Maze sobre prototipos; monitoreo con UXCam y Hotjar en experiencias en vivo." },
          { name: "Observación", detail: "Observación de validación: la duda disminuyó donde se simplificó la jerarquía; las pantallas densas seguían provocando retrocesos." },
          { name: "Decisión", detail: "Dividir pantallas sobrecargadas en pasos enfocados; fortalecer las acciones primarias." },
          { name: "Iteración", detail: "Versiones informadas por evidencia reemplazaron debates de opinión — la UI final es consecuencia de este ciclo." },
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impacto",
        title: "Qué cambió",
        body: [
          "Resultados cualitativos: mayor claridad en los recorridos de autoservicio, más consistencia en el ecosistema de producto, componentes reutilizables que redujeron esfuerzo repetido de diseño y desarrollo, y una alineación más fuerte entre negocio, diseño y tecnología.",
          "No se afirman resultados numéricos — se establecieron marcos de medición, pero las cifras documentadas no se reproducen en este portafolio.",
        ],
      },
    ],
    contribution: {
      mine: [
        "Discovery y alineación con stakeholders",
        "Planeación de investigación UX y pruebas de usabilidad (Maze, UXCam, Hotjar)",
        "Arquitectura de información y flujos de usuario",
        "Diseño de interacción y wireframing",
        "Diseño UI y prototipado",
        "Definición y documentación del sistema de diseño",
        "Liderazgo de diseño y apoyo a la entrega",
      ],
      team: [
        "Implementación de ingeniería y arquitectura técnica",
        "Requerimientos de negocio y priorización organizacional",
        "Contenido e insumo clínico experto",
      ],
    },
    learnings: {
      learned:
        "Un sistema de diseño tiene éxito cuando es adoptado, no cuando está documentado — involucrar a los ingenieros en su definición importó más que el inventario de componentes.",
      differently:
        "Introducir la instrumentación de analítica más temprano, para capturar el comportamiento base antes de tomar decisiones de rediseño.",
      next:
        "Explorar la personalización de los recorridos de autoservicio según el contexto del paciente, equilibrada cuidadosamente con privacidad y confianza.",
    },
  },
  {
    slug: "telefonica-movistar",
    number: "02",
    title: "Telefónica / Movistar",
    client: "Telefónica / Movistar",
    industry: "Telecomunicaciones",
    role: "Diseñador de Producto Digital — Gestión Técnica de Proyectos",
    platform: "App móvil (técnicos de campo) & Sistema de Diseño",
    palette: { bg: "#032F5E", accent: "#019DF4", ink: "#E9F4FE", soft: "#0A4178" },
    variant: "ops",
    tagline: "UX operacional para las personas que conectan los hogares.",
    challenge:
      "Los técnicos que instalan internet y televisión en los hogares necesitaban una aplicación móvil interna que reflejara con exactitud cómo fue la instalación y verificara que todo quede en orden dentro del contrato.",
    approach:
      "Diseñar flujos que verifican la viabilidad y estabilidad de Banda Ancha, Televisión y Voz IP — pruebas de cambio de HGU, registros de firmware, verificación de WiFi y servicios — lo más ágiles posible, porque el tiempo del técnico en el hogar del cliente es corto.",
    result:
      "Una app móvil de validación para instalaciones de campo — pruebas de cambio de HGU, verificación de servicio y WiFi — diseñada para rapidez y claridad en sitio, consistente gracias a un sistema de diseño compartido. (Resultado cualitativo — narrativa de la fuente en Figma.)",
    snapshot: [
      { label: "Rol", value: "Diseñador de Producto Digital & Gestión Técnica de Proyectos" },
      { label: "Equipo", value: "Operaciones, técnicos de campo, ingeniería, stakeholders de negocio" },
      { label: "Contexto", value: "Operaciones de instalación de servicios del hogar y validación de servicio" },
      { label: "Plataforma", value: "Aplicación web operacional" },
      { label: "Herramientas", value: "Figma, Jira, Azure DevOps, herramientas de monitoreo de usabilidad" },
      { label: "Métodos", value: "UX Operacional, Arquitectura de Información, Sistemas de Diseño, Monitoreo de Usabilidad, Colaboración Multidisciplinaria" },
      { label: "Restricciones", value: "Condiciones de campo: presión de tiempo, conectividad variable, atención dividida" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Contexto & Problema",
        title: "Software usado de pie en un pasillo, no sentado en un escritorio",
        body: [
          "Los técnicos de campo que instalan y validan servicios del hogar dependían de una aplicación web para ejecutar y registrar su trabajo. El flujo era operacionalmente complejo: múltiples pasos, validaciones y dependencias — ejecutados bajo presión de tiempo, a menudo en sitio con el cliente observando.",
          "El reto de diseño no era estético. Cada paso ambiguo generaba llamadas a soporte, visitas repetidas o registros incompletos — costo operacional escondido dentro de un problema de interfaz.",
        ],
        statement: "En UX operacional, la interfaz es parte del trabajo — la fricción en la herramienta se convierte en fricción en el servicio.",
      },
      {
        type: "steps",
        id: "discovery",
        label: "Descubrimiento",
        title: "Seguir el flujo real, no el documentado",
        steps: [
          { name: "Kickoff", detail: "Alineación con operaciones y tecnología sobre el alcance: flujos de instalación y validación de servicio." },
          { name: "Exploración del Flujo", detail: "Mapeo de la secuencia real de tareas del técnico — incluyendo los atajos que el proceso oficial no describía." },
          { name: "Inventario de Fricciones", detail: "Fricciones recopiladas del feedback de campo y patrones de soporte en un inventario compartido." },
          { name: "Planteamiento del Problema", detail: "Reformular el trabajo de 'rediseñar pantallas' a 'acortar y quitar riesgo a la secuencia de tareas del técnico'." },
          { name: "Áreas de Oportunidad", detail: "Consolidación de pasos, estados de validación más claros, patrones consistentes en toda la aplicación." },
        ],
      },
      {
        type: "columns",
        id: "research",
        label: "Investigación",
        title: "Aprender del campo",
        columns: [
          {
            heading: "Feedback de Campo",
            body: "El aporte de técnicos y operaciones reveló dónde la herramienta frenaba el trabajo: estados de validación poco claros, pasos que exigían información que el técnico aún no tenía y pantallas densas de opciones rara vez usadas. (Hallazgo cualitativo.)",
          },
          {
            heading: "Monitoreo de Usabilidad",
            body: "El monitoreo continuo de la experiencia operacional informó la priorización — el equipo podía ver qué flujos generaban fricción en lugar de adivinarlo. (Observación cualitativa.)",
          },
          {
            heading: "Alineación Negocio & Tecnología",
            body: "Las restricciones operacionales y dependencias técnicas se mapearon con ingeniería desde temprano, para que las propuestas de diseño se mantuvieran implementables.",
          },
        ],
      },
      {
        type: "insights",
        id: "synthesis",
        label: "Síntesis",
        title: "Lo que el campo nos enseñó",
        items: [
          {
            observation: "Los técnicos perdían tiempo confirmando si un paso realmente se había registrado.",
            insight: "El feedback ambiguo del sistema obliga a verificar dos veces — un impuesto oculto en cada trabajo.",
            opportunity: "Estados de éxito, pendiente y error inconfundibles para cada acción operacional.",
            principle: "El sistema debe responder '¿funcionó?' al instante.",
          },
          {
            observation: "Las pantallas presentaban todas las opciones a la vez, aunque cada trabajo usa un subconjunto pequeño.",
            insight: "La densidad diseñada para las excepciones penalizaba el caso común.",
            opportunity: "Revelación progresiva alrededor de la secuencia típica de instalación.",
            principle: "Diseña para el 90% del trabajo, haz el 10% alcanzable.",
          },
          {
            observation: "Módulos diferentes resolvían tareas similares de forma diferente.",
            insight: "Cada inconsistencia sumaba costo de formación y riesgo de error para personal rotativo.",
            opportunity: "Un sistema de diseño compartido para patrones operacionales.",
            principle: "Un patrón, aprendido una vez, usado en todas partes.",
          },
        ],
      },
      {
        type: "steps",
        id: "architecture",
        label: "Arquitectura de Información & Flujos",
        title: "Reconstruir la secuencia de tareas",
        steps: [
          { name: "Antes", detail: "Flujos organizados alrededor de módulos del sistema; los técnicos saltaban entre secciones para completar un trabajo." },
          { name: "Decisión", detail: "Reestructurar alrededor del ciclo de vida del trabajo: preparar, instalar, validar, registrar. (Decisión de diseño.)" },
          { name: "Después", detail: "Flujos de tareas guiados con puntos de validación explícitos y menos cambios de contexto." },
        ],
      },
      {
        type: "text",
        id: "interaction",
        label: "Diseño de Interacción",
        title: "Estados para condiciones del mundo real",
        body: [
          "Las interfaces operacionales viven o mueren en sus estados: carga con mala conectividad, errores de validación con recuperación clara y confirmaciones de registro que no dejan duda.",
          "Los patrones de interacción se estandarizaron para que un técnico que aprendía un flujo pudiera predecir todos los demás.",
        ],
      },
      {
        type: "text",
        id: "design-system",
        label: "Sistema de Diseño",
        title: "La consistencia como herramienta operacional",
        body: [
          "El sistema de diseño cubrió componentes, formularios, tablas y patrones de estado usados en toda la aplicación web — con guía de uso para que los nuevos módulos heredaran la misma lógica operacional.",
          "Se estructuró así porque el producto es una herramienta de trabajo: la predictibilidad reduce errores, tiempo de formación y carga de soporte. El valor del sistema se mide en operaciones más fluidas, no en conteo de componentes.",
        ],
      },
      {
        type: "loop",
        id: "validation",
        label: "Validación & Iteración",
        title: "Usabilidad monitoreada, refinamiento continuo",
        steps: [
          { name: "Hipótesis", detail: "Flujos orientados a tareas con estados explícitos reducirían la fricción en instalación y validación." },
          { name: "Prueba", detail: "Sesiones de revisión con perfiles operacionales; monitoreo de usabilidad después de los lanzamientos." },
          { name: "Observación", detail: "Observación de validación: los flujos guiados redujeron problemas de orientación; algunos mensajes de validación aún requerían redacción más clara." },
          { name: "Decisión", detail: "Refinar el texto del feedback y la visibilidad de estados en los pasos más sensibles." },
          { name: "Iteración", detail: "Mejoras versionadas entregadas con ingeniería dentro de la cadencia ágil." },
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impacto",
        title: "Qué cambió",
        body: [
          "Resultados cualitativos: flujos operacionales más claros para instalación de campo y validación de servicio, mayor consistencia en la aplicación web gracias al sistema de diseño, y una alineación más fuerte entre negocio, operaciones y tecnología.",
          "Sin cifras inventadas: el valor de este trabajo se describe a través de los flujos que clarificó, no mediante porcentajes no verificados.",
        ],
      },
    ],
    contribution: {
      mine: [
        "Gestión técnica de proyecto y coordinación multidisciplinaria",
        "Mapeo de flujos operacionales y arquitectura de información",
        "Diseño de interacción para flujos de instalación y validación",
        "Diseño UI de la aplicación web",
        "Definición del sistema de diseño",
        "Monitoreo de usabilidad e iteración",
        "Gestión de stakeholders entre negocio y tecnología",
      ],
      team: [
        "Implementación de ingeniería",
        "Propiedad del proceso de operaciones",
        "Feedback de técnicos de campo y validación operacional",
      ],
    },
    learnings: {
      learned:
        "Diseñar para usuarios de campo cambia cada suposición — el 'contexto de usuario' no es una diapositiva, es un pasillo, una escalera y un cliente esperando.",
      differently:
        "Acompañar a los técnicos en sitio más temprano; los procesos documentados y la práctica real divergen más de lo que cualquier sesión con stakeholders revela.",
      next:
        "Explorar patrones offline-first para escenarios de baja conectividad, donde las herramientas operacionales son más frágiles.",
    },
  },
  {
    slug: "gabo",
    number: "03",
    title: "GABO — Gobierno Abierto Bogotá",
    client: "Alcaldía de Bogotá",
    industry: "GovTech / Sector Público",
    role: "UX/UI Designer",
    platform: "Aplicación móvil Android",
    palette: { bg: "#8F1D16", accent: "#E43D30", ink: "#FDF3F2", soft: "#B02818" },
    variant: "mobile",
    tagline: "Los servicios de la ciudad en el bolsillo de cada ciudadano.",
    challenge:
      "Bogotá necesitaba un canal móvil que reuniera transparencia, participación ciudadana y los programas de apoyo del Distrito — y que permitiera hacer trámites de la ciudad sin salir de casa.",
    approach:
      "Organizar la oferta de trámites y servicios de la ciudad en recorridos móviles claros basados en tarjetas — incluyendo acceso al SuperCADE Virtual, pagos de servicios públicos, peticiones y gestión de cuenta.",
    result:
      "La app GAB: una solución cívica iterativa con acceso al SuperCADE Virtual, información de ayudas del Distrito y trámites de la ciudad — publicada en Google Play. (Fuente: ficha de Google Play.)",
    snapshot: [
      { label: "Rol", value: "UX/UI Designer" },
      { label: "Equipo", value: "Stakeholders cívicos, ingeniería" },
      { label: "Contexto", value: "Gobierno Abierto Bogotá (GAB) — iniciativa de gobierno abierto" },
      { label: "Plataforma", value: "Aplicación Android" },
      { label: "Herramientas", value: "Figma" },
      { label: "Métodos", value: "Arquitectura de Información, Diseño de Interacción, UX Móvil, Diseño Centrado en las Personas" },
      { label: "Restricciones", value: "Audiencia pública amplia — claridad y accesibilidad por encima de la sofisticación" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Contexto & Problema",
        title: "Una alcaldía que cabe en un bolsillo",
        body: [
          "Gobierno Abierto Bogotá promueve la transparencia, la participación ciudadana y la información sobre las ayudas que dispone el Distrito — transferencias monetarias, bonos canjeables, alimentación escolar, apoyo a madres gestantes. El reto: llevar esa oferta, junto con los trámites y servicios de la ciudad, a una experiencia móvil que cualquier ciudadano pueda usar.",
          "La app se concibió como una solución iterativa que crece y se robustece de manera permanente — así que la estructura debía recibir nuevos servicios sin romper lo que ya funciona.",
        ],
        statement: "Un servicio de la ciudad que exige una visita presencial excluye a las personas que más lo necesitan.",
      },
      {
        type: "steps",
        id: "architecture",
        label: "Arquitectura de Información",
        title: "Un solo centro para toda la ciudad",
        steps: [
          { name: "Antes", detail: "Trámites, información de ayudas y atención al ciudadano dispersos entre oficinas, líneas telefónicas y páginas web." },
          { name: "Decisión", detail: "Un solo inicio móvil organizado por tareas del ciudadano — gestionar sin salir de casa, consultar y pagar, peticiones, oferta de servicios. (Decisión de diseño.)" },
          { name: "Después", detail: "Un hub de tarjetas con acceso directo al SuperCADE Virtual, pagos de servicios públicos, peticiones 'Bogotá te escucha' y puntos de atención RED CADE." },
        ],
      },
      {
        type: "text",
        id: "interaction",
        label: "Diseño de Interacción",
        title: "Ningún ciudadano en un callejón sin salida",
        body: [
          "La experiencia se construye alrededor de tarjetas de tareas directas con íconos y lenguaje claro. Los canales asistidos — chat, videollamada con un asesor y la línea 195 — están siempre a un toque, para que nadie se quede atascado dentro de un trámite.",
          "La gestión personal ('Mi cuenta') está separada de los servicios generales, manteniendo los datos del ciudadano en su propio espacio claro.",
        ],
      },
      {
        type: "text",
        id: "ui-design",
        label: "Diseño UI",
        title: "Identidad cívica, legible para todos",
        body: [
          "La interfaz lleva la identidad de Gobierno Abierto de Bogotá — la marca GAB y el rojo de la ciudad — con tarjetas grandes de alto contraste, diseñadas para la audiencia más amplia posible.",
          "Las pantallas reales de la app publicada se muestran abajo en la sección de pantallas del producto.",
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impacto",
        title: "Qué cambió",
        body: [
          "Resultado cualitativo: los trámites de la ciudad, los programas de ayuda y los canales de participación ciudadana se volvieron alcanzables desde una sola app móvil, con soporte asistido integrado en la experiencia.",
          "La app es un producto público iterativo — las cifras de uso pertenecen al Distrito y no se reclaman aquí.",
        ],
      },
    ],
    contribution: {
      mine: [
        "Diseño UX/UI de la aplicación móvil",
        "Arquitectura de información de trámites y servicios de la ciudad",
        "Diseño de interacción de flujos de trámites, pagos y peticiones",
        "Diseño visual alineado con la identidad de Gobierno Abierto",
      ],
      team: [
        "Ingeniería y publicación de la app",
        "Contenido de servicios de la ciudad y stakeholders institucionales",
      ],
    },
    learnings: {
      learned:
        "Diseñar para 'toda una ciudad' es el brief más difícil que existe — el lenguaje claro y los canales asistidos importaron más que cualquier decisión visual.",
      differently:
        "Probar más temprano con ciudadanos de distintas edades y niveles de alfabetización; los servicios públicos no pueden asumir confianza digital.",
      next:
        "Explorar patrones de servicio proactivos — la app notificando a la ciudadanía sobre ayudas para las que califica, en lugar de esperar a ser buscada.",
    },
  },
  {
    slug: "321-ignition",
    number: "04",
    title: "321 Ignition — Overfuel",
    client: "321 Ignition (ahora Overfuel)",
    industry: "Automoción / SaaS",
    role: "UX/UI Designer",
    platform: "Plataforma web mobile-first para concesionarios",
    palette: { bg: "#0A1224", accent: "#3B82F6", ink: "#E8EEFC", soft: "#12203C" },
    variant: "web",
    tagline: "Sitios web mobile-first construidos para vender carros.",
    challenge:
      "Los sitios web de concesionarios eran lentos y pensados para escritorio mientras la mayor parte de la investigación de compra ya ocurría en móvil — costándole leads a los concesionarios antes de que el cliente llegara al concesionario.",
    approach:
      "Diseñar experiencias mobile-first para concesionarios sobre la plataforma: navegación con el inventario primero, páginas de detalle de vehículo y captura de leads integrada — pre-aprobación de crédito, ofertas de trade-in, agendamiento de test drive — más un CMS no-code para que el concesionario edite su contenido.",
    result:
      "Una plataforma de sitios web mobile-first para concesionarios que evolucionó hasta convertirse en Overfuel — hoy posicionada en velocidad, SEO local, inventario mejorado con IA y analítica avanzada. (Fuente: overfuel.com.)",
    snapshot: [
      { label: "Rol", value: "UX/UI Designer" },
      { label: "Equipo", value: "Producto, ingeniería, stakeholders de concesionarios" },
      { label: "Contexto", value: "Plataforma de sitios web para concesionarios de automóviles" },
      { label: "Plataforma", value: "Plataforma web mobile-first + CMS no-code" },
      { label: "Herramientas", value: "Figma" },
      { label: "Métodos", value: "UX Mobile-first, Arquitectura de Información, Diseño de Interacción, Diseño orientado a Conversión" },
      { label: "Restricciones", value: "Páginas de rendimiento crítico; contenido editable por equipos no técnicos del concesionario" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Contexto & Problema",
        title: "El sitio web es el primer showroom",
        body: [
          "Los compradores de carros suelen visitar solo uno o dos concesionarios en persona — la mayor parte de la investigación ocurre primero en línea, y en su mayoría desde el celular. Un sitio de concesionario lento y pensado para escritorio pierde al cliente antes de que la conversación empiece.",
          "El reto de diseño: hacer que explorar el inventario, el detalle del vehículo y la captura de leads se sientan nativos en móvil — manteniendo cada página rápida y cada sitio editable por el propio concesionario.",
        ],
        statement: "Más del 70% de la investigación de compra de carros ocurre en un celular — el sitio web es el primer showroom. (Fuente: overfuel.com.)",
      },
      {
        type: "steps",
        id: "architecture",
        label: "Arquitectura de Información",
        title: "El inventario primero, todo lo demás después",
        steps: [
          { name: "Antes", detail: "Los sitios de concesionarios enterraban el inventario bajo páginas genéricas de marketing; encontrar un carro tomaba demasiados toques en móvil." },
          { name: "Decisión", detail: "Estructura inventory-first: búsqueda y exploración por tipo de carrocería en la pantalla de inicio, detalle del vehículo a un toque. (Decisión de diseño.)" },
          { name: "Después", detail: "Inicio → inventario → detalle del vehículo → acción de lead (crédito, trade-in, test drive) como un camino corto y amigable al pulgar." },
        ],
      },
      {
        type: "text",
        id: "interaction",
        label: "Diseño de Interacción",
        title: "Captura de leads sin caos de plugins",
        body: [
          "Las rutas de conversión se diseñaron como flujos nativos — pre-aprobación de crédito, depósitos en línea seguros, ofertas de trade-in, agendamiento de test drive y servicio, calculadoras de pago — en lugar de plugins de terceros desconectados.",
          "Del lado administrativo, el CMS no-code permite a los equipos del concesionario editar páginas con bloques (layout, contenido, inventario, formularios) — sin desarrollador para una promoción de temporada.",
        ],
      },
      {
        type: "text",
        id: "ui-design",
        label: "Diseño UI",
        title: "Diseñado para pulgares, medido en segundos",
        body: [
          "UI mobile-first con objetivos táctiles grandes, acciones fijas y layouts liderados por el inventario; el rendimiento tratado como un requisito de diseño, no como una idea tardía de ingeniería.",
          "Las pantallas reales del producto — sitio responsive, inventario móvil, CMS y analítica — se muestran en la sección de pantallas del producto más abajo.",
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impacto",
        title: "Qué cambió",
        body: [
          "Resultado cualitativo: una experiencia web mobile-first para concesionarios con captura de leads integrada y gestión de contenido self-service.",
          "El producto evolucionó después hasta convertirse en Overfuel; las métricas de rendimiento publicadas en overfuel.com pertenecen a la plataforma actual y no se reclaman aquí como resultados personales.",
        ],
      },
    ],
    contribution: {
      mine: [
        "Diseño UX/UI de experiencias web mobile-first para concesionarios",
        "Arquitectura de información para inventario y flujos de leads",
        "Diseño de interacción de rutas de conversión",
        "Diseño de interfaz para la experiencia del CMS no-code",
      ],
      team: [
        "Ingeniería de la plataforma",
        "Estrategia de producto y evolución posterior hacia Overfuel",
      ],
    },
    learnings: {
      learned:
        "Diseñar una plataforma significa diseñar para dos usuarios a la vez — el comprador del carro y el editor del concesionario. La experiencia del CMS es tanto producto como el sitio público.",
      differently:
        "Involucrar al personal del concesionario en las pruebas del CMS más temprano; los editores rompen suposiciones que los usuarios finales nunca tocan.",
      next:
        "Explorar cómo el contenido asistido por IA (como las descripciones de vehículos) puede diseñarse como una herramienta transparente y controlable en lugar de una caja negra.",
    },
  },
];

