import { Flex, Grid } from "@radix-ui/themes";
import HomeItems from "./HomeItems";

export default function Home() {
  return (
    <Grid>
      <Flex>
        <HomeItems />
      </Flex>
    </Grid>
  );
}
