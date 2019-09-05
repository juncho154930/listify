<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create Note </h2>
          <form id="create-post-form" @submit.prevent="createNote">
               <div class="form-group col-md-12">
                <label for="title"> Title </label>
                <input type="text" id="title" v-model="title" name="title" class="form-control" placeholder="Enter Title">
               </div>
            <div class="form-group col-md-12">
                <label for="content"> Content </label>
                <input type="text" id="content" v-model="content" name="content" class="form-control" placeholder="Enter Content">
            </div>
            <div class="form-group col-md-4 pull-right">
                <button class="btn btn-success" type="submit"> Create Note </button>
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
        router.push({ name: "home" });
      });
    }
  }
};
</script>