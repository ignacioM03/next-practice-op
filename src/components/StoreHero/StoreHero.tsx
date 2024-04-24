import Head from "next/head";
import { Card, Spacer, Text } from "@nextui-org/react";

export const StoreHero = () => {
  return (
    <>
      <Head>
        <title>Shopping app</title>
      </Head>
      <main>
        <header className="store-hero">
          <Spacer y={2} />
          <Card shadow="sm">
            <Card>
              <Text h1 color="primary" gradient>
                Welcome to NextUI + Next.js Shopping app
              </Text>
              <Text h3>
                This is a simple shopping app built with NextUI and Next.js.
                This is a demo app to showcase NextUI components.
              </Text>
            </Card>
          </Card>
        </header>
      </main>
    </>
  );
};