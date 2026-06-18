"use client";

import { problemContent } from "../content/problem.content";
import { useLanguage } from "@/hooks/use-language";

export default function ProblemContent() {
  const lang = useLanguage();
  const content = problemContent[lang];

  return (
    <div
      className="
        mx-auto
        max-w-3xl
      "
    >
      <p
        className="
          uppercase
        "
        style={{
          color: "var(--color-primary)",
        }}
      >
        {content.eyebrow}
      </p>

      <h2
        className="
          mt-4
          max-w-3xl
        "
      >
        {content.heading}
      </h2>

      <p
        className="
          mt-6
          max-w-2xl
        "
      >
        {content.summary}
      </p>
    </div>
  );
}