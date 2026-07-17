import type { PropsWithChildren, ReactNode } from "react";

type PanelProps = {
  title: string;
  children?: ReactNode;
};

export function Panel({ title, children }: PanelProps) {
  return (
    <section>
      <h1>{title}</h1>
      <div>{children ?? <em>No children present</em>}</div>
    </section>
  );
}

interface RequierdChildrenProps extends PropsWithChildren {
  title: string;
  children: ReactNode;
}

export function RequierdChildrenPanel({
  title,
  children,
}: RequierdChildrenProps) {
  return (
    <section>
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
}
