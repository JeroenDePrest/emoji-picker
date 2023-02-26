import React from "react";
// import * as emojiNames from "emojis-keywords";
import * as emojis from "emojis-list";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import * as emojis from "emojis";

function App() {
  const getRandomEmoji = () => {
    const randomIndex = Math.round(Math.random() * emojis.length);
    return emojis[randomIndex];
  };
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
            fontFamily="Oswald"
            variant="h1"
            fontSize={{ xs: "4rem" }}
            textTransform="uppercase"
            textAlign="center"
            color="#28292b"
            fontWeight={700}
          >
            Your random emoji is
          </Typography>
        </Grid>
        <Grid item mt={{ xs: 4, md: 8 }}>
          <Box fontSize="10rem">{getRandomEmoji()}</Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
