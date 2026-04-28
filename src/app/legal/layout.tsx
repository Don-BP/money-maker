import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | ZenithTools",
    default: "Legal | ZenithTools",
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
