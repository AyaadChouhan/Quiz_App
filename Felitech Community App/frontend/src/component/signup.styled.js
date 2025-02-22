import styled from "styled-components";
export const H1 = styled.h1 `
  color: white;
  font-size: 2.5rem;
`;
export const MainContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  width: 100%;
  background: rgb(22, 15, 40);

  input {
    border-radius: 10px;
    border: none;
    padding: 15px;
    color: white;
    background: rgb(73, 68, 87);
  }
`;
export const Span = styled.span `
  display: flex;
  align-items: center;
  color: white;
  gap: 10px;

  a {
    color: rgb(95, 62, 188);
  }
`;
export const ImageContainer = styled.div `
  overflow: hidden; /* Ensures the image doesn't overflow */
  margin: 15px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%; /* Makes the image take the full width of the container */
    height: 100%; /* Makes the image take the full height of the container */
    object-fit: cover; /* Ensures the image is cropped to fit the container proportionally */
    display: block;
  }
`;
export const ElementsContainer = styled.div `
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin: 50px;
  input {
    font-size: 1.2rem;
  }
  span {
    height: fit-content;
  }
`;
export const NamesContainer = styled.div `
  display: flex;
  text-align: center;
  gap: 2%;

  #lastName {
    width: 48%;
  }
  #firstName {
    width: 48%;
  }
`;
export const Button = styled.button `
  outline: none;
  background: rgb(95, 62, 188);
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 15px 20px;
  text-align: center;
  color: white;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease, box-shadow 0.2s ease;

  &:hover {
    background: linear-gradient(90deg, rgb(73, 43, 150), rgb(130, 89, 255));
    transform: translateY(-2px); /* Adds a lifting effect */
    box-shadow: 0 15px 25px rgba(95, 62, 188, 0.6); /* More pronounced glow */
  }

  &:active {
    transform: translateY(2px) scale(0.98); /* Slight press effect */
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2); /* Adds inner shadow */
    background: linear-gradient(
      90deg,
      rgb(95, 62, 188),
      rgb(73, 43, 150)
    ); /* Reverse gradient */
  }
`;
