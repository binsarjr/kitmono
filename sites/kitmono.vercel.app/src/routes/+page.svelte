<script>
	import Greeting from '../lib/components/Greeting.svelte';
	import GreetingShared from '../lib/components/GreetingShared.svelte';
	import { MyCounterButton } from 'ui';
</script>

<div class="flex flex-col gap-10 items-center">
	<div>
		<!-- class come from tailwind-config -->
		<h1 class="text-brandblue">Welcome to SvelteKit</h1>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</div>
	<div class="flex flex-col items-center gap-5 p-5">
		<h1 class="text-xl">Load Data using tRPC</h1>
			<div class="flex gap-5">
				<Greeting />
			<GreetingShared />
			</div>
	</div>
	<div>
		<MyCounterButton />
	</div>
</div>
