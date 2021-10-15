import Link from "next/link";
import styles from "../../styles/Creatures.module.css";

export default function Blog({ creatures }) {
  console.log(creatures);
  return (
    <div className={styles.main}>
      <h1>Choose a pokemon</h1>
      <div className={styles.container}>
        {creatures.map((creature) => (
          <Link key={creature.name} href={`pokemon/${creature.name}`}>
            {creature.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
  );
  const data = await res.json();

  return { props: { creatures: data.results } };
}
