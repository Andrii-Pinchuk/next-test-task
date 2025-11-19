import { Container, Stack } from "@mui/material";
import Image from "next/image";
import {
  BodyText,
  ContentStack,
  InlineLink,
  PageContainer,
  PageTitle,
  RoundedButton,
  TextSection,
} from "@/components/ui";

export default function Home() {
  return (
    <PageContainer>
      <Container maxWidth="md">
        <ContentStack spacing={8}>
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />

          <TextSection spacing={3}>
            <PageTitle variant="h3" component="h1">
              To get started, edit the page.tsx file.
            </PageTitle>

            <BodyText variant="body1">
              Looking for a starting point or more instructions? Head over to{" "}
              <InlineLink href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
                Templates
              </InlineLink>{" "}
              or the{" "}
              <InlineLink href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
                Learning
              </InlineLink>{" "}
              center.
            </BodyText>
          </TextSection>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <RoundedButton
              variant="contained"
              component="a"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy Now
            </RoundedButton>

            <RoundedButton
              variant="outlined"
              component="a"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </RoundedButton>
          </Stack>
        </ContentStack>
      </Container>
    </PageContainer>
  );
}
