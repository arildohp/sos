import logo from '../../assets/image/logo.svg'
import * as S from './styles'
const Header = () => (
  <S.Header>
    <S.sos>
      <img src={logo} alt="logo" />
      <h1>SOS</h1>
      <p>Unindo quem precisa com quem sabe fazer</p>
    </S.sos>
    <S.navBar>
      <button>Inscrever-se</button>
      <button>Login</button>
      <button className="sejaMembro">Seja membro</button>
    </S.navBar>
  </S.Header>
)

export default Header
