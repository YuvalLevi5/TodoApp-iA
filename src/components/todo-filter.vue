<template>
    <section class="todo-filter">
        <input @input="filter" class="filter-input" type="search" v-model="filterBy.title"
            placeholder="Search by title">
        <div class="flex gap-1 py-1">
            <select v-model="filterBy.isDone" @change="filter">
                <option v-for="(opt, i) in valueOptions" :key="i" :value="valueOptions[i]">
                    {{ userOptions[i] }}</option>
            </select>
            <section>
                <button class="btn btn-secondary" @click="sort">Sort by text</button>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    emits: ['filtered'],
    data() {
        return {
            filterBy: {
                title: '',
                isDone: null,
                toSort: false,
            },
            userOptions: ['All', 'Done', 'Active'],
            valueOptions: [null, true, false],
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', JSON.parse(JSON.stringify(this.filterBy)))
        },
        sort() {
            this.filterBy.toSort = !this.filterBy.toSort
            this.$emit('filtered', { ...this.filterBy })
        },
    },
}
</script>