<template>
  <div>
    <h1>sax arir</h1>
    <p>{{number}}</p>
    <button @click="sendParent">send to parent</button>
  </div>

</template>
<script>


export default {
  props: [
    'number'
  ],
  methods: {
    sendParent() {
      return this.$emit('datasended','hey')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
