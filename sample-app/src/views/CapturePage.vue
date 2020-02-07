<template>
  <div class="capture-page">
      <h1>キャプチャページ</h1>
    <Capture/>
  </div>
</template>

<script>
// @ is an alias to /src
import Capture from '@/components/Capture.vue'

export default {
  name: 'capture-page',
  components: {
    Capture
  }
}
</script>