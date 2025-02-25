import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <>
      <Html>
        <Preview>Welcome!</Preview>
        <Tailwind>
          <Body className="bg-white">
            <Container>
              <Text className="font-bold text-3xl">Hello {name} </Text>
              <Link href="test">TEST</Link>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
};

const body: CSSProperties = {
  backgroundColor: "#fff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
