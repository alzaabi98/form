<template>
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
  <hr />
  <p>
    Total Fronend Languages: <strong> {{ frontendLangs }}</strong>
  </p>
</template>

<script>
export default {
  props: {
    langs: {
      type: Array,
      deafult: [],
    },
  },
  data() {
    return {};
  },
  computed: {
    frontendLangs() {
      let count = 0;
      if (this.langs) {
        this.langs.map((lang) => {
          if (lang.type == "frontend") {
            count++;
          }
        });
      }
      return count;
    },
  },
  methods: {
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

<style>
</style>