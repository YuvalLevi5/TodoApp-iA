<template>
    <section v-if="todo" @click="toggleTodo" class="todo-info" :class="{ 'line-through': todo.isDone }">
        <input type="checkbox" id="checkbox" v-model="todo.isDone" disabled>
        <div>
            <label for="checkbox">
                {{ todo.title }} <br> &#9
                <p v-if="todo.dueDate">Due Date: {{ todo.dueDate }}</p>
            </label>
        </div>
    </section>
</template>

<script>
export default {
    props: ['todo'],
    methods: {
        toggleTodo() {
            this.$emit('toggle', this.todo._id)
        },
    }
}
</script>

<style lang="scss" scoped>

</style>