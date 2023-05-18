import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
    providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
});
// const handlePocketBase = (async ({ event, resolve }) => {
//     event.locals.pb = new PocketBase(POCKETBASE_URL);
//     const response = await resolve(event);
//     return response;
// }) satisfies Handle;
//
// export const handle = sequence(handleAuth, handlePocketBase);
