<template>
    <div class="container">
        <div class="card-header" v-text="title"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Practice Laravel Vue App'
            }
        },
        mounted() {
            console.log('Component mounted.', this)
        }
    }
</script>
