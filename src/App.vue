<template>
  <div class="p-2xl" id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ntv-button text="Nucleus Button" />
    <div class="w-6/12">
      <ntv-input label="Nucleus Input" />
    </div>
  </div>
</template>

<script>
import "nucleus-ui/src/theme/theme.css";
import HelloWorld from "./components/HelloWorld.vue";
import NtvButton from "@nui/Button";
import NtvInput from "@nui/Input";

export default {
  name: "app",
  components: {
    HelloWorld,
    NtvButton,
    NtvInput
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
