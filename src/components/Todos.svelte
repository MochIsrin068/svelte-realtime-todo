<script>
  import TodoItem from "./TodoItem.svelte";

  import { db } from "../services/Firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  // User ID passed from parent
  export let uid;

  // Form Text
  let text = null;

  // Query requires an index,  see screenshot below
  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  const todos = collectionData(query, "id").pipe(startWith([]));

  const add = () => {
    db.collection("todos").add({
      uid,
      text,
      complete: false,
      created: Date.now(),
    });
    text = "";
  };

  const updateStatus = (event) => {
    const { id, newStatus } = event.detail;
    db.collection("todos").doc(id).update({ complete: newStatus });
  };

  const removeItem = (event) => {
    const { id } = event.detail;
    db.collection("todos").doc(id).delete();
  };
</script>

<div class="box columns" style="margin: 0 1px">
  <div class="column is-9">
    <input
      type="text"
      bind:value={text}
      class="input is-info"
      placeholder="type your task here..."
    />
  </div>
  <div class="column is-3">
    <button
      class="button is-primary"
      on:click={add}
      style="width:100%"
      disabled={text === null}
      title={text === null ? "Can't add task before add text" : "add your task"}
      >Add Task</button
    >
  </div>
</div>
<div class="box" style="margin-top : 20px">
  <ul>
    <!-- Use Dollar for realtime updated -->
    {#each $todos as todo}
      <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
    {:else}
      <div style="width:100%;text-align:center;background: #ebfffc;padding:6px">
        <span>No Task 💌</span>
      </div>
    {/each}
  </ul>
</div>

<style>
  input {
    display: block;
  }

  ul {
    text-decoration: none;
    margin: 0 !important;
  }
</style>
