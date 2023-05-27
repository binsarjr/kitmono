<script>
	import Greeting from '../lib/components/Greeting.svelte';
	import GreetingShared from '../lib/components/GreetingShared.svelte';
</script>

<!-- class come from tailwind-config -->
<h1 class="text-brandblue">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="flex flex-col gap-5 p-5 bg-blue-100">
	<div>
		<Greeting />
	</div>
	<div>
		<GreetingShared />
	</div>
</div>
