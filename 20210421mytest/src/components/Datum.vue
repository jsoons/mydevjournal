<template>
    <h1> {{ initDatum }}    </h1>
    <h1> {{ currDatum }}    </h1>
    <div @click="updateCurrent">UPDATE</div>
</template>

<script>

//let currentDate = new Date()

export default {
  data() {
      return {
          initDatum: new Date().toLocaleString(), 
          currDatum: new Date().toLocaleString()
      }
  }, 
  methods: {
      updateCurrent() {
          this.currDatum=new Date().toLocaleString()
      }
  }
    
}
</script>

