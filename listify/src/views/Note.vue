<template>
    <div class="note">
      <div>
        <h1>Note List App - Stack: Nest.js, Vue.js and MongoDB</h1>
        <div v-if="notes.length === 0">
          <h2> No note found at the moment </h2>
        </div>
      </div>
      <div class="note__content" v-for="note in notes" :key="note._id">
        <div>{{ note.title }}</div>
        <div>{{ note.content }}</div>
        <router-link :to="{name: 'Edit', params: {id: note._id}}" >Edit Note </router-link>
        <button v-on:click="deleteNote(note._id)">Delete Note</button>
      </div>
    </div>
</template>

<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      notes: []
    };
  },
  created() {
    this.fetchNotes();
  },
  methods: {
    fetchNotes() {
      axios
        .get(`${server.baseURL}/note/notes`)
        .then(data => (this.notes = data.data));
    },
    deleteNote(id) {
      axios
        .delete(`${server.baseURL}/note/delete?noteID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>

<style scoped lang="scss">
.note{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align:center;
  &__content{
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
    border:1px solid $text-black;
    font-size:18px;
    font-weight: 600;
    a{
      padding: 10px;
      background-color: #ccc;
    }
  }
}

</style>