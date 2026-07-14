import type { ProjectsMap } from "../types";

export const PROJECTS_DATA: ProjectsMap = {
	personal: [
		{
			name: "Lumina",
			type: "Personal",
			description:
				"Local-first multi-agent RAG platform for querying codebases and documents with hybrid retrieval, live execution tracing, and per-claim citations.",
			stack: ["FASTAPI", "REACT", "OLLAMA", "QDRANT", "RAG"],
			year: "2026",
			image: "/images/lumina.png",
			status: "live",
			longDescription:
				"Lumina is an intelligent study assistant that processes student documents, generates structured notes, and allows natural language querying. It utilizes a microservices architecture with FastAPI for the backend and a Next.js frontend, integrating advanced RAG with Qdrant.",
			liveUrl: undefined,
			repoUrl: "https://github.com/RishiDixit-7404/Lumina",
			architectureImage: "",
			gallery: [],
			challenges: [
				"Implementing efficient RAG for large PDF documents.",
				"Ensuring sub-second response times for complex queries.",
				"Designing an intuitive and responsive UI for students."
			],
		},
		{
			name: "DPDP PrivacyOps",
			type: "Personal",
			description:
				"Developer-first PrivacyOps platform for DPDP compliance, featuring PII discovery, consent management, DSR workflows, and technical readiness reporting.",
			stack: ["FASTAPI", "NEXT.JS", "POSTGRESQL", "PYTHON", "DOCKER"],
			year: "2026",
			image: "/images/dpdp.png",
			status: "live",
			longDescription:
				"DPDP PrivacyOps helps enterprises navigate the complexities of data privacy compliance. It uses Azure OpenAI and custom RAG pipelines to audit workflows and generate compliance reports automatically based on the latest DPDP guidelines.",
			liveUrl: undefined,
			repoUrl: "https://github.com/RishiDixit-7404/dpdp-privacyops",
			architectureImage: "",
			gallery: [],
			challenges: [
				"Accurately interpreting dense legal texts using LLMs.",
				"Securing sensitive enterprise data during the auditing process."
			],
		},
		{
			name: "Enterprise Knowledge Guardian",
			type: "Personal",
			description:
				"Offline-first enterprise RAG platform combining hybrid retrieval, knowledge graphs, and agentic verification to deliver grounded answers with claim-level citations and hallucination prevention.",
			stack: ["FASTAPI", "LANGGRAPH", "NEO4J", "PGVECTOR", "HYBRID RAG"],
			year: "2026",
			image: "/images/knowledge.png",
			status: "live",
			longDescription:
				"Enterprise Knowledge Guardian is a robust internal tool designed for secure information retrieval. It features advanced RBAC, caching with Redis, and AI-driven semantic search via LangChain to ensure employees find what they need securely and quickly.",
			liveUrl: undefined,
			repoUrl: "https://github.com/RishiDixit-7404/enterprise-knowledge-guardian",
			architectureImage: "",
			gallery: [],
			challenges: [
				"Implementing fine-grained role-based access control.",
				"Optimizing database queries and implementing caching strategies for scale."
			],
		},
	],
	internship: [
		{
			name: "BackCheck AI",
			type: "Internship",
			description:
				"AI-powered background verification platform that automates compliance screening, document analysis, adverse media extraction, and enterprise due diligence workflows.",
			stack: ["FASTAPI", "AZURE AI", "PLAYWRIGHT", "COSMOS DB", "LLMs"],
			year: "2026",
			image: "/images/backcheck.png",
			status: "live",
			longDescription:
				"BackCheck AI is a sophisticated verification system that automates the background check process. It utilizes Playwright for web scraping and Azure AI for data validation, significantly reducing manual verification time.",
			liveUrl: undefined,
			repoUrl: undefined,
			architectureImage: "",
			gallery: [],
			challenges: [
				"Scraping dynamic web content securely and reliably.",
				"Integrating multiple LLMs to cross-verify extracted data."
			],
		},
		{
			name: "Markets BOT",
			type: "Internship",
			description:
				"AI-powered market intelligence platform that automates company research, annual report analysis, enterprise data enrichment, and executive-ready report generation using multi-agent workflows.",
			stack: ["FASTAPI", "AZURE AI", "AZURE AI SEARCH", "COSMOS DB", "LLMs"],
			year: "2026",
			image: "/images/linkreta.png",
			status: "live",
			longDescription:
				"LinkReta is a high-performance link management platform. It leverages FastAPI and AsyncIO to provide real-time analytics and automatically enriches saved URLs with metadata using background tasks.",
			liveUrl: undefined,
			repoUrl: undefined,
			architectureImage: "",
			gallery: [],
			challenges: [
				"Handling high-throughput asynchronous requests.",
				"Designing a scalable schema in MongoDB for analytics data."
			],
		},
	],
};
