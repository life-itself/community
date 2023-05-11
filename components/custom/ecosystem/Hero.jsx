// import Link from 'next/link';
// import { siteConfig as config } from '../../config/siteConfig';

export default function Hero() {
	return (
		<div className="relative bg-gray-50 overflow-hidden">
			<div
				className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
				aria-hidden="true"
			>
				<div className="relative h-full max-w-7xl mx-auto">
					<svg
						className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
						width={404}
						height={784}
						fill="none"
						viewBox="0 0 404 784"
					>
						<defs>
							<pattern
								id="f210dbf6-a58d-4871-961e-36d5016a0f49"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={784}
							fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
						/>
					</svg>
					<svg
						className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
						width={404}
						height={784}
						fill="none"
						viewBox="0 0 404 784"
					>
						<defs>
							<pattern
								id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={784}
							fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
						/>
					</svg>
				</div>
			</div>
			<div className="relative pt-6 pb-16 sm:pb-24">
				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
					<div className="text-center">
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
							{/* <span className="block xl:inline">{config.title}</span> */}
							<span className="block xl:inline">Mapping an Emerging Ecosystem</span>
						</h1>
						<h2 className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
							{/* {config.tagline} */}
              Charting an emerging ecosystem by Life Itself, Emerge and collaborators
						</h2>
						<p className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 med:text-xl md:max-w-3xl">
							{/* {config.description} */}
              This project maps an emerging ecosystem centred on a radical, alternative approach to social change – one that is simultaneously paradigmatic, integrated and engaged. Discover key features and ideas of this growing space. Explore associated organizations, individuals and initiatives. See how it relates to other established and emerging movements.
						</p>
						<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
							<div className="rounded-md shadow">
								<a
									href="#outline"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-yellow-300 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
								>
									Discover
								</a>
							</div>
							<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
								{/* <Link href="#profiles"> */}
									<a href="#profiles" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10">
										Explore
									</a>
								{/* </Link> */}
							</div>
							<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
								{/* <Link href="/about/"> */}
									<a href="/about/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-50 hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
										About
									</a>
								{/* </Link> */}
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
