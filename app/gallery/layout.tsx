import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | The Fenceless Patrol",
  description: "Highlights from YUVAFEST 2025 and our project development journey.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
