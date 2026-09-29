export type FeatureTone = 'blue' | 'accent'
export type FeatureIcon = 'document' | 'validation' | 'export'

export interface LandingNavigationItem {
  label: string
  href: string
}

export interface LandingFeatureItem {
  title: string
  description: string
  tone: FeatureTone
  icon: FeatureIcon
}

export interface LandingProcessItem {
  label: string
  description: string
}

export interface LandingResultItem {
  title: string
  description: string
}

export interface LandingContent {
  brand: {
    name: string
    descriptor: string
  }
  navigation: LandingNavigationItem[]
  accessibility: {
    navigationLabel: string
    openMenuLabel: string
    closeMenuLabel: string
    ctaLabel: string
    backToTopLabel: string
  }
  hero: {
    heading: string
    ctaLabel: string
    workflow: {
      description: string
    }
  }
  process: {
    items: LandingProcessItem[]
  }
  features: {
    heading: string
    supportingText: string
    items: LandingFeatureItem[]
  }
  results: {
    heading: string
    items: LandingResultItem[]
  }
  footer: {
    description: string
  }
  seo: {
    title: string
    description: string
  }
}
