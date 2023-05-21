<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	export let parent: any;
</script>

{#if $modalStore[0]}
	<div class="card p-4 w-modal shadow-xl space-y-4">
		<header class="text-2xl font-bold">{$modalStore[0].title ?? '(title missing)'}</header>
		<form
			action="/dashboard/addgoal"
			method="post"
			class="border border-surface-500 p-4 space-y-4 rounded-container-token"
		>
			<label class="label">
				<span>Name</span>
				<input type="text" name="name" class="input py-2" />
			</label>
			<label class="label">
				<span>Name</span>
				<input type="text" name="name" class="input py-2" />
			</label>
			<label class="label">
				<span>Name</span>
				<input type="text" name="name" class="input py-2" />
			</label>
		</form>
		<footer class={parent.regionFooter}>
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}
				>{parent.buttonTextCancel}</button
			>
			<button class="btn {parent.buttonPositive}" type="submit">Submit Form</button>
		</footer>
	</div>
{/if}
