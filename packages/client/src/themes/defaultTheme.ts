import { colors } from './colors'
import baseStyled, { ThemedStyledInterface } from 'styled-components'

export const theme = {
  colors,
}

type ITheme = typeof theme

declare module 'styled-components/native' {
  interface DefaultTheme extends ITheme {}
}

// export const styled = baseStyled as ThemedStyledInterface<typeof theme>
