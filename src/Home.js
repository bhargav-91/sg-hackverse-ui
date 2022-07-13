import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div>
      <Container>
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          sx={{ marginTop: 20, marginLeft: 20 }}
        >
          Welcome to Bloackchain-WatchDog
        </Typography>
      </Container>
    </div>
  );
}
