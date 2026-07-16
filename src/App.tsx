import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
	Terminal,
	Download,
	Save,
	Award,
	Barcode,
	Github,
	LinkedinIcon,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Card } from "./components/Card";
import { SilverMatteBackground } from "./components/SilverBackgroud";
import { CustomCursor } from "./components/CustomCursor";
import { HorizontalScrollSection } from "./components/HorizontalScrollSection";
import { PROJECTS_DATA } from "./data/projects";
import { HeroSection } from "./components/HeroSection";
import { skills } from "./data/skills";
import { ContactForm } from "./components/ContactForm";
import { MobileProjectSection } from "./components/MobileProjectSection";
import { SplitText } from "gsap/all";
import { WorkExperience } from "./components/WorkExperience";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, SplitText);

export default function App() {
	const [activeTab, setActiveTab] = useState<string>("personal");

	const handleDownloadResume = () => {
		const pdfUrl = "/Rishi_Dixit_Resume_July_2026.pdf";
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "Rishi_Dixit_Resume_July_2026.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<main>
			<SilverMatteBackground>
				<CustomCursor />
				<div className="max-w-[70vw] lg:max-w-360   mx-auto px-4 md:px-8 pb-24 font-sans">
					{/* --- HERO SECTION --- */}

					<HeroSection />
					<section className=" flex items-center">
						<div className=" grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-auto relative">
							<div className="md:col-span-7 min-h-[400px] flex flex-col gap-8">
								<Card
									title="Education"
									color="bg-[#FFC805]/60"
									tags={["B.Tech Hons", "2022-2026"]}
									className="text-black min-h-[400px]"
								>
									<div className="space-y-6 mt-4 font-mono">
										<div className="relative flex pl-6 border-l-4 border-black">
											<div className="">
												<h4 className="text-3xl font-black uppercase tracking-tighter text-black leading-none mb-2 mt-2">
													<span className="whitespace-nowrap text-2xl md:text-3xl">Manipal University</span> <br />
													Jaipur
												</h4>
												<p className="text-base font-bold mt-1 text-lg text-black">
													B.Tech (Hons.) CSE (AI/ML)
												</p>
												<div className="flex justify-end text-sm font-bold mt-2 border-t border-black/20 pt-2 text-black">
													<span>2022 — 2026</span>
												</div>
											</div>
											<DotLottieReact
												src="https://lottie.host/8a4b4785-8d75-4516-809b-46fc5728e567/96ugoCdlS7.lottie"
												loop
												autoplay
												height={100}
											/>
										</div>
										<div className="bg-white/50 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
											<h5 className="flex items-center gap-2 font-black uppercase text-base mb-2 text-black">
												<Award size={16} /> Key
												Achievements
											</h5>
											<ul className="list-disc list-inside text-sm space-y-2 font-bold text-black">
												<li>
													Explored modern AI systems through self-driven learning and hands-on projects.
												</li>
												<li>
													Built practical skills in Agentic AI, Backend Engineering, and Microsoft Azure cloud technologies.
												</li>
											</ul>
										</div>
									</div>
								</Card>
							</div>
							<div className="md:col-span-5 min-h-[400px]">
								<Card
									title="TECH STACK"
									color="bg-[#FF7F3F]/60"
									icon={Terminal}
									tags={["Skills & Expertise"]}
									className="text-black"
								>
									<div className="space-y-6 mt-2">
										<div>
											<h5 className="font-black text-sm uppercase mb-2 flex items-center gap-2 text-black">
												<span className="text-xl">&lt;&gt;</span> LANGUAGES
											</h5>
											<ul className="flex flex-wrap gap-2">
												{skills.languages.map((t) => (
													<li key={t} className="px-2 py-1 bg-white border-2 border-black font-bold hover:bg-red-500 hover:text-white transition-colors cursor-default magnetic relative z-50">
														{t}
													</li>
												))}
											</ul>
										</div>
										<div>
											<h5 className="font-black text-sm uppercase mb-2 flex items-center gap-2 text-black">
												<span className="text-xl">⚙</span> AI & AGENTS
											</h5>
											<ul className="flex flex-wrap gap-2">
												{skills.aiAndAgents.map((t) => (
													<li key={t} className="px-2 py-1 bg-white border-2 border-black font-bold hover:bg-black hover:text-white transition-colors cursor-default magnetic relative z-50">
														{t}
													</li>
												))}
											</ul>
										</div>
										<div>
											<h5 className="font-black text-sm uppercase mb-2 flex items-center gap-2 text-black">
												<span className="text-xl">⚡</span> BACKEND
											</h5>
											<ul className="flex flex-wrap gap-2">
												{skills.backend.map((t) => (
													<li key={t} className="px-2 py-1 bg-white border-2 border-black font-bold hover:bg-black hover:text-white transition-colors cursor-default magnetic relative z-50">
														{t}
													</li>
												))}
											</ul>
										</div>
										<div>
											<h5 className="font-black text-sm uppercase mb-2 flex items-center gap-2 text-black">
												<span className="text-xl">🛠</span> CLOUD & TOOLS
											</h5>
											<ul className="flex flex-wrap gap-2">
												{skills.cloudAndTools.map((t) => (
													<li key={t} className="px-2 py-1 bg-white border-2 border-black font-bold hover:bg-black hover:text-white transition-colors cursor-default magnetic relative z-50">
														{t}
													</li>
												))}
											</ul>
										</div>
									</div>
								</Card>
							</div>
						</div>
					</section>
					{/* New Work Experience Section */}
					<section className="flex items-center min-h-screen">
						<WorkExperience />
					</section>
				</div>

				{/* === DESKTOP HORIZONTAL SCROLL (Hidden on mobile) === */}
				<div className="hidden md:block">
					<HorizontalScrollSection
						projectsMap={PROJECTS_DATA}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</div>

				{/* === MOBILE VERTICAL SCROLL (Hidden on desktop) === */}
				<div className="block md:hidden">
					<MobileProjectSection
						projectsMap={PROJECTS_DATA}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</div>

				<div className="max-w-full justify-center mx-auto flex items-center  px-4 md:px-8 font-sans h-auto md:h-screen">
					<div className="xl:min-w-7xl  h-auto md:min-h-[500px] mt-8 mb-12">
						<Card
							title="Comm_Link"
							color="bg-[#a4cf4a]"
							tags={[
								"Open to Work",
								"Noida",
								"Gurgaon",
								"Pune",
							]}
							// Changed h-full to h-auto on mobile to prevent clipping
							className="h-auto md:h-full overflow-visible md:overflow-hidden"
						>
							<div
								className="absolute inset-0 opacity-10 pointer-events-none"
								style={{
									backgroundImage:
										"linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
									backgroundSize: "20px 20px",
								}}
							></div>

							<div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-full pt-4 pb-8 md:pb-0 relative z-10">
								<div className="md:col-span-7 flex flex-col gap-6">
									<ContactForm />

									{/* Resume Button */}
									<div className="flex items-end gap-4">
										<div
											className="group flex-1 border-2 border-black bg-[#208db4] p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:-translate-y-1 transition-transform relative z-50"
											onClick={handleDownloadResume}
										>
											<div className="flex items-center gap-4">
												<Save
													size={32}
													className="text-white w-8 h-8 md:w-12 md:h-12"
													strokeWidth={1.5}
												/>
												<div className="flex flex-col">
													<span className="font-black text-lg md:text-xl uppercase text-white leading-none break-all">
														Rishi_Dixit_Resume_July_2026.pdf
													</span>
													<span className="font-mono text-[10px] md:text-xs text-white/80">
														Updated 2026 // DOWNLOAD
													</span>
												</div>
												<Download className="ml-auto text-white group-hover:animate-bounce" />
											</div>
										</div>
									</div>
								</div>

								<div className="md:col-span-5 flex  md:flex-col  gap-2 md:gap-6">
									<div className="relative border-2 border-black bg-[#eef7be] p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
										<div className="flex gap-4">
											<div className="w-20 h-28 md:w-24 md:h-32 border-2 border-black p-1 bg-gray-100 shrink-0">
												<img
													src="/images/rishi.jpeg"
													alt="Rishi Dixit - Agentic AI and Backend Developer from Jaipur"
													className="w-full h-full object-cover"
													loading="lazy"
													width="96"
													height="128"
												/>
											</div>
											<div className="flex flex-col justify-between w-full overflow-hidden">
												<div>
													<h4 className="font-black text-lg md:text-xl uppercase leading-none mb-1 truncate">
														Rishi Dixit
													</h4>
													<p className="font-mono text-[10px] text-gray-500 truncate">
														Kanpur, Uttar Pradesh
													</p>
													<p className="font-mono text-[10px] text-gray-500">
														+91 94506 93480
													</p>
													<p className="font-mono text-[10px] text-gray-500 truncate">
														Agentic AI & Cloud
													</p>
												</div>
												<Barcode
													className="opacity-40 w-full"
													seed={"sdfsfbkewf"}
												/>
											</div>
										</div>
									</div>
									<div className="flex gap-4 justify-end">
										<a
											href="https://github.com/RishiDixit-7404"
											target="_blank"
											rel="noreferrer"
											className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center font-black hover:bg-black hover:text-white cursor-pointer transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] magnetic relative z-50"
										>
											<Github />
										</a>
										<a
											href="https://www.linkedin.com/in/rishi-dixit-461035279/"
											target="_blank"
											rel="noreferrer"
											className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center font-black hover:bg-black hover:text-white cursor-pointer transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] magnetic relative z-50"
										>
											<LinkedinIcon />
										</a>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</SilverMatteBackground>
		</main>
	);
}
