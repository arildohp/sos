import * as S from './styles'
import brasil from '../../assets/image/brasil.png'
import eletronic from '../../assets/image/eletrônico.png'
import reforma from '../../assets/image/reforma 1.png'
const Product = () => (
  <>
    <S.Banner>
      <S.information>
        <h2>simples, facil e seguro</h2>
        <p>
          você precisa de reparo? então você esta no lugar certo aqui na sos
          encontra profissionais em todo brasil no conforto do seu lar e ainda
          ainda pode parcelar em ate 10x no cartao de credito
        </p>
        <button>SAIBA MAIS</button>
      </S.information>
      <S.Image>
        <img src={brasil} alt="brasil" />
      </S.Image>
    </S.Banner>
    <S.Info>
      <h2>encontre milhares de profissionais pertinho de você</h2>
      <p>
        na SOS você encontra os profissionais mais qualificados do mercado
        segurança e o melhor no conforto do seu lar!
      </p>
    </S.Info>
    <S.Eletronicos>
      <S.Img2>
        <img src={eletronic} alt="eletronicos" />
      </S.Img2>
      <S.Infos>
        <h2>eletrônicos</h2>
        <p>
          Seu equipamentos eletrônicos apresentando problemas tecnicos? não se
          preocupe você esta no lugar certo,negocie com milhares de
          profissionais em todo territorio nacional.
          Celular,televisão,geladeira,maquina de lavar roupa e muitos outros
          equipamentos eletrônicos seja qual for seu defeito aqui você encontra
          profissionais qualificados com garantia de qualidade.
        </p>
        <button>SAIBA MAIS</button>
      </S.Infos>
      <S.Infos2>
        <h2>construção/reformas</h2>
        <p>
          vai construir ou reformar?aqui você encontra milhares de profissionais
          qualificados com os melhores preços do mercado, seja no campo ou na
          cidade,na SOS você encontra qualidade e segurança para sua contrução e
          reforma.
        </p>
        <button>SAIBA MAIS</button>
      </S.Infos2>
      <S.img3>
        <img src={reforma} alt="tudo para reforma e construção" />
      </S.img3>
    </S.Eletronicos>
  </>
)

export default Product
