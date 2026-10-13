import { defineConfig, triggers } from "cf/config";


export default defineConfig({
	worker: {
		name: "ai-chronicle-proxy",
		compatibilityDate: "2026-07-10",
		entrypoint: "index.js",
		observability: {
			enabled: true,
			headSamplingRate: 1,
		},
		triggers: [
			triggers.fetch({
				pattern: "chendahuang.com/ai-chronicle",
				zone: "chendahuang.com",
			}),
			triggers.fetch({
				pattern: "chendahuang.com/ai-chronicle/*",
				zone: "chendahuang.com",
			}),
		],
	},
});
