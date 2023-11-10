import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container className="oi">
      {Icon && <Icon size='20' />}
      <input
        onFocus={(e) => {
          e.target.parentElement.classList.add("focus-util");
          e.target.previousElementSibling.classList.add("focus-util")
        }}
        onBlur={(e) => {
          e.target.parentElement.classList.remove("focus-util");
          e.target.previousElementSibling.classList.remove("focus-util")
        }}
        {...rest} />
    </Container>
  )
}
