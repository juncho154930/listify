<template>
   <div>
        <h4 class="text-center mt-20">
         <small>
         <button class="btn btn-success" v-on:click="navigate()"> View All Notes </button>
         </small>
        </h4>
        <div class="col-md-12 form-wrapper">
          <h2> Edit Note </h2>
          <form id="create-post-form" @submit.prevent="editNote">
               <div class="form-group col-md-12">
                <label for="title"> Title </label>
                <input type="text" id="title" v-model="note.title" name="title" class="form-control" placeholder="Enter title">
               </div>
                <div class="form-group col-md-12">
                    <label for="content"> Content </label>
                    <input type="text" id="content" v-model="note.content" name="content" class="form-control" placeholder="Enter Content">
                </div>
                <div class="form-group col-md-4 pull-right">
                    <button class="btn btn-success" type="submit"> Edit Note </button>
                </div>           
              </form>
        </div>
    </div>
</template>
<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      note: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getNote();
  },
  methods: {
    editNote() {
      let noteData = {
        title: this.note.title,
        content: this.note.content
      };
      axios
        .put(
          `${server.baseURL}/note/update?noteID=${this.id}`,
          noteData
        )
        .then(data => {
          router.push({ name: "home" });
        });
    },
    getNote() {
      axios
        .get(`${server.baseURL}/note/note/${this.id}`)
        .then(data => (this.note = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>