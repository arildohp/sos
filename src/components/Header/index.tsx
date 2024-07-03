import logo from '../../assets/image/logo.svg'
import * as S from './styles'
const Header = () => (
  <S.Header>
    <S.sos>
      <img src={logo} alt="logo" />
      <h1>SOS</h1>
      <p>Unindo quem precisa com quem sabe fazer</p>
    </S.sos>
    <nav>
      <S.navBar>
        <S.buttonLink>
          <button>Inscrever-se</button>
        </S.buttonLink>
        <S.buttonLink>
          <button>Login</button>
        </S.buttonLink>
        <S.buttonLink>
          <button>Seja membro</button>
        </S.buttonLink>
      </S.navBar>
    </nav>
  </S.Header>
)

export default Header
