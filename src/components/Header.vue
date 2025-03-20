<script setup>

/*
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
*/

/*
<h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
*/
</script>

<template>
  <header>
    <a href="/" id="logo"></a>
    <h1>Cuerviar</h1>
    <div class="redesSociales">
      <a href="https://www.youtube.com/@cuerviar-dev" target=" _blank" id="youtube"></a>
    </div>
    <nav class="enlacesPc">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/ubuntu">Ubuntu</RouterLink>
      <RouterLink to="/programas">Programas</RouterLink>
      <RouterLink to="/windows10">Windows 10</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #0D0D1A;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
}

h1 {
  color: white;
}

#logo {
  display: block;
  width: 5rem;
  height: 5rem;
  background-image: url("/cuervo.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

header a {
  text-decoration: none;
  color: white;
}

header .enlacesPc {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
}

header .enlacesPc li {
  margin-right: 2rem;
}

header .enlacesPc li:last-child {
  margin-right: 0;
}

#youtube {
  display: block;
  width: 4rem;
  height: 2rem;
  background-image: url("/youtube.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>