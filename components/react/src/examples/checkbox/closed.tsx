import { forwardRef } from 'react'
import { Checkbox as StyledCheckbox, VisuallyHidden } from '@zalify-ui/react'

export type { CheckboxCheckedState } from '@ark-ui/react/checkbox'

export interface CheckboxProps extends StyledCheckbox.RootProps {
  inputProps?: StyledCheckbox.HiddenInputProps
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(props, ref) {
  const { children, inputProps, ...rootProps } = props
  return (
    <StyledCheckbox.Root {...rootProps}>
      <StyledCheckbox.HiddenInput ref={ref} {...inputProps} />
      <StyledCheckbox.Control>
        <StyledCheckbox.Indicator />
      </StyledCheckbox.Control>
      {children && <StyledCheckbox.Label>{children}</StyledCheckbox.Label>}
      {props['aria-label'] && (
        <StyledCheckbox.Label asChild>
          <VisuallyHidden>{props['aria-label']}</VisuallyHidden>
        </StyledCheckbox.Label>
      )}
    </StyledCheckbox.Root>
  )
})
