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
      "Múltiples puntos de contacto digitales — experiencias web, aplicaciones móviles y flujos de autoservicio — habían crecido de forma independiente, haciendo la experiencia fragmentada para los pacientes y difícil de evolucionar para los equipos.",
    approach:
      "Investigación UX y pruebas de usabilidad para entender el comportamiento real de los pacientes, seguidas de un sistema de diseño y patrones de interacción compartidos entre productos.",
    result:
      "Un ecosistema de producto más consistente y orientado al autoservicio, con componentes reutilizables y recorridos más claros — validado iterativamente con UXCam, Hotjar y Maze. (Resultado cualitativo — sin métricas inventadas.)",
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
        type: "visual",
        id: "ui-visual",
        variant: "ecosystem",
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
    platform: "Aplicación Web & Sistema de Diseño",
    palette: { bg: "#032F5E", accent: "#019DF4", ink: "#E9F4FE", soft: "#0A4178" },
    variant: "ops",
    tagline: "UX operacional para las personas que conectan los hogares.",
    challenge:
      "La instalación y validación de servicios del hogar dependía de herramientas web usadas por técnicos de campo en condiciones exigentes — flujos operacionales complejos donde la confusión cuesta tiempo frente al cliente.",
    approach:
      "Entender el flujo de trabajo de campo de punta a punta, simplificar la interfaz operacional alrededor de la secuencia real de tareas del técnico y mantener todo el producto consistente mediante un sistema de diseño.",
    result:
      "Flujos operacionales más claros para instalación y validación de servicios, con monitoreo de usabilidad para seguir mejorando después de la entrega. (Resultado cualitativo.)",
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
        type: "visual",
        id: "ui-visual",
        variant: "ops",
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
    slug: "secretaria-salud-ai",
    number: "03",
    title: "Secretaría Distrital de Salud",
    client: "Secretaría Distrital de Salud — Bogotá",
    industry: "Salud Pública / GovTech",
    role: "Diseñador de Producto IA — Visualización de Datos",
    platform: "Intranet + Integración Power BI",
    palette: { bg: "#101418", accent: "#3ECF8E", ink: "#E8F5EE", soft: "#1A2126" },
    variant: "dataviz",
    tagline: "Haciendo legible la epidemiología asistida por IA para quienes deciden.",
    challenge:
      "La medición de casos de COVID-19 basada en IA y la interpretación de posibles brotes futuros producían información compleja que los equipos de salud pública necesitaban leer rápida y correctamente.",
    approach:
      "Diseñar una experiencia de intranet, integrada con Power BI, que organiza los resultados del modelo en una jerarquía de información clara — qué está pasando, qué podría pasar y qué necesita atención.",
    result:
      "Una experiencia de apoyo a la decisión que traduce resultados de IA en visualizaciones interpretables y centradas en las personas para las autoridades de salud. (Resultado cualitativo.)",
    snapshot: [
      { label: "Rol", value: "Diseñador de Producto IA — Visualización de Datos" },
      { label: "Equipo", value: "Datos/analítica, stakeholders de salud pública, tecnología" },
      { label: "Contexto", value: "Medición de casos de COVID-19 e interpretación de brotes" },
      { label: "Plataforma", value: "Experiencia de intranet integrada con Power BI" },
      { label: "Herramientas", value: "Figma, Power BI" },
      { label: "Métodos", value: "Diseño de Producto IA, Visualización de Datos, Jerarquía de Información, Diseño Centrado en las Personas" },
      { label: "Restricciones", value: "Interpretación de alto riesgo — claridad y representación honesta de los resultados del modelo" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Contexto & Problema",
        title: "Cuando los datos existen pero la decisión sigue siendo difícil",
        body: [
          "La Secretaría Distrital de Salud trabajaba con medición de casos de COVID-19 basada en IA y modelos que interpretaban posibles brotes futuros. La información existía — pero los resultados complejos de un modelo no son decisiones.",
          "Las personas afectadas eran autoridades de salud y analistas que necesitaban entender la situación actual y anticipar escenarios. El reto de diseño: presentar información generada por IA con suficiente jerarquía y contexto para apoyar decisiones reales, sin simplificar de más lo que los modelos realmente dicen.",
        ],
        statement: "Un modelo de IA que las personas no pueden leer es un riesgo para la toma de decisiones, no un activo.",
      },
      {
        type: "steps",
        id: "discovery",
        label: "Descubrimiento",
        title: "Entender cómo se toman realmente las decisiones",
        steps: [
          { name: "Kickoff", detail: "Alineación con stakeholders de salud y datos sobre lo que la experiencia de intranet necesitaba responder." },
          { name: "Exploración", detail: "Entender los resultados del modelo: medición de casos, interpretación de brotes — y qué necesitaba de ellos cada audiencia." },
          { name: "Inventario de Fricciones", detail: "Información compleja sin jerarquía obliga a cada lector a hacer su propio trabajo de interpretación." },
          { name: "Planteamiento del Problema", detail: "De 'mostrar los datos' a 'apoyar la lectura de los datos'." },
          { name: "Áreas de Oportunidad", detail: "Jerarquía de información, codificación visual, detalle por capas para distintos lectores." },
        ],
      },
      {
        type: "columns",
        id: "research",
        label: "Investigación & Interpretación",
        title: "Diseñar para lectores, no para dashboards",
        columns: [
          {
            heading: "Necesidades de Lectura de los Stakeholders",
            body: "Diferentes lectores necesitaban diferentes profundidades: una lectura ejecutiva de la situación y una lectura analítica para los equipos que trabajan con los datos. (Hallazgo cualitativo del trabajo con stakeholders.)",
          },
          {
            heading: "Interpretación de Resultados de IA",
            body: "Trabajo con el equipo de datos para entender qué producen los modelos — y qué no — de modo que la interfaz representara la incertidumbre con honestidad en lugar de implicar falsa precisión. (Decisión de diseño.)",
          },
          {
            heading: "Contexto Power BI",
            body: "La experiencia se integró con Power BI, así que el diseño trabajó con las fortalezas de la plataforma en lugar de pelear con sus restricciones.",
          },
        ],
      },
      {
        type: "insights",
        id: "synthesis",
        label: "Síntesis",
        title: "Principios para el diseño de apoyo a decisiones",
        items: [
          {
            observation: "Los lectores buscaban 'qué cambió' antes de explorar 'por qué'.",
            insight: "La conciencia de la situación precede al análisis — la interfaz debe responder la primera pregunta en segundos.",
            opportunity: "Una capa superior que expone la situación actual antes que cualquier detalle.",
            principle: "Responder primero, explicar después.",
          },
          {
            observation: "Las proyecciones del modelo corrían el riesgo de leerse como certezas.",
            insight: "La confianza visual implica confianza estadística — el diseño puede mentir accidentalmente.",
            opportunity: "Tratamiento visual que distingue datos medidos de escenarios proyectados.",
            principle: "Hacer visible la incertidumbre, sin alarmar.",
          },
          {
            observation: "Los dashboards densos delegaban el trabajo de interpretación en el lector.",
            insight: "Cada número sin comparar obliga al lector a sostener el contexto en memoria.",
            opportunity: "Jerarquía y comparación integradas en la propia visualización.",
            principle: "La interfaz hace la primera pasada del análisis.",
          },
        ],
      },
      {
        type: "steps",
        id: "architecture",
        label: "Arquitectura de Información",
        title: "Estratificar la complejidad en lugar de eliminarla",
        steps: [
          { name: "Antes", detail: "Información organizada por fuente de datos; los lectores armaban su propio panorama." },
          { name: "Decisión", detail: "Estructurar por preguntas: situación actual → escenarios posibles → detalle de soporte. (Decisión de diseño.)" },
          { name: "Después", detail: "Experiencia por capas — vista situacional primero, profundidad analítica bajo demanda a través de la integración con Power BI." },
        ],
      },
      {
        type: "text",
        id: "ui-design",
        label: "Diseño UI & Visualización de Datos",
        title: "La jerarquía visual como herramienta de salud pública",
        body: [
          "Las decisiones de visualización priorizaron la lectura correcta: escalas claras, color restringido reservado para el significado y etiquetado directo sobre leyendas siempre que fue posible.",
          "La interfaz se diseñó para ser leída en una reunión, no solo explorada a solas — pantallas que sostienen una narrativa, no solo un análisis.",
        ],
      },
      {
        type: "visual",
        id: "ui-visual",
        variant: "dataviz",
      },
      {
        type: "loop",
        id: "validation",
        label: "Validación & Iteración",
        title: "Revisar la lectura, no solo las pantallas",
        steps: [
          { name: "Hipótesis", detail: "Una jerarquía orientada a preguntas permitiría a los stakeholders comprender la situación más rápido que dashboards orientados a fuentes." },
          { name: "Prueba", detail: "Sesiones de revisión con perfiles de stakeholders usando escenarios realistas." },
          { name: "Observación", detail: "Observación de validación: la estructura por capas apoyó la lectura situacional rápida; algunas etiquetas requirieron refinamiento de dominio con expertos de salud." },
          { name: "Decisión", detail: "Terminología y orden de lectura ajustados con stakeholders expertos en la materia." },
          { name: "Iteración", detail: "Refinamientos progresivos mantuvieron la experiencia alineada con el uso real de la información." },
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impacto",
        title: "Qué cambió",
        body: [
          "Resultados cualitativos: información compleja generada por IA se volvió legible para tomadores de decisión no técnicos; los datos medidos y las proyecciones se volvieron visualmente distinguibles; y la experiencia de intranet apoyó conversaciones más rápidas y mejor fundamentadas sobre la situación de salud pública.",
          "El impacto se describe cualitativamente — no se afirman cifras de adopción o precisión sin documentación.",
        ],
      },
    ],
    contribution: {
      mine: [
        "Diseño de producto IA y definición de la experiencia",
        "Arquitectura y jerarquía de información",
        "Diseño de visualización de datos",
        "Diseño UI de intranet integrado con Power BI",
        "Colaboración con stakeholders de salud y equipos de datos",
      ],
      team: [
        "Modelado y medición de datos/IA",
        "Integración con Power BI e ingeniería de plataforma",
        "Experiencia temática en salud pública",
      ],
    },
    learnings: {
      learned:
        "En productos de IA, el trabajo del diseñador es en parte epistemológico: la interfaz decide lo que el modelo parece saber. Esa responsabilidad cambia cómo diseñas cada gráfico.",
      differently:
        "Involucrar a los lectores finales en etapas de baja fidelidad — la visualización de datos validada solo con stakeholders técnicos optimiza para el lector equivocado.",
      next:
        "Explorar narrativas guiadas sobre los dashboards — interfaces que acompañan a los tomadores de decisión a través de una situación, no solo la presentan.",
    },
  },
  {
    slug: "secretaria-gobierno-voice",
    number: "04",
    title: "Secretaría Distrital de Gobierno",
    client: "Secretaría Distrital de Gobierno — Bogotá",
    industry: "GovTech / Innovación Cívica",
    role: "Diseñador de UX Conversacional — UX de Voz",
    platform: "Web con voz — Google Cloud Platform",
    palette: { bg: "#1B1437", accent: "#8B7CF6", ink: "#EFEBFF", soft: "#241B47" },
    variant: "voice",
    tagline: "Una experiencia cívica voice-first sobre Google Cloud Platform.",
    challenge:
      "La ciudadanía necesitaba gestionar hojas de vida y perfiles a través de una experiencia digital — y el proyecto exploró la interacción por voz y audio desde smartphones, computadores y dispositivos con micrófono como un modelo alternativo y más accesible.",
    approach:
      "Diseñar flujos conversacionales, intents y patrones de interacción de voz integrados con Google Cloud Platform — tratando la conversación como una interfaz con su propia arquitectura, estados y modos de fallo.",
    result:
      "Un concepto de experiencia habilitada por voz diseñado alrededor de la interacción natural, con rutas conversacionales, fallbacks y flujos de recuperación definidos. (Resultado cualitativo.)",
    snapshot: [
      { label: "Rol", value: "Diseñador de UX Conversacional — UX de Voz" },
      { label: "Equipo", value: "Ingeniería, cloud (GCP), stakeholders cívicos" },
      { label: "Contexto", value: "Gestión de perfiles / hojas de vida ciudadanas mediante voz y audio" },
      { label: "Plataforma", value: "Smartphones, computadores y dispositivos con micrófono" },
      { label: "Herramientas", value: "Figma, Google Cloud Platform" },
      { label: "Métodos", value: "UX Conversacional, UX de Voz, Arquitectura de Información, Flujos de Interacción, Diseño Centrado en las Personas" },
      { label: "Restricciones", value: "El habla es ambigua — cada intent necesita un fallback y cada fallo una recuperación elegante" },
    ],
    sections: [
      {
        type: "text",
        id: "context",
        label: "Contexto & Problema",
        title: "Los formularios asumen un teclado. La ciudadanía no siempre tiene uno.",
        body: [
          "Gestionar digitalmente una hoja de vida o un perfil ciudadano suele significar formularios: campos, validación, listas desplegables. Este proyecto con la Secretaría Distrital de Gobierno exploró un modelo diferente — interacción por voz y audio desde smartphones, computadores y dispositivos con micrófono, integrado con Google Cloud Platform.",
          "El reto de diseño era doble: hacer que la gestión del perfil funcionara como una conversación, y hacer esa conversación robusta — porque el habla es ambigua, los entornos son ruidosos y las personas no hablan en campos de formulario.",
        ],
        statement: "En UX de voz, la interfaz es un diálogo — y todo diálogo puede ser malinterpretado.",
      },
      {
        type: "steps",
        id: "discovery",
        label: "Descubrimiento",
        title: "Plantear la conversación como interfaz",
        steps: [
          { name: "Kickoff", detail: "Alineación sobre la oportunidad: la voz como modelo de interacción alternativo para la gestión del perfil ciudadano." },
          { name: "Exploración", detail: "Mapeo de qué tareas del perfil se traducen bien al habla — y cuáles se resisten (listas largas, ediciones precisas, revisión)." },
          { name: "Inventario de Fricciones", detail: "Los flujos basados en formularios excluyen usuarios con alfabetización limitada, restricciones motoras o contextos de solo móvil." },
          { name: "Planteamiento del Problema", detail: "No 'agregar voz a un formulario' — diseñar una experiencia conversacional con lógica propia." },
          { name: "Áreas de Oportunidad", detail: "Flujos de voz guiados, patrones de confirmación, fallbacks multimodales." },
        ],
      },
      {
        type: "columns",
        id: "research",
        label: "Investigación & Planteamiento",
        title: "Cómo la gente realmente le habla a las máquinas",
        columns: [
          {
            heading: "Expectativas Conversacionales",
            body: "Las personas formulan el mismo intent de muchas maneras, se interrumpen a sí mismas y esperan que el sistema confirme antes de actuar. Implicación de diseño: los intents deben ser generosos y las confirmaciones explícitas. (Hallazgo cualitativo / decisión de diseño.)",
          },
          {
            heading: "Idoneidad de la Tarea",
            body: "La voz destaca en tareas guiadas y lineales; la revisión y corrección se benefician del apoyo visual. Los flujos se diseñaron con esa división de trabajo en mente.",
          },
          {
            heading: "Colaboración Técnica",
            body: "Trabajo cercano con el lado de ingeniería sobre las capacidades de Google Cloud Platform, para que el diseño conversacional se mantuviera dentro de lo que la plataforma podía entregar con fiabilidad.",
          },
        ],
      },
      {
        type: "insights",
        id: "synthesis",
        label: "Síntesis",
        title: "Principios para la experiencia conversacional",
        items: [
          {
            observation: "Los usuarios no pueden ver qué es posible en una interfaz de voz.",
            insight: "La descubribilidad debe hablarse — el sistema tiene que ofrecer opciones, no esperar comandos.",
            opportunity: "Prompts guiados que presentan las siguientes acciones sensatas.",
            principle: "La conversación guía, la ciudadanía sigue.",
          },
          {
            observation: "El error de reconocimiento es inevitable en entornos reales.",
            insight: "La calidad de un producto de voz se mide por su recuperación, no por su camino ideal.",
            opportunity: "Lógica de fallback y flujos de recuperación diseñados como rutas de primera clase.",
            principle: "Diseña para el malentendido.",
          },
          {
            observation: "Los cambios sensibles del perfil por voz se sienten riesgosos sin confirmación.",
            insight: "La confianza en sistemas conversacionales se construye con confirmación explícita y omisible.",
            opportunity: "Patrones de repetición y confirmación antes de cualquier acción de escritura.",
            principle: "Nunca actuar en silencio a partir del habla.",
          },
        ],
      },
      {
        type: "steps",
        id: "interaction",
        label: "Diseño de Interacción & Conversación",
        title: "Intents, rutas y fallo elegante",
        steps: [
          { name: "Mapa de Intents", detail: "Definición de los intents detrás de la gestión del perfil — crear, actualizar, revisar, confirmar — con sus variaciones de formulación." },
          { name: "Rutas Conversacionales", detail: "Flujos principales escritos como diálogos: prompts, respuestas del usuario, confirmaciones del sistema." },
          { name: "Lógica de Fallback", detail: "Rutas de no-coincidencia y sin-entrada con estrategias de re-prompt en lugar de callejones sin salida." },
          { name: "Recuperación", detail: "¿Dato mal escuchado? El sistema lo repite, ofrece corrección y solo entonces continúa." },
          { name: "Flujos Alternativos", detail: "Soporte multimodal — la voz conduce, la pantalla confirma — en smartphones y computadores." },
        ],
      },
      {
        type: "visual",
        id: "ui-visual",
        variant: "voice",
      },
      {
        type: "text",
        id: "architecture",
        label: "Arquitectura de Información",
        title: "Estructura que sobrevive al ser hablada",
        body: [
          "La arquitectura de información del perfil se reorganizó para la conversación: estructuras superficiales, puntos de decisión pequeños y un orden que coincide con cómo las personas se describen a sí mismas en lugar de cómo las bases de datos los almacenan. (Decisión de diseño.)",
          "Este trabajo de IA es lo que permitió que la misma experiencia viviera entre dispositivos — la estructura carga la lógica; la voz y la pantalla son solo sus superficies.",
        ],
      },
      {
        type: "loop",
        id: "validation",
        label: "Validación & Iteración",
        title: "Probar el diálogo",
        steps: [
          { name: "Hipótesis", detail: "Flujos conversacionales guiados con confirmación explícita harían la gestión del perfil accesible mediante voz." },
          { name: "Prueba", detail: "Recorridos de guion y revisiones de prototipo de las principales rutas conversacionales." },
          { name: "Observación", detail: "Observación de validación: las confirmaciones construyeron confianza pero agregaron longitud; los intents frecuentes necesitaban rutas más cortas." },
          { name: "Decisión", detail: "Confirmación por niveles — repetición completa para cambios críticos, confirmación ligera para ediciones de bajo riesgo." },
          { name: "Iteración", detail: "Prompts y flujos refinados iterativamente con el equipo técnico en GCP." },
        ],
      },
      {
        type: "text",
        id: "impact",
        label: "Impacto",
        title: "Qué cambió",
        body: [
          "Resultados cualitativos: un modelo de interacción alternativo para un servicio cívico — diseñado con el rigor del UX visual: arquitectura, flujos, estados y modos de fallo — y una alineación funcional entre diseño conversacional e ingeniería de Google Cloud Platform.",
          "El proyecto demuestra práctica de diseño orientada a tecnología emergente; no se afirman cifras de uso sin documentación.",
        ],
      },
    ],
    contribution: {
      mine: [
        "Diseño de UX conversacional y UX de voz",
        "Definición de intents y rutas conversacionales",
        "Diseño de flujos de fallback y recuperación",
        "Arquitectura de información para interacción por voz",
        "Flujos de interacción entre dispositivos",
        "Colaboración técnica con ingeniería de GCP",
      ],
      team: [
        "Integración e ingeniería de Google Cloud Platform",
        "Definición del servicio cívico e insumo de stakeholders",
      ],
    },
    learnings: {
      learned:
        "La UX de voz es diseño de interacción sin lo visual — cada debilidad en la lógica del flujo se vuelve audible. Me convirtió en un diseñador más estricto de rutas y estados en todo lo demás.",
      differently:
        "Prototipar con reconocimiento de voz real más temprano; los guiones escritos esconden la ambigüedad que el habla real introduce.",
      next:
        "Explorar patrones multimodales donde la voz inicia y la pantalla completa — la combinación más fuerte para tareas cívicas complejas.",
    },
  },
];
