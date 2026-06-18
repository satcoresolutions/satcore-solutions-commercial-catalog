interface ProblemItemProps {
  index: number;

  title: string;

  description: string;
}

export default function ProblemItem({
  index,
  title,
  description,
}: ProblemItemProps) {
  return (
    <>
      <div
        className="
          py-2
          text-left
        "
      >
        <span
          className="
            text-sm
            font-medium
          "
          style={{
            color:
              "var(--text-muted)",
          }}
        >
          {String(index).padStart(
            2,
            "0",
          )}
        </span>

        <h3
        >
          {title}
        </h3>

        <p>
          {description}
        </p>
      </div>


    </>
  );
}