<!--
 * @Author: swipth
 * @Description:
-->
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Query extends Vue {
  mounted() {
    this.resize();
    this.setHeight();
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.setHeight);
  }
  contentHeight=240
  tableHeight = 700;

  resize() {
    window.addEventListener("resize", () => {
      requestAnimationFrame(this.setHeight);
    });
  }

  setHeight() {
    this.tableHeight = window.innerHeight - this.contentHeight;
  }

}
</script>

<template>
  <div>Query</div>

</template>

<style scoped lang="less">

</style>
