<template>
    <div class="note container__lg">
      <div>
        <h1>Note List App - Stack: Nest.js, Vue.js and MongoDB</h1>
        <div v-if="notes.length === 0">
          <h2> No note found at the moment </h2>
        </div>
      </div>
      <div class="note__content" v-for="note in notes" :key="note._id">
        <h2>{{ note.title }}</h2>
        <p>{{ note.content }}</p>
        <div class="note__buttons">
          <router-link :to="{name: 'Edit', params: {id: note._id}}" class="button" >Edit Note </router-link>
          <button v-on:click="deleteNote(note._id)">Delete Note</button>          
        </div>
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
      if(confirm("Are you sure you want to delete this note?")){
        axios
          .delete(`${server.baseURL}/note/delete?noteID=${id}`)
          .then(data => {
            console.log(data);
            window.location.reload();
          });        
      }
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
    justify-content: space-between;
    margin: 10px;
    padding:10px;
    border:1px solid #000;
    font-size:18px;
    font-weight: 600;
    h2{
      max-width: 100px;
    }
    p{
      max-width: 500px;
    }
  }
  &__buttons{
    display: flex;
    flex-direction:column;
    a{
      margin: 40px 0;
      padding: 4px 8px;
    }
  }
}

</style>