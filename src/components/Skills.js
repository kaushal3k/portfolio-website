// Skills.js
export default function Skills() {
	const skills = [ "HTML","Python", "CSS", "Javascript", "React","Tailwind.css", "JQuery","Bootstrap","MySql","Node.js","Express.js","Git", "Github"];
	return (
		<section id="skills"
			className="px-10 w-full my-40 max-w-5xl mx-auto">
			<h2 className="text-center text-6xl text-blue-700 font-bold">
				My Skills...
			</h2>
			<div className="mt-10 flex gap-5 justify-center 
							flex-wrap mx-auto max-w-xxxl">
				{skills.map((skill, index) => {
					return (
						<div key={index}
							className="cursor-pointer px-12 py-10 
										rounded bg-blue-200 text-lg 
										flex items-center justify-center 
										font-bold hover:shadow-xl">
							{skill}
						</div>
					)})}
			</div>
		</section>
	)
}
