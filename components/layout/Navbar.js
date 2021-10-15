import Button from "../Button";
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
      <Button>
        <Link href="/" passHref>
          <div>
            <p>
              <a href="">Home</a>
            </p>
          </div>
        </Link>
      </Button>
      <Button>
        <Link href="about">About</Link>
      </Button>
      <Link href="pokemon">Pokemon</Link>
    </nav>
  );
}
