import Head from "next/head";

const Header = ({ title, description, keywords, canonical }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
    </Head>
  );
};

export default Header;
