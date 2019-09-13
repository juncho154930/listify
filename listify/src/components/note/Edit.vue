<template>
   <div class="container__lg">
        <h4>
         <small>
         <button v-on:click="navigate()"> Go Back </button>
         </small>
        </h4>
        <div>
          <h2> Edit Note </h2>
          <form @submit.prevent="editNote">
               <div>
                <label for="title"> Title </label>
                <input type="text" v-model="note.title" name="title" placeholder="Enter title">
               </div>
                <div>
                    <label for="content"> Content </label>
                    <textarea type="text" v-model="note.content" name="content" placeholder="Enter Content"></textarea>
                </div>
                <div>
                    <button type="submit"> Edit Note </button>
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
      note: {},
      confirmMsg: true
    };
  },
  beforeRouteLeave (to, from, next) {
    if(this.confirmMsg){
      if(confirm('You are about to discard your changes')) next();
    } else{
      next();
    }
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
      this.confirmMsg = false;
      axios
        .put(
          `${server.baseURL}/note/update?noteID=${this.id}`,
          noteData
        )
        .then(data => {
          router.push({ name: "Note" });
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