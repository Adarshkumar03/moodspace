import { UnstyledButton, Group, Avatar, Text, rem, Title } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./UserButton.module.css";
import useAuthStore from "../../stores/authStore";

export function UserButton() {
  const uname = useAuthStore((store) => store.uname);
  const uemail = useAuthStore((store) => store.uemail);
  return (
    <UnstyledButton className={classes.user} mb={10}>
      <Group>
        <Avatar radius="xl" size="md" color="#EDF2F4">
          {uname[0].toUpperCase()}
        </Avatar>

        <div style={{ flex: 1 }}>
          <Title order={5} c="#EDF2F4">
            {uname}
          </Title>
        </div>
      </Group>
    </UnstyledButton>
  );
}
