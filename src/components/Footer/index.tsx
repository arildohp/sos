import card from '../../assets/image/pagamento.png'
import social from '../../assets/image/social.png'

import * as S from './styles'
const Footer = () => (
  <>
    <S.Footer>
      <S.cardFooter>
        <img src={card} alt="" />
      </S.cardFooter>
      <S.socialFooter>
        <p>inscreva-se para ficar por dentro das novidades!</p>
        <form action="">
          <input id="email" type="email" />
          <button>Enviar</button>
        </form>
        <img src={social} alt="redes sociais" />
      </S.socialFooter>
    </S.Footer>
  </>
)
export default Footer
