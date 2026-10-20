export const profile = {
  name: 'Jose Manuel Mesa Ospina',
  role: 'Desarrollador Backend Java',
  tagline: 'Estudiante de Ingeniería Informática. Construyo APIs y sistemas backend con Java y Spring Boot.',
  email: 'josem160n@gmail.com',
  github: 'https://github.com/JoseM0518',
  summary:
    'Desarrollador Backend en formación con enfoque en el lenguaje Java y el ecosistema Spring Boot. Me apasiona el diseño de arquitecturas limpias, el desarrollo de APIs, el manejo eficiente de bases de datos relacionales y no relacionales, y la aplicación de buenas prácticas de ingeniería. Orientado a la resolución de problemas.',
}

export const sections = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'formacion', label: 'Formación' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'intereses', label: 'Intereses' },
]

export const education = [
  {
    period: 'En curso',
    title: 'Ingeniería Informática',
    place: 'Corporación Universitaria Unilasallista',
    detail: 'Actualmente en 5.º semestre.',
  },
  {
    period: 'Complementaria',
    title: 'Fundamentos de Backend con Java y Spring Boot',
    place: 'Formación complementaria',
    detail: '',
  },
  {
    period: 'Continua',
    title: 'Inglés B1/B2',
    place: 'En preparación',
    detail: 'Formación continua del idioma.',
  },
]

export const projects = [
  {
    title: 'Hardware Store Management System',
    type: 'Proyecto personal · Aplicación backend',
    description:
      'Sistema monolítico web para la gestión de inventario, registro y control de productos de una ferretería.',
    points: [
      'Arquitectura MVC con Spring Boot y Thymeleaf.',
      'Base de datos relacional con MySQL/MariaDB mediante Spring Data JPA e Hibernate.',
      'Validaciones de reglas de negocio en el backend: precios mayores a 0, stock no negativo y campos requeridos.',
      'Inyección de dependencias por constructor y peticiones HTTP seguras (POST para operaciones críticas).',
    ],
    tags: ['Java', 'Spring Boot', 'Spring MVC', 'Thymeleaf', 'JPA', 'Hibernate', 'MySQL', 'MariaDB'],
  },
  {
    title: 'ParkingSalle',
    type: 'Proyecto académico',
    description:
      'Prototipo de sistema para la gestión de acceso y pagos virtuales de un parqueadero universitario.',
    points: [
      'Controladores REST con Spring Boot y DTOs con validación de datos.',
      'Pruebas de los endpoints con Postman.',
      'Integración con una interfaz móvil en Ionic/Angular.',
    ],
    tags: ['Java', 'Spring Boot', 'REST', 'DTO', 'Postman', 'Ionic', 'Angular'],
  },
]

export const stack = [
  { group: 'Lenguaje principal', items: ['Java'], note: 'Lógica de programación, POO y desarrollo backend.' },
  { group: 'Maquetación y vistas', items: ['HTML5'], note: 'Estructuración de vistas con Thymeleaf.' },
  { group: 'Backend', items: ['Spring Boot', 'Spring Data JPA', 'Spring MVC', 'Thymeleaf'] },
  { group: 'Bases de datos', items: ['MySQL', 'MariaDB', 'MongoDB'] },
  { group: 'Herramientas', items: ['Git', 'GitHub', 'Maven', 'IntelliJ IDEA', 'Postman', 'MySQL Workbench'] },
]

export const interests = [
  {
    title: 'Desarrollo backend y arquitectura de software',
    text: 'Aplicaciones backend robustas y escalables con Java y Spring Boot, APIs RESTful estandarizadas (JSON/DTOs) e interés en arquitecturas enterprise y microservicios.',
  },
  {
    title: 'Gestión de bases de datos',
    text: 'Esquemas relacionales (MySQL, MariaDB) con Spring Data JPA e Hibernate, modelado de datos y exploración de soluciones NoSQL como MongoDB.',
  },
  {
    title: 'Ingeniería y buenas prácticas',
    text: 'Código limpio (Clean Code, SOLID), patrones de diseño de Spring como la inyección por constructor, y validación rigurosa de reglas de negocio y seguridad.',
  },
  {
    title: 'Sistemas de gran escala e impacto',
    text: 'Proyectos de alta disponibilidad en banca digital y fintech, e-commerce, y soluciones tecnológicas de impacto social y ambiental.',
  },
]
