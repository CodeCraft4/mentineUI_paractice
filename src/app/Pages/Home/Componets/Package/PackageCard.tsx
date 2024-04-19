import { USER_CARD } from "@/constant/content";
import classes from "./package.module.css";
import {
  Card,
  Avatar,
  Text,
  Group,
  Button,
  Grid,
  GridCol,
  Container,
  Box,
} from "@mantine/core";
import {
  IconArrowRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function UserCardImage() {
  return (
    <>
      <Container size="md" mt={"xl"} pb={"lg"}>
        <Text ta={"center"} fz={"h1"} fw={800} p={"lg"} c={"white"}>
          Package
        </Text>
        <Grid>
          {USER_CARD.map((item,i) => (
            <GridCol span={{ base: 12, md: 4, lg: 4 , sm:6}} key={i}>
              <Card
                withBorder
                padding="xl"
                radius="md"
                className={classes.card}
                shadow="xl"
              >
                <Card.Section
                  h={140}
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/4482837/pexels-photo-4482837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                    backgroundSize: "cover",
                  }}
                />
                <Avatar
                  src={item.profile}
                  size={80}
                  radius={80}
                  mx="auto"
                  mt={-40}
                  className={classes.avatar}
                />

                <Text ta="center" fz="h3" c="orange">{item.title}</Text>
                <Text ta="center" fz="sm" c="dimmed">
                  {item.description}
                </Text>
                <Group mt="md" justify="center" gap={30}>
                  Followers {item.follower} K
                </Group>
                <Group mt="md" justify="center" gap={30}>
                  Follows {item.follows} K
                </Group>
                <Box
                  display={"flex"}
                  style={{
                    alignItems: "center",
                  }}
                  mt={"md"}
                  p={"md"}
                  c={"gray"}
                >
                  Follows on <IconArrowRight />
                  <IconBrandFacebook color="orange" />
                  <IconBrandInstagram color="orange" />
                  <IconBrandTwitter color="orange" />
                  <IconBrandLinkedin color="orange" />
                </Box>
                <Button
                  variant="gradient"
                  mt={"xl"}
                  gradient={{ from: "blue", to: "red", deg: 90 }}
                >
                  Contact
                </Button>
              </Card>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </>
  );
}
