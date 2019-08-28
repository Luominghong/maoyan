<template>
  <div class="cinema">
    <Header :title="title" />
    <Movie></Movie>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/commons/header.vue'
import Movie from '@/components/movie/movie.vue'
export default {
  name: 'cinema',
  data() {
    return {
      title: "影院"
    }
  },
  components: {Header,Movie}
}
</script>
