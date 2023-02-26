import React, { useEffect, useState } from "react";
// import * as emojiNames from "emojis-keywords";
import * as emojis from "emojis-list";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
// import * as emojis from "emojis";

function App() {
  const [emoji, setEmoji] = useState("");
  const getRandomEmoji = () => {
    const randomIndex = Math.round(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  useEffect(() => {
    setEmoji(getRandomEmoji());
  }, []);
  return (
    <Container>
      <Grid
        display="flex"
        mt={5}
        alignItems="center"
        flexDirection="column"
        container
      >
        <Grid item>
          <Typography
            variant="h1"
            fontSize={{ xs: "4rem" }}
            textTransform="uppercase"
            textAlign="center"
            color="text.primary"
            fontWeight={700}
          >
            Your random emoji is
          </Typography>
        </Grid>
        <Grid item mt={{ xs: 4, md: 8 }}>
          <Box fontSize="10rem">{emoji}</Box>
        </Grid>
        <Grid item mt={5}>
          <Button
            variant="contained"
            sx={{ fontFamily: "Roboto" }}
            startIcon={<RefreshIcon />}
            size="large"
            onClick={() => setEmoji(getRandomEmoji())}
          >
            Role again
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
