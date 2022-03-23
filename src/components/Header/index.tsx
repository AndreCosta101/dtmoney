import logoImg from '../../assets/logo.svg';

// eslint-disable-next-line import/no-unresolved
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
