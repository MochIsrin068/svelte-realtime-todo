<script>
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const remove = () => {
    dispatch("remove", { id });
  };

  const toggleStatus = () => {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus,
    });
  };

  export let id;
  export let text;
  export let complete;
</script>

<li in:fly={{ x: 900, duration: 100 }}>
  {#if complete}
    <span class="is-complete">{text}</span>
    <div>
      <button
        on:click={toggleStatus}
        class="button"
        title="UnComplete This Task"
      >
        ✔️
      </button>
      <button on:click={remove} class="button" title="Delete"> 🗑 </button>
    </div>
  {:else}
    <span>{text}</span>
    <div>
      <button on:click={toggleStatus} class="button" title="Complete This Task">
        ❌
      </button>
      <button on:click={remove} class="button" title="Delete"> 🗑 </button>
    </div>
  {/if}
</li>

<style>
  .is-complete {
    text-decoration: line-through;
    color: green;
  }

  li {
    width: 100%;
    background: #ebfffc;
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
    padding: 6px 10px;
    margin-bottom: 6px;
  }
</style>
