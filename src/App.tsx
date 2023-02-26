import React, { useEffect, useState } from "react";
// import * as emojiNames from "emojis-keywords";
// import * as emojis from "emojis-list";
// import * as emojisNames from "emoji-names";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
// import * as emojis from "emojis";
import emojis from "./emojis.json";

interface Emoji {
  emoji: string;
  name: string;
  shortname: string;
  unicode: string;
  html: string;
  category: string;
  order: string;
}

function App() {
  const [emoji, setEmoji] = useState<string>("");
  const [emojiName, setEmojiName] = useState<string>("");
  const getRandomEmoji = () => {
    const randomIndex = Math.round(Math.random() * emojis.length);

    return emojis[randomIndex];
  };

  const setEmojiState = () => {
    const emoji = getRandomEmoji();
    setEmojiName(emoji.name);
    setEmoji(emoji.emoji);
  };

  useEffect(() => {
    setEmojiState();
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
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={3}
          >
            <Box fontSize="10rem">{emoji}</Box>
            <Typography
              variant="h2"
              fontSize="2rem"
              textAlign="center"
            >{`:${emojiName}:`}</Typography>
          </Box>
        </Grid>
        <Grid item mt={5}>
          <Button
            variant="contained"
            sx={{ fontFamily: "Roboto" }}
            startIcon={<RefreshIcon />}
            size="large"
            onClick={setEmojiState}
          >
            Role again
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
