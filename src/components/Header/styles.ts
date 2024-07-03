import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  background-color: ${colors.lightBlue};
  height: 140px;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`
export const sos = styled.div`
  display: flex;
  align-items: center;
`

export const navBar = styled.ul`
  display: flex;
`
export const buttonLink = styled.li`
  margin-right: 20px;
`
