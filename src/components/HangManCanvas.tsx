import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { Count, DRAW_LIST } from "@/constants";
import { drawHangman } from "@/lib/utils/draw";

interface Props {
  count: Count;
}

const HangManCanvas = ({ count }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    if (!context || count === 0) {
      return;
    }

    drawHangman(context, DRAW_LIST[count]);
  }, [count]);

  return (
    <Container>
      <canvas ref={canvasRef} width={300} height={300} />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 80px;
`;

export default HangManCanvas;
