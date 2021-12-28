<template>
  <div class="row">
    <div class="col-md-4">
      <input
        type="text"
        class="form-control"
        v-model="newLang"
        @keydown.enter="langs.push(newLang)"
      />
      <select v-model="type" class="form-select my-2">
        <option value="frontend">frontend</option>
        <option value="backend">backend</option>
        <option value="both">both</option>
      </select>

      <p>{{ message }}</p>
      <hr />

      <button class="btn btn-primary my-2" @click="addLang">Add</button>
    </div>
    <div class="col-md-8">
      <lang-list :langs="langs"></lang-list>
    </div>
  </div>
</template>

<script>
import LangList from "./LangList.vue";
export default {
  components: {
    LangList,
  },
  data() {
    return {
      langs: [
        { name: "PHP", type: "backend" },
        { name: "JAVASCRIPT", type: "frontend" },
        { name: "Node", type: "both" },
        { name: "Python", type: "backend" },
        { name: "ASP.net", type: "backend" },
        { name: "Flutter", type: "frontend" },
        { name: "Vue", type: "frontend" },
      ],
      newLang: "",
      type: "frontend",
      message: "You Have Selected : ",
    };
  },
  watch: {
    type(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.message = "You Have Selected : ";
      this.message = this.message + newVal;
    },
  },

  methods: {
    addLang() {
      if (this.newLang.length > 0) {
        this.langs.push({
          name: this.newLang,
          type: this.type,
        });
        this.newLang = "";
      }
    },
    removeLang(index) {
      this.langs.splice(index, 1);
    },
  },
};
</script>


<style scoped>
</style>