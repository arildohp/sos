import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  border-radius: 5px;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.darkBlue};
  color: ${colors.white};
  border-radius: 5px;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
`
