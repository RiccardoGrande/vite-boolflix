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
</script>


<template>
    <div class="input-group ">
        <input type="text" class="form-control" placeholder="Search " v-model='store.searchText'>

        <button class="btn btn-outline-secondary" type="button" @click="$emit('makeSearch', 'movie')">Search</button>
    </div>
</template>



<style lang="scss" scoped>
.input-group {
    width: 40%;

}
</style>