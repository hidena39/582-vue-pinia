<template>
  <div>
    <p>StoreList</p>
    <p>{{ liststore.stores }}</p>
    <ul>
      <li v-for="store in stores" :key="store">
        {{ liststore.store }}
      </li>
    </ul>
  </div>
  <div>
    <StoreInput></StoreInput>
    <ListStoreSelect></ListStoreSelect>
  </div>
</template>

<script>
import { useListStore } from "@/store/storelist";
import StoreInput from "@/components/StoreInput.vue";
import ListStoreSelect from "@/components/ListStoreSelect.vue";
export default {
  name: "StoreList",
  components: {
    StoreInput,
    ListStoreSelect,
  },
  setup() {
    const liststore = useListStore();
    return { liststore };
  },
};
</script>
<style lang="scss">
li {
  list-style-type: none;
}
</style>
