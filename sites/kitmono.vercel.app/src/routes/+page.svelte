<script>
	import Greeting from '../lib/components/Greeting.svelte';
	import GreetingShared from '../lib/components/GreetingShared.svelte';
	import { MyCounterButton } from 'ui';
</script>

<div class="flex flex-col gap-10">
	<div>
		<!-- class come from tailwind-config -->
		<h1 class="text-brandblue">Welcome to SvelteKit</h1>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</div>
	<div class="flex flex-col gap-5 p-5 bg-blue-100">
		<div>
			<Greeting />
		</div>
		<div>
			<GreetingShared />
		</div>
	</div>
	<div>
		<MyCounterButton />
	</div>
</div>
