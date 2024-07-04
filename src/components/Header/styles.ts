import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  background-color: ${colors.lightBlue};
  height: 140px;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  display: flex;
`
export const sos = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 80px;
  }

  h1 {
    font-size: 90px;
    margin: 0 6px;
  }

  p {
    width: 154px;
  }
`

export const navBar = styled.ul`
  display: flex;

  button {
    border-radius: 50px;
    height: 50px;
    margin-right: 20px;
    width: 200px;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  .sejaMembro {
    background-color: ${colors.darkBlue};
    color: ${colors.white};
  }
`
