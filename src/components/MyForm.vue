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
      <hr />

      <button class="btn btn-primary my-2" @click="addLang">Add</button>
    </div>
    <div class="col-md-8">
      <ul class="list-group">
        <li v-for="(lang, index) in langs" :key="index" class="list-group-item">
          <div class="d-flex justify-content-between">
            <p class="badge" :class="typeClass(lang.type)">
              {{ lang.name }}
            </p>
            <button class="btn" @click="removeLang(index)">X</button>
          </div>
        </li>
      </ul>
      <hr>
      <p>Total Fronend Languages:  <strong> {{ frontendLangs }}</strong></p>

    </div>
  </div>
</template>

<script>
export default {
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
      type: 'frontend'
  
    };
  },

computed: {

    frontendLangs() {
        let count = 0
        this.langs.map( (lang) => {
            if( lang.type == 'frontend') {
                count++
            }
        })
        return  count
    }

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
    typeClass(type) {
      if (type == "backend") {
        return "bg-primary";
      } else if (type == "frontend") {
        return "bg-success";
      } else {
        return "bg-warning";
      }
    },
  },
};
</script>


<style scoped>

</style>