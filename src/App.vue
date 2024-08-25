<template>
  <main>
    <Modal v-show="store.post">
      <Header />
      <Post 
        :post="store.post"
        :big="true"
      />
    </Modal>

    <Header />
    <router-view />
  </main>
</template>

<script lang="ts" setup>
  import { useMainStore } from '@/stores/MainStore'
  const store = useMainStore()
  document.title = 'Блог'
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #f1f1f2;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
</style>
