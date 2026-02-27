import * as Examples from '@zalify-ui/react/examples'
import { camelCase, pascalCase } from 'change-case'

const componentRegistry = new Map()

Object.entries(Examples).forEach(([componentName, componentExamples]) => {
  if (typeof componentExamples === 'object') {
    Object.entries(componentExamples).forEach(([exampleName, ExampleComponent]) => {
      const key = `${componentName.toLowerCase()}-${exampleName.toLowerCase()}`
      componentRegistry.set(key, ExampleComponent)
    })
  }
})

interface Props {
  component: string
  name: string
}

export const getComponentExample = ({ component, name }: Props) => {
  const key = `${pascalCase(component).toLowerCase()}-${camelCase(name).toLowerCase()}`
  return componentRegistry.get(key)
}
