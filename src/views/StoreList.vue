<template>
  <div>
    <p>StoreList</p>
    <p>{{ stores }}</p>
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
import { useSchoolStore } from "@/store/storelist";
import StoreInput from "@/components/StoreInput.vue";
export default {
  name: "StoreList",
  components: {
    StoreInput,
  },
  setup() {
    const store = useSchoolStore();
    return { store };
  },
  data() {
    return {
      stores: ["Super C", "Amazon", "Jean Coutu"],
    };
  },
};
</script>
