<template>
    <section>
        <ul class="todo-list">
            <li v-for="todo in todos" :key="todo.id" class="todo-preview clean-list gap-1">
                <todo-preview :todo="todo" @toggle="$emit('toggleTodo', $event)" />
                
                <div>
                    <router-link class="btn link" :to="`/todo/add/${todo._id}`">Edit</router-link>
                    <button class="btn btn-danger" @click="remove(todo._id)">X</button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import todoPreview from './todo-preview.vue'
export default {
    name: 'todo-list',
    props: ['todos'],
    components: {
        todoPreview,
    },
    methods: {
        remove(todoId) {
            this.$emit('removedTodo', todoId)
        },
    }
}
</script>

<style lang="scss" scoped>

</style>