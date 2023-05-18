<script lang="ts">
    import {
        IconMoodAnnoyed,
        IconMoodSad,
        IconMoodEmpty,
        IconMoodSmile,
        IconMoodHappy,
    } from '@tabler/icons-svelte';
    import { Label } from 'flowbite-svelte';

    const options = [
        {
            name: 'Anoyed',
            value: 'anoyed',
            icon: IconMoodAnnoyed,
            labelClass: 'peer-checked:border-red-500 peer-checked:text-red-500',
        },
        {
            name: 'Sad',
            value: 'sad',
            icon: IconMoodSad,
            labelClass:
                'peer-checked:border-orange-500 peer-checked:text-orange-500',
        },
        {
            name: 'Empty',
            value: 'empty',
            icon: IconMoodEmpty,
            labelClass:
                'peer-checked:border-yellow-500 peer-checked:text-yellow-500',
        },
        {
            name: 'Smile',
            value: 'smile',
            icon: IconMoodSmile,
            labelClass:
                'peer-checked:border-yellow-400 peer-checked:text-yellow-400',
        },
        {
            name: 'Happy',
            value: 'happy',
            icon: IconMoodHappy,
            labelClass:
                'peer-checked:border-green-600 peer-checked:text-green-600',
        },
    ];
</script>

<div class="grid grid-cols-5 gap-5">
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
                class={`font-medium p-5 rounded-lg border-2 border-gray-400 cursor-pointer flex flex-col items-center ${item.labelClass}`}
            >
                <svelte:component this={item.icon} />
                <span>{item.name}</span>
            </label>
        </div>
    {/each}
</div>
