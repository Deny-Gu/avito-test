import styled from "styled-components";

const ErrorWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 20px;
`;

function Error({ err }: { err: string }) {
  return <ErrorWrapper>{err}</ErrorWrapper>;
}

export default Error;
