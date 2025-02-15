import styled from "styled-components";

const NotFoundWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`;

function NotFoundPage() {
  return <NotFoundWrapper>Страница не найдена 404</NotFoundWrapper>;
}

export default NotFoundPage;
