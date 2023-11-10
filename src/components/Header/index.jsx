import { Input } from "../Input";
import { Container } from "./styles";
import { Avatar } from "../Avatar";


export function Header({ ...rest }) {
  return (
    <Container {...rest}>
      <h4>RocketMovies</h4>
      <Input type="text" placeholder="Pesquisar pelo título" />
      <Avatar />
    </Container>
  )
}