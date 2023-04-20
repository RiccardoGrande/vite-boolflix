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
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search " v-model='store.searchText'>
        <button class="btn btn-outline-secondary" type="button" @click="$emit('makeSearch')">Search</button>
    </div>
</template>



<style lang="scss" scoped></style>