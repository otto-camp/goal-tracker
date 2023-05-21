<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import type { LayoutData } from '../routes/$types';
	import { Bars3, Icon } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';

	export let data: LayoutData;
	let open = false;
</script>

<AppBar slotTrail="place-content-end" class="relative">
	<svelte:fragment slot="lead">&#x200B</svelte:fragment>
	<a href="/" class="btn btn-lg hover:variant-filled-surface text-2xl">Home</a>
	<svelte:fragment slot="trail">
		<LightSwitch rounded="rounded-lg"/>
		<div class="lg:hidden">
			<button
				on:click={() => (open = !open)}
				aria-label="Open the Menu"
				class="btn variant-soft-surface"
			>
				<Icon src={Bars3} size="24" />
			</button>
		</div>

		<div class="hidden lg:flex gap-4">
			{#if data.session}
				<a href="/dashboard" class="btn variant-filled-primary">Dashboard</a>
				<form action="/logout" method="post">
					<button type="submit" class="btn variant-glass-tertiary">Sign Out</button>
				</form>
			{:else}
				<form action="/login" method="post">
					<button type="submit" class="btn variant-glass-primary">Login</button>
				</form>
			{/if}
		</div>
		{#if open}
			<div class="card p-4 w-60 shadow-xl absolute top-full right-0" transition:slide>
				<nav class="list-nav">
					<ul>
						{#if data.session}
							<li><a href="/dashboard" class="btn variant-filled-primary w-full">Dashboard</a></li>
							<li>
								<form action="/logout" method="post">
									<button type="submit" class="btn variant-glass-tertiary w-full">Sign Out</button>
								</form>
							</li>
						{:else}
							<li>
								<form action="/login" method="post">
									<button type="submit" class="btn variant-glass-primary w-full">Login</button>
								</form>
							</li>
						{/if}
					</ul>
				</nav>
			</div>
		{/if}
	</svelte:fragment>
</AppBar>
