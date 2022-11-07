<template>
    <section v-if="todoToEdit" class="todo-edit main-page">
        <h4>{{ pageTitle }}</h4>
        <form @submit.prevent="save" class="flex flex-col gap-1">
            <div class="flex">
                <input type="checkbox" v-model="todoToEdit.isDone">
                <input type="text" v-model="todoToEdit.title" placeholder="Title">
            </div>
            <input type="date" v-model="todoToEdit.dueDate">
            <button class="btn btn-success">Save</button>
            <router-link class="btn link btn-danger text-center" to="/">Cancel</router-link>
        </form>
    </section>
</template>

<script>
import { utilService } from '../services/util-service'
export default {
    data() {
        return {
            todoToEdit: null,
        }
    },
    async created() {
        const { todoId } = this.$route.params
        if (todoId) {
            var currTodo = await this.$store.dispatch({ type: 'getById', todoId })
            if (!currTodo) {
                this.$router.push('/')
                return
            }
            this.todoToEdit = JSON.parse(JSON.stringify(currTodo))
        } else {
            this.todoToEdit = utilService.getEmptyTodo()
        }
    },
    methods: {
        save() {
            if (!this.todoToEdit.title) return

            if (this.todoToEdit._id) {
                this.$store.commit({ type: 'updateTodo', todo: this.todoToEdit })
            } else {
                this.$store.commit({ type: 'addTodo', todo: this.todoToEdit })
            }
            this.$router.push('/')
        },
    },
    computed: {
        pageTitle() {
            const { todoId } = this.$route.params
            return todoId ? 'Edit todo' : 'Add todo'
        }
    }

}
</script>

<style lang="scss" scoped>

</style>