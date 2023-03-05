<!--
 * @Author: Yanc
 * @Date: 2023-03-05 20:20:13
 * @LastEditTime: 2023-03-05 20:34:31
-->
<template>
  <div class="page-1">
    page-1 <NuxtLink to="/page-1/page-1-1">显示children页</NuxtLink>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
  .page-1 {
    height: 100%;
    background-color: gray;
  }
</style>
