import * as S from './styles'
import brasil from '../../assets/image/brasil.png'
import { ButtonLink } from '../Button/styles'
import { link } from 'fs'
import Header from '../Header'
const Product = () => (
  <S.Banner>
    <S.Container>
      <S.information>
        <h2>simples, facil e seguro</h2>
        <p>
          você precisa de reparo? então você esta no lugar certo aqui na sos
          você encontra profissionais em todo brasil no conforto do seu lar e
          ainda pode parcelar em ate 10x no cartao de credito
        </p>
        <button>SAIBA MAIS</button>
      </S.information>
      <div>
        <img src={brasil} alt="brasil" />
      </div>
    </S.Container>
  </S.Banner>
)

export default Product
