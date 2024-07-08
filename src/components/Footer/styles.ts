import styled from 'styled-components'
import { colors } from '../../styles'

export const Footer = styled.div`
  display: flex;
  background-color: ${colors.lightBlue};
  height: 260px;
  align-items: center;
  justify-content: space-between;
`

export const cardFooter = styled.div`
  margin-left: 160px;
`

export const socialFooter = styled.div`
  margin-right: 160px;

  button {
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    border-radius: 5px;
    align-items: center;
    height: 40px;
    font-weight: bold;
    border: none;
    width: 100px;
    cursor: pointer;
    margin-left: 16px;
  }

  input {
    margin: 16px 0;
    height: 40px;
    border-color: ${colors.darkBlue};
    width: 356px;
    border-radius: 5px;
  }
`
