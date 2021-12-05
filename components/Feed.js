import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

function Feed() {
	const { data: session } = useSession();

	return (
		<main
			className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
         xl:grid-cols-3 xl:max-w-6xl mx-auto ${
				!session && "!grid-cols-1 !max-w-3xl"
			}`}
		>
			{/* Section */}
			<section className="col-span-2">
				{/* Stories */}
				<Stories />
				{/* Posts */}
				{session ? (
					<Posts />
				) : (
					<div className="flex flex-col items-center justify-center min-h-full">
						<h1 className="text-4xl font-bold text-gray-800">
							Sign in first
						</h1>
					</div>
				)}
			</section>

			{session && (
				<section className="hidden xl:inline-grid md:col-span-1">
					{/* Mini profile */}

					<div className=" fixed top-20">
						<MiniProfile />

						{/* Suggestions */}
						<Suggestions />
					</div>
				</section>
			)}
		</main>
	);
}

export default Feed;
