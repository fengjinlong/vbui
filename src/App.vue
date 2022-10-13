<template>
  <v-button />
  <v-button>Default</v-button>
  <v-button type="primary">Primary</v-button>
  <v-button type="success" @click="btn">Success</v-button>
  <v-button type="info">Info</v-button>
  <v-button type="warning">Warning</v-button>
  <v-button type="danger" disabled>Danger disabled</v-button>
  <VButton type="danger">Danger</VButton>
</template>
<script setup>
import VButton from "./component/button/button.vue";
const btn = () => {
  console.log("btn", 666);
};
</script>
