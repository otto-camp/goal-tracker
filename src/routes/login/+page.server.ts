import { error, type Actions, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals: { supabase } }) => {
		const { data, error: authError } = await supabase.auth.signInWithOAuth({
			provider: 'google'
		});

		console.log(authError);

		if (authError) {
			throw error(400, {
				message: authError.message
			});
		}

		if (data.url) {
			throw redirect(303, data.url);
		}
	}
} satisfies Actions;
