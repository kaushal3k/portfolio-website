// Contact.js
export default function Contact() {
	return (
		<section id="contact"
				className="my-40 align-center max-w-5xl mx-auto p-3">
			<h2 className="text-5xl font-bold text-blue-500 text-center">
				Contact me
			</h2>
			<div className="flex gap-5 justify-center my-10">

				<a rel="noreferrer"
				target="_blank"
				className="text-center hover:underline"
				href="https://linkedin.com/in/kaushal4k">
					Linkdein:
					<span className="font-bold">
						@Kaushal
					</span>
				</a>

				<a rel="noreferrer"
				target="_blank"
				className="text-center hover:underline"
				href="https://twitter.com/geeksforgeeks">
					Twitter:
					<span className="font-bold">
						@Kaushal3k
					</span>
				</a>
			</div>
		</section>
	);
}
