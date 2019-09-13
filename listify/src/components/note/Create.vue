<template>
   <div class="container__lg">
        <div>
          <h2> Create Note </h2>
          <form @submit.prevent="createNote">
               <div>
                <label for="title"> Title </label>
                <input type="text" v-model="title" name="title" placeholder="Enter Title">
               </div>
            <div>
                <label for="content"> Content </label>
                <textarea type="text" v-model="content" name="content" placeholder="Enter Content"></textarea>
            </div>
            <div>
                <button type="submit"> Create Note </button>
            </div>           
          </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    createNote() {
      let noteData = {
        title: this.title,
        content: this.content
      };
      this.__submitToServer(noteData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/note/create`, data).then(data => {
        router.push({ name: "Note" });
      });
    }
  }
};
</script>