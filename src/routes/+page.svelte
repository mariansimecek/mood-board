<script lang="ts">
    import {
        IconMoodAnnoyed,
        IconMoodSad,
        IconMoodEmpty,
        IconMoodSmile,
        IconMoodHappy,
    } from '@tabler/icons-svelte';

    import { signIn, signOut } from '@auth/sveltekit/client';
    import { page } from '$app/stores';
    const options = [
        {
            name: 'Anoyed',
            value: 'anoyed',
            icon: IconMoodAnnoyed,
        },
        {
            name: 'Sad',
            value: 'sad',
            icon: IconMoodSad,
        },
        {
            name: 'Empty',
            value: 'empty',
            icon: IconMoodEmpty,
        },
        {
            name: 'Smile',
            value: 'smile',
            icon: IconMoodSmile,
        },
        {
            name: 'Happy',
            value: 'happy',
            icon: IconMoodHappy,
        },
    ];
    console.log($page)
</script>

<div class="my-10 flex gap-10">
    {#each options as item}
        <div>
            <input
                id={'mood_' + item.value}
                type="radio"
                name="mood"
                value={item.value}
                class="peer hidden"
            />
            <label
                for={'mood_' + item.value}
                class="p-5 border-2 border-gray-400 peer-checked:border-blue-600 cursor-pointer flex flex-col items-center"
            >
                <svelte:component this={item.icon} />
                <span>{item.name}</span>
            </label>
        </div>
    {/each}
</div>

<h1>SvelteKit Auth Example</h1>
<p>
    {#if $page.data.session}
        {#if $page.data.session.user?.image}
            <span
                style="background-image: url('{$page.data.session.user.image}')"
                class="avatar"
            />
        {/if}
        <span class="signedInText">
            <small>Signed in as</small><br />
            <strong>{$page.data.session.user?.name ?? 'User'}</strong>
        </span>
        <button on:click={() => signOut()} class="button">Sign out</button>
    {:else}
        <span class="notSignedInText">You are not signed in</span>
        <button on:click={() => signIn('github')}>Sign In with GitHub</button>
    {/if}
</p>
