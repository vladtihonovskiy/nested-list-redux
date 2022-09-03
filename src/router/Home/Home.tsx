import React from "react";
import { Container, Grid } from "@mui/material";
import List from "../../components/List/List";

const Home = () => (
  <Container sx={{ minHeight: "100vh" }} maxWidth="xl">
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexWrap="wrap"
      sx={{ height: "100%", pt: 20 }}
    >
      <h1>A Nested List Editor</h1>
      <List />
    </Grid>
  </Container>
);

export default Home;
