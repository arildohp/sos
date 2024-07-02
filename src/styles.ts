import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightBlue: '#B8EAFF',
  darkBlue: '#0F24E9',
  yellow: 'F0F351',
  white: '#FFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: hind-madurai, sans-serif;
  }
`
