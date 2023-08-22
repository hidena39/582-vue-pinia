<template>
  <div>
    <p>StoreInput</p>
    <form @submit.prevent="store.addStore(inputStore)">
      <label for="storename">Store Name</label>
      <input type="text" id="storename" v-model="inputStore" required />
      <input id="submit" type="submit" value="Add store" />
    </form>
  </div>
  <p>Store:{{ this.inputStore }}</p>
</template>

<script>
import { useListStore } from "@/store/storelist";
export default {
  name: "StoreInput",
  setup() {
    const store = useListStore();
    return { store };
  },
};
</script>
