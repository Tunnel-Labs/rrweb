import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: [{ input: './exports/main.ts', name: 'main' }],
	outDir: '.build',
	declaration: true,
	externals: ['@xstate/fsm'],
	rollup: {
		inlineDependencies: true,
		dts: {
			respectExternal: true,
		},
		emitCJS: true,
	},
});
