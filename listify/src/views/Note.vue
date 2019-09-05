<template>
    <div class="container-fluid">
      <div class="text-center">
        <h1>Nest Note List App Tutorial</h1>
       <p> Built with Nest.js, Vue.js and MongoDB</p>
       <div v-if="notes.length === 0">
            <h2> No note found at the moment </h2>
        </div>
      </div>

        <div class="">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="note in notes" :key="note._id">
                  <td>{{ note.title }}</td>
                  <td>{{ note.content }}</td>
                  <td>
                    <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" style="margin-bottom: 20px;">
                                  <router-link :to="{name: 'Edit', params: {id: note._id}}" class="btn btn-sm btn-outline-secondary">Edit Note </router-link>
                                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteNote(note._id)">Delete Note</button>
                                </div>
                              </div>
                  </td>
                </tr>
              </tbody>
            </table>
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