<template>
  <div class="hello">
    <div v-for="itemData in this.listData" :key="itemData.id">
      <Item v-bind:item="itemData" />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'ItemList',
  components: {
    Item
  },
  data: function () {
    return {
      listData: []
    }
  },
  mounted: function () {
    // fetch('https://jsonplaceholder.typicode.com/photos')
    fetch('https://jsonplaceholder.typicode.com/photos?_start=10&_end=20')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.listData = data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
