import type { Project } from "@/lib/portfolio-data";

type ProjectVisualProps = {
  type: Project["visual"];
};

const terminalLines = {
  monitor: ["worker:heartbeat", "queue: 3,000 active", "retry: exponential", "status: healthy"],
  algorithms: ["karatsuba(n)", "split -> solve -> merge", "closestPair: 2.5ms", "benchmarks: 40+"],
  api: ["POST /auth/login", "GET /books", "PATCH /reviews/:id", "upload: cloudinary"],
  dsl: ["room Shire", "take lantern", "if has_key -> open", "compile adventure"],
  go: ["go test ./...", "migrate up", "rbac: enabled", "swagger: generated"],
  llm: ["tokens -> embed", "masked attention", "rope(position)", "loss.backward()"],
};

export function ProjectVisual({ type }: ProjectVisualProps) {
  const lines = terminalLines[type];

  return (
    <div className="project-visual" aria-hidden="true">
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className={`visual-body visual-${type}`}>
        <div className="visual-grid">
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="visual-code">
          {lines.map((line, index) => (
            <p key={line}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
