import { Container, Title, Text, Button } from "@mantine/core";
import { IconBrandGithub, IconShoppingCart } from "@tabler/icons-react";
import classes from "./Header.module.css";


export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}
                size="xl"
              >
                fully featured
              </Text>{" "}
              React components library
            </Title>

            <Text className={classes.description} mt={30} >
              Build fully functional accessible web applications with ease –
              Mantine includes more than 100 customizable components and hooks
              to cover you in any situation. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Error quo vitae suscipit!
              Laboriosam, ab praesentium tenetur vitae porro repellat expedita?
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="xl"
              className={classes.control}
              mt={40}
              mx={14}
            >
              <IconShoppingCart/> Get started
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "black", to: "pink" }}
              size="xl"
              className={classes.control}
              mt={40}
            >
            <IconBrandGithub/>  Github
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
