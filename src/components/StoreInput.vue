<template>
  <div>
    <p>StoreInput</p>
    <form @submit.prevent="liststore.addStore(inputStore)">
      <label for="storename">Store Name</label>
      <input type="text" id="storename" v-model="inputStore" required />
      <input id="submit" type="submit" value="Add store" />
    </form>
  </div>
</template>

<script>
import { useListStore } from "@/store/storelist";
export default {
  name: "StoreInput",
  setup() {
    const liststore = useListStore();
    return { liststore };
  },
};
</script>
