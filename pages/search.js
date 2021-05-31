import Head from "next/head";
import Header from "../components/Search/Header";
import res from "../res";
function Search({ result }) {
  console.log(result);
  return (
    <>
      <Head>
        <title>Search Result</title>
      </Head>
      <Header />
    </>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const apiKey = process.env.CUSTOM_SEARCH_API;
  const contextKey = process.env.CONTEXT_KEY;
  console.log(apiKey, contextKey);
  const data = useDummyData
    ? res
    : await fetch(
        `https://customsearch.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${context.query.term}`
      ).then((res) => res.json());
  return {
    props: {
      result: data,
    },
  };
}
