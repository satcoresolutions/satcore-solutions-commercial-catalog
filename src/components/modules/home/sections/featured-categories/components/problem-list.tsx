"use client";

import { problemContent } from "../content/problem.content";
import { useLanguage } from "@/hooks/use-language";
import ProblemItem from "./problem-item";

export default function ProblemList() {
  const lang = useLanguage();
  const content = problemContent[lang];

  return (
    <div
      className="
        mt-10
      "
    >
      {content.consequences.map((item, index) => (
        <ProblemItem
          key={item.title}
          index={index + 1}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}