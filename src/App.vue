<template>
  <div id="app">
    <div class="center">
      <h1>Simule seu Credito</h1> <br>
      <h3>Idade</h3> <br> <br>
      <input type="radios">

    </div>

    <pre> {{ $data }} </pre>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pessoas: [
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
        { '18', '869,00', 1738, sim },
      ]      
    }
  },
  
  methods: {
    

  },
}
</script>

<style scoped>
  .center {
    width: 300px;
    border: 1px solid #DDD;
    margin: 0px auto;
  }
</style>
