import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | Limestone",
  description:
    "Reach out to our limestone experts for inquiries, quotes, and support. Visit our Contact Us page for phone, email, and address details to connect with our team.",
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
