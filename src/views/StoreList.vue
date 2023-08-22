<template>
  <div>
    <p>StoreList</p>
    <p>{{ store.stores }}</p>
    <ul>
      <li v-for="store in stores" :key="store">
        {{ store }}
      </li>
    </ul>
  </div>
  <div>
    <StoreInput></StoreInput>
  </div>
</template>

<script>
import { useListStore } from "@/store/storelist";
import StoreInput from "@/components/StoreInput.vue";
export default {
  name: "StoreList",
  components: {
    StoreInput,
  },
  setup() {
    const store = useListStore();
    return { store };
  },
};
</script>
<style lang="scss">
li {
  list-style-type: none;
}
</style>
