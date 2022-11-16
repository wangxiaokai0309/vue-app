<template>
  <div class="app-home">
    <h1>This is an app home page ~</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "AppHome",
  components: {
    HelloWorld,
  },
  setup() {
    return {};
  },
});
</script>
