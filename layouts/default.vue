<!--
 * @Author: Yanc
 * @Date: 2023-03-05 20:12:56
 * @LastEditTime: 2023-03-05 21:44:02
-->
<template>
  <div class="default_layout">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
  .default_layout {
    width: 100%;
    height: 100vh;
  }
</style>
