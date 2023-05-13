<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { LayoutData } from '../routes/$types';
	export let data: LayoutData;
</script>

<AppBar>
	<svelte:fragment slot="lead">&#x200B</svelte:fragment>
	<a href="/" class="btn btn-lg hover:variant-filled-surface">Home</a>
	<svelte:fragment slot="trail">
		<LightSwitch />
		{#if data.session}
			<a href="/dashboard" class="btn variant-filled-primary">Dashboard</a>
			<form action="/logout" method="post">
				<button type="submit" class="btn variant-glass-primary">Sign Out</button>
			</form>
		{:else}
			<form action="/login" method="post">
				<button type="submit" class="btn variant-glass-primary">Login</button>
			</form>
		{/if}
	</svelte:fragment>
</AppBar>
