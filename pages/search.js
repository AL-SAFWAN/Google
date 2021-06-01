import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Search/Header";
import SearchResults from "../components/Search/SearchResults";
import res from "../res";
function Search({ result }) {
  const router = useRouter();
  console.log(result);
  return (
    <>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <Header />
      <SearchResults result={result} />
    </>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const apiKey = process.env.CUSTOM_SEARCH_API;
  const contextKey = process.env.CONTEXT_KEY;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? res
    : await fetch(
        `https://customsearch.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());
  return {
    props: {
      result: data,
    },
  };
}
