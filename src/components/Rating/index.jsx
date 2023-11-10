import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Rating({ stars }) {
  const n = stars;
  const starElements = [];

  for (let i = 0; i < 5; i++) {
    if (i < n) {
      starElements.push(<AiFillStar key={i} />)
    } else {
      starElements.push(<AiOutlineStar key={i} />)
    }
  }


  return (
    <Container>

      {starElements}

    </Container>
  )
}