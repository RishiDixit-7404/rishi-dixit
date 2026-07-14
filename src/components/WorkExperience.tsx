import { Card } from "./Card";

interface WorkExperienceItem {
	id: number;
	title: string;
	company: React.ReactNode;
	period: string;
	description: string;
	description2?: string;
	isRemote?: boolean;
	color: string;
	tags?: string[];
	expandable?: boolean;
	logo?: string;
	link?: string;
}

const experiences: WorkExperienceItem[] = [
	{
		id: 0,
		title: "Software Engineering Intern",
		company: (
			<>
				Grant Thornton <br /> Bharat
			</>
		),
		period: "FEB - JUNE 2026",
		description:
			"Built production AI backend systems with FastAPI, Azure OpenAI, and tool-calling agents to automate document processing and enterprise workflows.",
		description2:
			"Engineered asynchronous AI pipelines integrating Azure OpenAI, REST APIs, and enterprise services to automate complex business workflows.",
		isRemote: false,
		color: "bg-[#C5D3E8]",
		tags: ["Python", "FastAPI", "Azure OpenAI", "LLMs", "RAG"],
		expandable: true,
		logo: "/images/grant_thornton.webp",
		link: "/Experience_Letter_Rishi_Dixit_GT.pdf",
	},
];

export const WorkExperience: React.FC = () => {
	return (
		<div className="max-w-[70vw] mx-auto   font-mono py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
				{experiences.map((exp) => (
					<div key={exp.id} className="relative group">
						<Card
							title={exp.company}
							color={exp.color || "bg-[#FFEAA7]"} // default unified color
							className="h-full flex flex-col text-black"
							tags={[
								exp.title,
								...(exp.isRemote ? ["Remote"] : []),
							]}
							image={exp.logo}
							link={exp.link}
						>
							<div className="flex-1 flex flex-col justify-between">
								{/* TOP: Company + Logo */}
								<div className="flex items-start justify-between mb-4">
									<div className="flex justify-between w-full items-center">
										<p className="text-black text-2xl font-bold opacity-95">
											{exp.title}
										</p>
										<p className="text-lg uppercase font-bold opacity-90 border-b border-black/30 font-mono shrink-0 whitespace-nowrap text-right">
											{exp.period}
										</p>
									</div>
								</div>

								{/* PERIOD */}

								{/* DESCRIPTION */}
								<div className="bg-white/50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
									<p className="text-lg leading-relaxed font-medium mb-2">
										{exp.description}
									</p>
									{exp.description2 && (
										<p className="text-lg italic opacity-80 leading-relaxed mb-4">
											{exp.description2}
										</p>
									)}
								</div>

								{/* STACK */}
								{exp.tags && (
									<div className="m-4">
										<p className="text-[10px] uppercase font-bold mb-2 opacity-70">
											Tech Stack
										</p>
										<ul className="flex flex-wrap gap-2">
											{exp.tags.map((tag) => (
												<li
													key={tag}
													className="px-2 py-1 bg-white border-2 border-black  font-bold magnetic"
												>
													{tag}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
};
