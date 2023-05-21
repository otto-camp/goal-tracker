import type { Profile } from '$lib/types/Types';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	const { data, error: err } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', session?.user.id)
		.returns<Profile[]>();

	if (err) {
		throw error(404, {
			message: err.message
		});
	}
	return {
		user: data[0]
	};
}) satisfies LayoutServerLoad;
