import {
  FEATURES_SECTION_ID,
  HOME_SECTION_ID,
  RESULTS_SECTION_ID,
} from '@/lib/constants/landing/landing'
import type { LandingContent } from '@/types/landing/landing'

export const landingContent: LandingContent = {
  brand: {
    name: 'Accountant-system',
    descriptor: 'Sistema contable',
  },
  navigation: [
    { label: 'Inicio', href: `#${HOME_SECTION_ID}` },
    { label: 'Funcionalidades', href: `#${FEATURES_SECTION_ID}` },
    { label: 'Resultados', href: `#${RESULTS_SECTION_ID}` },
  ],
  accessibility: {
    navigationLabel: 'Navegación principal',
    openMenuLabel: 'Abrir menú',
    closeMenuLabel: 'Cerrar menú',
    ctaLabel: 'Ingresar al sistema contable',
    backToTopLabel: 'Volver al inicio',
  },
  hero: {
    heading: 'De tus comprobantes a información lista para trabajar.',
    ctaLabel: 'Ingresar',
    workflow: {
      description: 'Un flujo que mejora tu día a día.',
    },
  },
  process: {
    items: [
      { label: 'Adjuntá', description: 'Sumá tus comprobantes.' },
      { label: 'Procesá', description: 'La IA extrae y prellena la información.' },
      { label: 'Validá', description: 'Revisá la información.' },
      { label: 'Guardá', description: 'Confirmá cuando esté correcta.' },
      { label: 'Exportá', description: 'Compartila cuando la necesites.' },
    ],
  },
  features: {
    heading: 'Herramienta para trabajar con claridad.',
    supportingText: 'Procesa tus documentos fiscales y no fiscales en un solo lugar, desde la carga hasta la exportación.',
    items: [
      {
        title: 'Procesamiento asistido de documentos',
        description: 'La asistencia de IA ayuda a extraer y prellenar datos de comprobantes. Tú mantienes la revisión y el control antes de confirmar la información.',
        tone: 'blue',
        icon: 'document',
      },
      {
        title: 'Control fiscal por período',
        description: 'Organiza comprobantes, impuestos y períodos para consultar la información necesaria con mayor claridad.',
        tone: 'accent',
        icon: 'validation',
      },
      {
        title: 'Información centralizada y exportable',
        description: 'Reúne la información contable en un mismo lugar y expórtala para compartirla con contadores.',
        tone: 'blue',
        icon: 'export',
      },
    ],
  },
  results: {
    heading: 'Mejora tu dia a dia contable.',
    items: [
      {
        title: 'Menos carga manual',
        description: 'Reduce la repetición al registrar información de comprobantes.',
      },
      {
        title: 'Información organizada por período',
        description: 'Consulta cada período con la información reunida en un mismo lugar.',
      },
      {
        title: 'Trazabilidad de comprobantes',
        description: 'Sigue el recorrido de tus comprobantes y revisa su información.',
      },
      {
        title: 'Lista para revisar y compartir',
        description: 'Exporta la información contable cuando necesites trabajar con tus contadores.',
      },
    ],
  },
  footer: {
    description: 'Accountant-system'
  },
  seo: {
    title: 'Accountant-system',
    description: 'Adjunta, valida, guarda y exporta tu información contable desde un mismo lugar.',
  },
}
