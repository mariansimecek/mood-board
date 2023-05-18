<script lang="ts">
    import { Button, Label, Modal, Textarea } from 'flowbite-svelte';
    import MoodSelect from '../components/MoodSelect.svelte';
    let defaultModal = false;
</script>

<div class="py-10">
    <Button on:click={() => (defaultModal = true)}>Přidat záznam</Button>
</div>

<Modal title="Přidat záznam" bind:open={defaultModal} autoclose>

<div>
    <Label for="mood" class="mb-2">Nálada</Label>
    <MoodSelect />
    </div>

    <div>
    <Label for="mood" class="mb-2">Poznámka</Label>
    <Textarea/>

    </div>
    <svelte:fragment slot="footer">
        <Button on:click={() => alert('Handle "success"')}>Přidat</Button>
        <Button color="alternative">Zrušit</Button>
    </svelte:fragment>
</Modal>
