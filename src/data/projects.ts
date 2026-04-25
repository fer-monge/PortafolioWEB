import proy1 from '../assets/images/proy1.avif';
import proy2 from '../assets/images/proy2.jpg';
import proy3 from '../assets/images/proy3.jpg';
import proy4 from '../assets/images/proy4.jpg';
import proy5 from '../assets/images/proy5.webp';

import catieImg1 from '../assets/images/edulogic/img1.jpeg';
import catieImg2 from '../assets/images/edulogic/img2.jpeg';
import catieImg3 from '../assets/images/edulogic/img3.jpeg';
import catieImg4 from '../assets/images/edulogic/img4.jpeg';
import catieImg5 from '../assets/images/edulogic/img5.jpeg';
export interface Project {
  id: string;
  title: string;
  descriptionEs: string;
  descriptionEn: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  coverImage?: string;
  images?: string[];
  isFeatured?: boolean;
}
export const projects: Project[] = [
  {
    id: 'markettico-admin',
    title: 'Markettico - Panel Administrativo',
    descriptionEs:
      'Módulo administrativo de Markettico orientado a la gestión interna de la plataforma, administración de información y control de procesos del sistema.',
    descriptionEn:
      'Administrative module for Markettico focused on internal platform management, information administration and process control.',
    technologies: ['JavaScript', 'Web Development', 'Admin Panel'],
    githubUrl: 'https://github.com/fer-monge/admin_markettico_dev.git',
    coverImage: proy1,
  },
  {
    id: 'markettico-main',
    title: 'Markettico - Sitio Principal',
    descriptionEs:
      'Sitio principal de Markettico desarrollado para presentar la plataforma, sus funcionalidades y permitir la interacción inicial de los usuarios con el sistema.',
    descriptionEn:
      'Main Markettico website developed to present the platform, its features and allow users to interact with the system.',
    technologies: ['Frontend', 'Responsive Design', 'JavaScript'],
    githubUrl: 'https://github.com/fer-monge/main_markettico_oficial_dev.git',
    coverImage: proy2,
  },
  {
    id: 'markettico-seller',
    title: 'Markettico - Módulo de Vendedores',
    descriptionEs:
      'Módulo enfocado en la gestión de vendedores dentro de Markettico, permitiendo administrar información relacionada con productos, ventas y operación del negocio.',
    descriptionEn:
      'Seller-focused module within Markettico, allowing the management of information related to products, sales and business operations.',
    technologies: ['Frontend', 'Business Management', 'JavaScript'],
    githubUrl: 'https://github.com/fer-monge/Seller_Markettico_Oficial-dev.git',
    coverImage: proy3,
  },
  {
    id: 'agencia-autos',
    title: 'Sistema para Agencia de Autos',
    descriptionEs:
      'Proyecto educativo desarrollado con Laravel para una agencia de autos, orientado a la gestión de vehículos, información administrativa y procesos básicos del negocio.',
    descriptionEn:
      'Educational project developed with Laravel for a car dealership, focused on vehicle management, administrative information and basic business processes.',
    technologies: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    coverImage: proy4,
  },
  {
    id: 'periodico-digital',
    title: 'Sistema de Periódico Digital',
    descriptionEs:
      'Proyecto web desarrollado con .NET para la gestión y visualización de contenido informativo, aplicando estructura de datos, lógica de negocio y manejo de información.',
    descriptionEn:
      'Web project developed with .NET for managing and displaying informational content, applying data structure, business logic and information management.',
    technologies: ['.NET', 'C#', 'Web Development'],
    githubUrl: 'https://github.com/fer-monge/Periodico.git',
    coverImage: proy5,
  },
  {
    id: 'catie-inventario',
    title: 'Sistema de Inventario - CATIE',
    descriptionEs:
      'Sistema de inventario desarrollado durante la práctica empresarial para apoyar la gestión, control y organización de recursos internos del CATIE.',
    descriptionEn:
      'Inventory system developed during the professional internship to support the management, control and organization of CATIE internal resources.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    demoUrl: 'https://catie.edulogicsoined.com/login',
    coverImage: catieImg1,
    images: [catieImg1, catieImg2, catieImg3, catieImg4, catieImg5],
    isFeatured: true,
  },
];