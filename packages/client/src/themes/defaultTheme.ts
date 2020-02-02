import { colors } from './colors'

export const theme = {
  colors,
}

type ITheme = typeof theme

declare module 'styled-components/native' {
  interface DefaultTheme extends ITheme {}
}
