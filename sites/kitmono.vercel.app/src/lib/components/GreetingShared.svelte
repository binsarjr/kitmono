<script lang="ts">
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc/client';

	let greeting = 'press the button to load data';
	let loading = false;

	const loadData = async () => {
		loading = true;
		greeting = await trpc($page).shared.greeting.query();
		loading = false;
	};
</script>

<div>
	<a
		href="#load"
		role="button"
		class="bg-green-500 px-4 py-2 rounded text-white mb-4 inline-block"
		aria-busy={loading}
		on:click|preventDefault={loadData}>Load From Shared</a
	>
	<p>{greeting}</p>
</div>
