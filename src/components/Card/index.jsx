/* eslint-disable no-unused-vars */
import { Rating } from "../Rating";
import { Container } from "./styles";


export function Card({ title, content, rating, tags, ...rest }) {
  return (
    <Container {...rest}>
      <h5>{title}</h5>
      <Rating stars={rating} />
      <p>{content}</p>
      <div className="tags-wrapper">
        {tags.map((tag, index) => <span key={index}>{tag}</span>)}
      </div>

    </Container>
  )
}