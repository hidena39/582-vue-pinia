<template>
  <div>
    <p>Select</p>
    <Form>
      <label for="allStores"></label>
      <select
        v-for="store in stores"
        :key="store"
        name="allStores"
        id="allStores"
      >
        <option :value="store">{{ store }}</option>
      </select>
    </Form>
    <Form>
      <label for="sweets"></label>
      <select name="sweets" id="sweets">
        <option value="chocolate">chocolate</option>
        <option value="muffin">muffin</option>
        <option value="candy">candy</option>
      </select>
    </Form>
  </div>
</template>

<script>
import { useListStore } from "@/store/storelist";
export default {
  name: "ListStoreSelect",
  setup() {
    const store = useListStore();
    return { store };
  },
};
</script>
