import { Container } from "./styles"

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container
      disabled={loading}
      type="button"
      {...rest}>
      {loading ? "Carregando..." : title}
    </Container>
  )
}