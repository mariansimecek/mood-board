<script lang="ts">
	import { IconMoodAnnoyed, IconMoodSad, IconMoodEmpty, IconMoodSmile,IconMoodHappy } from '@tabler/icons-svelte';
	const options = [
		{
			name: 'Anoyed',
			value: 'anoyed',
			icon: IconMoodAnnoyed
		},
		{
			name: 'Sad',
			value: 'sad',
			icon: IconMoodSad
		},
		{
			name: 'Empty',
			value: 'empty',
			icon: IconMoodEmpty
		},
		{
			name: 'Smile',
			value: 'smile',
			icon: IconMoodSmile
		},
		{
			name: 'Happy',
			value: 'happy',
			icon: IconMoodHappy
		}
	];
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

