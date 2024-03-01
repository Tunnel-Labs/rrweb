import { defineBuildConfig } from 'unbuild';
// @ts-expect-error: no types
import webWorkerLoader from 'rollup-plugin-web-worker-loader';

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
	hooks: {
		'rollup:options'(ctx, rollupOptions) {
			(rollupOptions.plugins as Array<any>).unshift(
				webWorkerLoader({
					targetPlatform: 'browser',
					inline: true,
					preserveSource: true,
				}),
			);
		},
	},
});
