import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
import logo from "../../assets/2880px-Instagram_logo.svg.png";
import Image from "next/image";

//Browser
function signIn({ providers }) {
	return (
		<>
			<Header />

			<div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
				<Image src={logo} width={400} height={150} />
				<p className=" italic text-sm ">
					This is not intended to be used as a real website. It is
					built for educational purposes only. There is no affiliation
					or connection to Instagram.
				</p>

				<div className=" mt-40">
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								className="p-3 rounded-lg bg-blue-500 text-white"
								onClick={() =>
									SignIntoProvider(provider.id, {
										callbackUrl: "/",
									})
								}
							>
								Sign In with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

//Middle server
export async function getServerSideProps() {
	const providers = await getProviders();
	console.log(providers);

	return {
		props: {
			providers,
		},
	};
}

export default signIn;
