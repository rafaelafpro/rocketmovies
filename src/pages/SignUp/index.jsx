import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';


export function SignUp() {
  return (
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h4>Crie sua conta</h4>
        <Input icon={FiUser} type="text" placeholder="Nome" />
        <Input icon={FiMail} type="text" placeholder="E-mail" />
        <Input icon={FiLock} type="password" placeholder="Senha" />
        <Button title="Cadastrar" />
        <a href="/"><FiArrowLeft size="20" /> Voltar para o login</a>
      </Form>
      <Background />
    </Container>

  );
}
