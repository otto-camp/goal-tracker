<script lang="ts">
	import { browser } from '$app/environment';
	import GoalFormModal from '$lib/modals/GoalFormModal.svelte';
	import {
		modalStore,
		type ModalComponent,
		type ModalSettings,
		Modal
	} from '@skeletonlabs/skeleton';
	import { Icon, Plus } from 'svelte-hero-icons';

	function modalComponentForm(): void {
		const c: ModalComponent = { ref: GoalFormModal };
		const modal: ModalSettings = {
			type: 'component',
			component: c,
			title: 'Custom Form Component'
		};

		if (browser) {
			modalStore.trigger(modal);
		}
	}
</script>

<section class="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
	<button
		class="card inline-flex justify-center items-center py-2 card-hover"
		on:click={modalComponentForm}
	>
		<Icon src={Plus} size="24" />
	</button>
</section>

<Modal />
