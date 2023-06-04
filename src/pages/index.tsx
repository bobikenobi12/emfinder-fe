import { type NextPage } from "next";
import Head from "next/head";

import LoginButton from "~/components/LoginButton";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Emfinder</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<LoginButton />
		</div>
	);
};

export default Home;
