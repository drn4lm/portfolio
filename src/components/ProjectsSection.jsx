import { ArrowRight, ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "CollectPal",
		description:
			"A clean web application powered by Google APIs for gas meter collection.",
		image: "/projects/collectpal.png",
		tags: ["React.js", "Flask", "SQLite"],
		githubUrl: "https://github.com/drn4lm/collectpal",
	},
	{
		id: 2,
		title: "Portfolio Web Page",
		description:
			"An interactive web page showcasing my computer science projects and skills.",
		image: "/projects/portfolio.png",
		tags: ["JavaScript", "React.js", "Tailwind CSS"],
		githubUrl: "https://github.com/drn4lm/portfolio",
	},
  {
		id: 3,
		title: "NeighbourLink",
		description:
			"NeighbourLink is a platform connecting neighbors for sharing resources and assistance.",
		image: "/projects/neighbourlink.png",
		tags: ["React Native", "Node.js", "Express"],
		githubUrl: "https://github.com/sadiddd/neighbourlink",
	},
  {
		id: 4,
		title: "Formula SAE Suspension",
		description:
			"CAD files for suspension assemblies including control arms and FEA for carbon fiber parts.",
		image: "/projects/ucr.png",
		tags: ["CAD", "FEA", "Ansys"],
		githubUrl: "https://github.com/drn4lm/fsae",
	},
	{
		id: 5,
		title: "Lostly",
		description:
			"A digital lost-and-found service in the form of a blog-style web page.",
		image: "/projects/lostly.png",
		tags: ["WebSocket.IO", "Flask", "MySQL"],
		githubUrl: "https://github.com/drn4lm/lostly-app",
	},
  {
		id: 6,
		title: "Board Games Online",
		description:
			"A multi-user to server board game platform featuring a raspberry pi server.",
		image: null,
		tags: ["HTML", "Java", "JavaFX"],
		githubUrl: "https://github.com/drn4lm/online-board-game",
	}
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					{" "}
					Featured{" "}
					<span className="text-primary"> Projects </span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my recent computer science and engineering projects.
          Click on the GitHub icon to view the repository for each project. 
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative"
						>
							<div className="h-48 overflow-hidden">
								{project.image ? (
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								) : (
									<div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
										<Code2 className="h-16 w-16 text-primary/40" />
									</div>
								)}
							</div>

							<div className="p-6 pb-12">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1">
									{" "}
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
							
							</div>

							<div className="absolute left-4 bottom-4 flex space-x-3">
								<a
									href={project.githubUrl}
									target="_blank"
									className="text-foreground/80 hover:text-primary transition-colors duration-300"
								>
									<Github size={20} />
								</a>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						href="https://github.com/drn4lm"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};