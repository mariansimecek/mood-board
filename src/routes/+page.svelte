<script lang="ts">
    import { Button, Modal } from 'flowbite-svelte';
    import AddRecord from '../components/AddRecord.svelte';
    let defaultModal = false;
</script>

<div class="py-10">
    <Button on:click={() => (defaultModal = true)}>Default modal</Button>
</div>

<Modal title="Přidat záznam" bind:open={defaultModal} autoclose>
    <AddRecord />
    <svelte:fragment slot="footer">
        <Button on:click={() => alert('Handle "success"')}>Přidat</Button>
        <Button color="alternative">Zrušit</Button>
    </svelte:fragment>
</Modal>
