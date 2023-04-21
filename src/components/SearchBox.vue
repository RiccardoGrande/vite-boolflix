<script>
import { store } from '../store'
export default {
    name: 'SearchBox',
    emits: ['makeSearch'],
    data() {
        return {
            store
        }
    }
}
</script>rch


<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search " v-model='store.searchText'>

        <button class="btn btn-outline-secondary" type="button" @click="$emit('makeSearch', 'movie')">Search</button>
    </div>
</template>



<style lang="scss" scoped>
.input-group {
    width: 40%;

}
</style>