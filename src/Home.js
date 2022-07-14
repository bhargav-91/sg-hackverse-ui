import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";

const logo = require("./block-chain-watchdog.png");
const background = require("./wolf-watch.png");
export default function Home() {
  return (
    <div>
      <Container className="image-container">
        <div className="image-div">
          <img src={logo} alt="wolf" className="image-main" />
          <img src={background} alt="wolf-back" className="image-back" />
        </div>
      </Container>
    </div>
  );
}
