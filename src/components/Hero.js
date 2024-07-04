// Hero.js
export default function Hero() {
	return (
	<section
		id="hero"
		className="px-10 w-full flex gap-12 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh] " >
		<div className="flex-1 flex flex-col justify-center items-center gap-5">
		<div>
			<h4 className="text-center text-xl font-bold">
				Hi and welcome to
			</h4>
			<h2 className="text-center text-blue-500 text-5xl font-bold">
			My Portfolio Website
			</h2>
		</div>
		<p className="text-center">
			I am your friendly neighbourhood osm developer...
		</p>
		</div>
		<div className="flex-1 ">
		<img src= "https://as2.ftcdn.net/v2/jpg/02/77/63/39/1000_F_277633961_rzaIV1Dk2yDdXFGkO8cL91SRjRpgueUb.jpg"
			alt="Hello.svg"
			className="w-3/4 h-3/4 bg-cover ml-10"/>
		</div>
	</section>
	);
}
