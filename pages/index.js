import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";


export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Instagram 2.0</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}

			<Header />

			{/* Feed */}

			<Feed />

			{/* Modal */}

			<Modal />
		</div>
	);
}
