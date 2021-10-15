import Head from "next/head";
import Image from "next/Image";
import styles from "../../styles/Pokemon.module.css";

export default function Post({ pokemon }) {
  console.log(pokemon);
  return (
    <div className={styles.main}>
      <Head>
        <title>{pokemon.name}</title>
      </Head>
      <h1>{pokemon.name}</h1>
      <Image
        width={200}
        height={200}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
  );
  const data = await res.json();

  const paths = data.results.map((item) => ({ params: { name: item.name } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const data = await res.json();
  console.log(data);

  return { props: { pokemon: data } };
}
