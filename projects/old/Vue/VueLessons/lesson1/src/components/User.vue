<template>
  <div className="user">
    <button @click="deleteUser(index)">Удалить</button>
    <h3>{{ user.name }}</h3>
    <p>
      {{ user.email }} - <b>{{ user.pass }}</b>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    deleteUser: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style scoped>
button {
  border: 0;
  border-radius: 5px;
  outline: none;
  padding: 10px 15px;
  background: #d66c75;
  color: #7f1629;
  font-weight: bold;
  cursor: pointer;
  transition: transform 500ms ease;
  float: right;
}

button:hover {
  transform: translateY(-5px);
}
</style>
