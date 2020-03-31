<template>
  <div>
    <fileList/>
  </div>
</template>

<script>
// @ is an alias to /src
import fileList from '@/components/fileList.vue'

export default {
  name: 'Home',
  components: {
    fileList
  }
}
</script>
