import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        fontSize: "24px",
      }}
    >
      <Link href="/">Hem</Link>
      <Link href="about">About</Link>
      <Link href="pokemon">Pokemon</Link>
    </nav>
  );
}
