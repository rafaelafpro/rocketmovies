import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiLock, FiMail } from 'react-icons/fi';


export function SignIn() {
  return (
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h4>Faça seu login</h4>
        <Input icon={FiMail} type="text" placeholder="E-mail" />
        <Input icon={FiLock} type="password" placeholder="Senha" />
        <Button title="Entrar" />
        <a href="/">Criar Conta</a>
      </Form>
      <Background />
    </Container>

  );
}
