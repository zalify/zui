'use client'
import { styles as componentStyles } from '../../generated/styles'

export const accentColors = [
  'neutral',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
] as const

export type AccentColor = (typeof accentColors)[number]

export const grayColors = ['neutral', 'mauve', 'olive', 'sage', 'sand', 'slate'] as const
export type GrayColor = (typeof grayColors)[number]

export const radii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
export type BorderRadius = (typeof radii)[number]

export interface ZalifyProviderProps {
  children: React.ReactNode
  accentColor?: AccentColor
  grayColor?: GrayColor
  borderRadius?: BorderRadius
}

const themeStyles = generateThemeCSS()

export function ZalifyProvider({
  children,
  accentColor = 'neutral',
  grayColor = 'neutral',
  borderRadius = 'sm',
}: ZalifyProviderProps) {
  return (
    <>
      <style id="zalify-ui" dangerouslySetInnerHTML={{ __html: componentStyles + themeStyles }} />
      <div
        data-accent-color={accentColor}
        data-gray-color={grayColor}
        data-radius={borderRadius}
        style={{ display: 'contents' }}
      >
        {children}
      </div>
    </>
  )
}

function generateThemeCSS(): string {
  const numberedKeys = Array.from({ length: 12 }, (_, i) => `${i + 1}`)
  const alphaKeys = Array.from({ length: 12 }, (_, i) => `a${i + 1}`)
  const variantKeys = [
    'solid-bg',
    'solid-bg-hover',
    'solid-bg-active',
    'solid-fg',
    'subtle-bg',
    'subtle-bg-hover',
    'subtle-bg-active',
    'subtle-fg',
    'surface-bg',
    'surface-bg-hover',
    'surface-bg-active',
    'surface-fg',
    'surface-border',
    'surface-border-hover',
    'surface-border-active',
    'outline-bg',
    'outline-bg-hover',
    'outline-bg-active',
    'outline-fg',
    'outline-border',
    'outline-border-hover',
    'outline-border-active',
    'plain-bg',
    'plain-bg-hover',
    'plain-bg-active',
    'plain-fg',
  ]

  const accentKeys = [...numberedKeys, ...alphaKeys, ...variantKeys]
  const grayKeys = [...numberedKeys, ...alphaKeys]

  const accentVars = accentColors
    .map((color) => {
      const vars = accentKeys
        .map((key) => `--colors-color-palette-${key}: var(--colors-${color}-${key});`)
        .join('\n    ')
      return `[data-accent-color="${color}"] {\n    ${vars}\n  }`
    })
    .join('\n  ')

  const grayVars = grayColors
    .map((color) => {
      const vars = grayKeys
        .map((key) => `--colors-gray-${key}: var(--colors-${color}-${key});`)
        .join('\n    ')
      return `[data-gray-color="${color}"] {\n    ${vars}\n  }`
    })
    .join('\n  ')

  const radiusConfigs = [
    { size: 'none', l1: 'none', l2: 'none', l3: 'none' },
    { size: 'xs', l1: '2xs', l2: 'xs', l3: 'sm' },
    { size: 'sm', l1: 'xs', l2: 'sm', l3: 'md' },
    { size: 'md', l1: 'sm', l2: 'md', l3: 'lg' },
    { size: 'lg', l1: 'md', l2: 'lg', l3: 'xl' },
    { size: 'xl', l1: 'lg', l2: 'xl', l3: '2xl' },
    { size: '2xl', l1: 'xl', l2: '2xl', l3: '3xl' },
  ]

  const radiusVars = radiusConfigs
    .map(
      ({ size, l1, l2, l3 }) =>
        `[data-radius="${size}"] {\n    --radii-l1: var(--radii-${l1});\n    --radii-l2: var(--radii-${l2});\n    --radii-l3: var(--radii-${l3});\n  }`,
    )
    .join('\n  ')

  return `\n@layer tokens {\n  ${accentVars}\n  ${grayVars}\n  ${radiusVars}\n}\n`
}
