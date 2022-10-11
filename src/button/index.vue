<template>
  <button
    :class="`px-9 py-4 font-semibold rounded-lg shadow-md
    text-white
    hover:bg-green-700
    border-none cursor-pointer bg-${props.color}-500`"
  >
    <i v-show="!!props.icon" :class="`i-ic-baseline-${props.icon} p-3`"></i>
    <span v-show="!props.icon">button</span>
  </button>
</template>
<script setup>
import { defineProps } from "vue";
import "uno.css";
const props = defineProps({
  color: {
    default: "blue",
    type: String,
  },
  icon: String,
});
</script>
