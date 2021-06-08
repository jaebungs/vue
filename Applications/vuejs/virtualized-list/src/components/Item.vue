<template>
    <div class="image-item">
        <p>Item number - {{item.id}}</p>
        <!-- <img :src="require('imageItem.url')"> -->
    </div>
</template>
<script>
    export default {
        name: 'Item',
        props: ['item']
    }
</script>