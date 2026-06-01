import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | DokiDoki.Tools",
    default: "Legal | DokiDoki.Tools",
  },
  robots: { index: true, follow: true },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
