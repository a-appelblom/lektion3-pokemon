import Link from "next/link";

export default function Footer() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Link href="/">Hem</Link>
      <Link href="about">About</Link>
      <Link href="blog">Blog</Link>
    </div>
  );
}
