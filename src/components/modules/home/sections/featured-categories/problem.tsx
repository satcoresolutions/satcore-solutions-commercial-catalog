import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import ProblemContent
  from "./components/problem-content";

import ProblemList
  from "./components/problem-list";

export default function Problem() {
  return (
    <Section
      id="problem"
      variant="transparent"
      spacing="sm"
    >
      <Container>
        <div
          className="
            mx-auto
            max-w-5xl
          "
        >
          <ProblemContent />

          <ProblemList />
        </div>
      </Container>
    </Section>
  );
}