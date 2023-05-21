<script lang="ts">
	import { AppShell, Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import {
		ArrowLeftOnRectangle,
		Bars3,
		Briefcase,
		Cog6Tooth,
		Home,
		Icon,
		XMark
	} from 'svelte-hero-icons';
	import { fly } from 'svelte/transition';
	import type { LayoutData } from './$types';
	import type { MetadataJson } from '$lib/types/Types';

	export let data: LayoutData;
	const user = data.user;
	const metadata = user.metadata as MetadataJson;

	let innerWidth: number;
	let open = false;
	$: mobile = innerWidth < 1024;

	const links = [
		{ href: '/dashboard/', name: 'Home', logo: Home },
		{ href: '/dashboard/', name: 'Create Event', logo: Briefcase },
		{ href: '/dashboard/', name: 'Settings', logo: Cog6Tooth }
	];
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<svelte:window bind:innerWidth />

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		{#if mobile && open}
			<div
				in:fly={{ opacity: 1, x: -400, duration: 500 }}
				out:fly={{ opacity: 1, x: -400, duration: 500 }}
				class="fixed top-0 bottom-0 left-0 p-2 w-64 overflow-y-auto bg-surface-100-800-token z-[9999]"
			>
				<div class="grid h-full content-between">
					<div class="flex flex-col gap-8">
						<div class="flex justify-end">
							<button class="btn variant-soft-surface p-2" on:click={() => (open = false)}
								><Icon src={XMark} size="24" />
							</button>
						</div>
						<div class="flex items-center gap-4">
							<Avatar src={metadata.picture.toString()} alt={user.email} width="w-16" />
							<span>{metadata.name}</span>
						</div>
						<nav aria-label="sidebar navigation">
							<ul class="flex flex-col gap-4">
								{#each links as link}
									<li>
										<a
											href={link.href}
											class="inline-flex gap-4 btn sm:text-xl variant-soft-surface w-full justify-start"
											><Icon src={link.logo} size="24" /> {link.name}</a
										>
									</li>
								{/each}
							</ul>
						</nav>
					</div>
					<div class="flex flex-col gap-2">
						<div class="flex justify-between btn variant-soft-surface">
							<span> Dark Mode </span>
							<LightSwitch rounded="rounded-lg" />
						</div>
						<form action="/logout" method="post" class="m-0 p-0">
							<button type="submit" class="btn bg-black/70 w-full justify-start gap-4 text-white"
								><Icon src={ArrowLeftOnRectangle} size="24" /> Sign Out</button
							>
						</form>
					</div>
				</div>
			</div>
		{:else}
			<div
				class="lg:fixed lg:block hidden top-0 bottom-0 left-0 p-2 w-64 overflow-y-hidden bg-surface-100-800-token"
			>
				<div class="grid content-between h-full">
					<div class="flex flex-col gap-8">
						<div class="flex items-center gap-4">
							<Avatar src={metadata.picture.toString()} alt={user.email} width="w-16" />
							<span>{metadata.name}</span>
						</div>
						<nav aria-label="sidebar">
							<ul class="flex flex-col gap-4">
								{#each links as link}
									<li>
										<a
											href={link.href}
											class="inline-flex gap-4 btn sm:text-xl variant-soft-surface w-full justify-start"
											><Icon src={link.logo} size="24" /> {link.name}</a
										>
									</li>
								{/each}
							</ul>
						</nav>
					</div>
					<div class="flex flex-col gap-2">
						<div class="flex justify-between btn variant-soft-surface">
							<span> Dark Mode </span>
							<LightSwitch rounded="rounded-lg" />
						</div>
						<form action="/logout" method="post" class="m-0 p-0">
							<button type="submit" class="btn bg-black/70 text-white w-full justify-start gap-4"
								><Icon src={ArrowLeftOnRectangle} size="24" /> Sign Out</button
							>
						</form>
					</div>
				</div>
			</div>
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="header"
		><div
			class="p-4 lg:ml-64 flex justify-between lg:justify-center items-center bg-surface-100-800-token"
		>
			<button on:click={() => (open = !open)} class="btn variant-soft-surface lg:hidden">
				<Icon src={Bars3} size="24" />
			</button>
			<a href="/" class="btn btn-lg variant-glass-primary text-2xl">Home</a>
			<span class="w-16 lg:hidden" />
		</div></svelte:fragment
	>

	<div class="lg:ml-64">
		<slot />
	</div>
</AppShell>
