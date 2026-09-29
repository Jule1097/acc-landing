import { mount } from '@vue/test-utils'

import App from '../src/App.vue'
import { RESULTS_SECTION_ID, FEATURES_SECTION_ID, HOME_SECTION_ID } from '../src/lib/constants/landing/landing'
import { landingContent } from '../src/lib/content/landing/landing'
import { validateProductionSystemUrl } from '../src/lib/config/buildEnvironment'
import type { LandingNavigationItem } from '../src/types/landing/landing'

const configuredSystemUrl = 'https://sistema.contable.ar'

function mountLandingPage() {
  return mount(App, {
    props: {
      systemUrl: configuredSystemUrl,
    },
  })
}

describe('landing page structure', () => {
  it('renders the approved sections in order with stable identifiers', () => {
    const wrapper = mountLandingPage()
    const sections = wrapper.findAll('main > section').map((section) => section.attributes('id'))

    expect(sections).toEqual([HOME_SECTION_ID, FEATURES_SECTION_ID, RESULTS_SECTION_ID])
  })

  it('renders the required Spanish navigation and product copy', () => {
    const wrapper = mountLandingPage()
    const pageText = wrapper.text().toLowerCase()
    const navigationLabels = landingContent.navigation.map((item: LandingNavigationItem) => item.label)

    expect(wrapper.find('nav').text()).toContain(navigationLabels[0])
    expect(wrapper.find('nav').text()).toContain(navigationLabels[1])
    expect(wrapper.find('nav').text()).toContain(navigationLabels[2])
    expect(pageText).toContain('información contable')
    expect(pageText).toContain('documentos')
    expect(pageText).toContain('información lista para trabajar')
    expect(pageText).toContain('accountant-system')
    expect(pageText).toContain('validá')
    expect(pageText).toContain('exportá')
  })
})

describe('landing page call to action', () => {
  it('renders the configured CTA in the current tab', () => {
    const wrapper = mountLandingPage()
    const cta = wrapper.get('a.site-nav__cta')

    expect(cta.text()).toContain('Ingresar')
    expect(cta.attributes('href')).toBe(configuredSystemUrl)
    expect(cta.attributes('target')).toBeUndefined()
    expect(wrapper.find('.hero__cta').exists()).toBe(false)
  })

  it.each([undefined, '', 'invalid-url', 'ftp://sistema.contable.ar'])('rejects invalid system URL configuration: %s', (value) => {
    expect(() => validateProductionSystemUrl(value)).toThrow()
  })
})

describe('landing page capabilities and outcomes', () => {
  it('renders the three approved capabilities and qualitative results', () => {
    const wrapper = mountLandingPage()
    const pageText = wrapper.text().toLowerCase()

    expect(pageText).toContain('procesamiento asistido de documentos')
    expect(pageText).toContain('control fiscal por período')
    expect(pageText).toContain('información centralizada y exportable')
    expect(pageText).toContain('asistencia de ia')
    expect(pageText).toContain('compartirla con contadores')
    expect(pageText).toContain('menos carga manual')
    expect(pageText).toContain('trazabilidad de comprobantes')
    expect(pageText).not.toMatch(/\b\d+%\b/)
  })
})

describe('landing page mobile navigation', () => {
  it('opens, exposes keyboard names, and closes after selecting a section', async () => {
    const wrapper = mountLandingPage()
    const menuButton = wrapper.get('button.site-nav__toggle')

    expect(menuButton.attributes('aria-expanded')).toBe('false')
    expect(menuButton.attributes('aria-label')).toBeTruthy()

    await menuButton.trigger('click')
    expect(menuButton.attributes('aria-expanded')).toBe('true')
    expect(wrapper.find('.site-nav__list--open').exists()).toBe(true)

    await wrapper.get('a[href="#resultados"]').trigger('click')
    expect(menuButton.attributes('aria-expanded')).toBe('false')
    expect(wrapper.get('a.site-nav__cta').attributes('aria-label')).toBe('Ingresar al sistema contable')
  })
})
