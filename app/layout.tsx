import "@mantine/core/styles.css";
import React from "react";
import {MantineProvider, ColorSchemeScript, AppShell, AppShellMain, AppShellHeader, Group, Anchor, Divider, Button} from "@mantine/core";
import { theme } from "../theme";
import Link from "next/link";

export const runtime = 'edge'

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};


export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
            <AppShell
                header={{
                  height: '60px'
                }}
                padding='10px'
            >
                <AppShellHeader>
                    <Group h="100%" justify="space-between" px="sm">
                        <Link href="/">Pozyczalnia</Link>
                        <Group h="90%">
                            <Anchor component={Link} href="#">Zaloguj się</Anchor>
                            <Divider orientation="vertical"/>
                            <Button component={Link} href="/signup">Zarejestruj się</Button>
                        </Group>
                    </Group>
                </AppShellHeader>
                <AppShellMain>
                    {children}
                </AppShellMain>
            </AppShell>
            </MantineProvider>
      </body>
    </html>
  );
}
