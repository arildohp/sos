import styled from 'styled-components'
import { colors } from '../../styles'

export const Banner = styled.div`
  justify-content: space-between;
  display: flex;
`

export const Container = styled.div`
  margin: 0 80px;
  width: 100%
  height: 100%;
  display: flex;
`
export const information = styled.div`
  display: block;
  align-items: center;

  h2 {
    color: ${colors.darkBlue};
    font-weight: bold;
    font-size: 16px;
    display: flex;
    margin-top: 200px;
  }

  p {
    font-size: 16px;
    margin: 30px 0;
    max-width: 380px;
    height: 90px;
    display: flex;
  }

  button {
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    border-radius: 5px;
    align-items: center;
    height: 40px;
    font-weight: bold;
    border: none;
    width: 100px;
    margin-left: 100px;
    cursor: pointer;
  }
`
