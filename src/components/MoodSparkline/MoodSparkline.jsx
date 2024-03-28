import { Sparkline } from "@mantine/charts";

import classes from "./sparkline.module.css";
import { Stack, Title } from "@mantine/core";
export default function MoodSparkline({ data }) {
  return (
    <div>
      {data ? (
        <Stack gap="sm">
          <Title order={3} ta="center">
            Mood trend
          </Title>
          <Sparkline
            data={data}
            w={200}
            h={60}
            mx="auto"
            className={classes.root}
            color="#05372C"
          />
        </Stack>
      ) : (
        <div>No mood data found for this month.</div>
      )}
    </div>
  );
}
