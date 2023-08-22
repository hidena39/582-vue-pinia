<template>
  <div>
    <p>StoreInput</p>
    <form @submit.prevent="store.addStore(inputStore)">
      <label for="storename">Store Name</label>
      <input type="text" id="storename" v-model="inputStore" required />
    </form>
    <input id="submit" type="submit" value="Add store" />
  </div>
  <p>Store:{{ inputStore }}</p>
</template>

<script>
import { useSchoolStore } from "@/store/storelist";
export default {
  name: "StoreInput",
  setup() {
    const store = useSchoolStore();
    return { store };
  },
};
</script>
