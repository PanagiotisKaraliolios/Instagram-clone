import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

//Browser
function signIn({ providers }) {
	return (
		<>
			<Header />

            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
                <img
                    className="w-80" src="https://links.papareact.com/ocw"
                    alt="Logo"
                />
                <p className=" italic text-sm ">
                    This is not intended to be used as a real website. It is built for
                    educational purposes only.
                </p>

				<div className=" mt-40">
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								className="p-3 rounded-lg bg-blue-500 text-white"
								onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}
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

	return {
		props: {
			providers,
		},
	};
}

export default signIn;
