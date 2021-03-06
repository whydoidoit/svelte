// import counter from './counter.js';

export default {
	'skip-ssr': true,

	html: `
		<div><p>first thing (true)</p></div>
		<div><p>second thing (true)</p></div>
	`,

	test(assert, component) {
		const visibleThings = component.get('visibleThings');
		assert.deepEqual(visibleThings, ['first thing', 'second thing']);

		const snapshots = component.snapshots;
		assert.deepEqual(snapshots, [visibleThings]);

		// TODO minimise the number of recomputations during oncreate
		// assert.equal(counter.count, 1);
	}
};