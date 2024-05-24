import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions| Limestone",
  description:
    "Get answers to your questions about our limestone products, applications, maintenance, and more. Visit our FAQ page for detailed information and expert advice on all things limestone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
