import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: [{ input: './exports/main.ts', name: 'main' }],
	outDir: '.build',
	declaration: true,
	rollup: {
		inlineDependencies: true,
		emitCJS: true,
	},
});
