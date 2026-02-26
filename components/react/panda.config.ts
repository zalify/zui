import { defineConfig } from '@pandacss/dev'
import { plugin, preset } from '@zalify-ui/preset'

export default defineConfig({
  presets: [preset],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  jsxFramework: 'react',
  plugins: [plugin],
  globalCss: {
    extend: {
      html: {
        colorPalette: 'neutral',
      },
    },
  },
  staticCss: {
    recipes: '*',
    css: [
      {
        properties: {
          colorPalette: [
            'amber',
            'blue',
            'bronze',
            'brown',
            'crimson',
            'cyan',
            'gold',
            'grass',
            'green',
            'indigo',
            'iris',
            'jade',
            'lime',
            'mauve',
            'mint',
            'neutral',
            'olive',
            'orange',
            'pink',
            'plum',
            'purple',
            'red',
            'ruby',
            'sage',
            'sand',
            'sky',
            'slate',
            'teal',
            'tomato',
            'violet',
            'yellow',
          ],
        },
      },
    ],
  },
})
