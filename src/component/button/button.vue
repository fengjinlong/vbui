<template>
  <button :disabled="props.disabled" :class="`btn btn-${props.type}`">
    <slot></slot>
  </button>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "VButton",
});
</script>
<script setup>
// const emit = defineEmits(["click"]);
const props = defineProps({
  type: {
    default: "blue",
    type: String,
  },
  disabled: Boolean,
});

// const handleClick = (evt) => {
//   emit("click", evt);
// };
</script>
<style scoped>
@import "bootstrap/dist/css/bootstrap.min.css";
.div {
  font-size: 30px;
}
</style>
