import { useParams } from "react-router-dom";

import { Cards } from "../../components/Cards/Cards";
import { gameModes } from "../../utils/game-modes";

export function GamePage() {
  const { pairsCount, mode } = useParams();

  return (
    <>
      <Cards isSimple={mode === gameModes.SIMPLE} pairsCount={parseInt(pairsCount, 10)} previewSeconds={10}></Cards>
    </>
  );
}
