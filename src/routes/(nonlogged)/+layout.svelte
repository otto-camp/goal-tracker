<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from '../$types';
	import Header from '../Header.svelte';
	import Footer from '../Footer.svelte';

	export let data: LayoutData;
</script>

<AppShell class="relative">
	<svelte:fragment slot="pageHeader">
		<Header {data} />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
