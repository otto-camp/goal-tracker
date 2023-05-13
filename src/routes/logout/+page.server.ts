import { redirect, type Actions, error } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals: { supabase } }) => {
		const { error: authError } = await supabase.auth.signOut();

		if (authError) {
			throw error(404, {
				message: authError.message
			});
		}

		throw redirect(303, '/');
	}
} satisfies Actions;
