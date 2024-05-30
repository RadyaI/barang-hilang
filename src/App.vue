<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
  --primary-color: #1a1a1a;
  --secondary-color: #212121;
  --text-color: #42b883;
  --text-color-second: #e1e1e1;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins";
}

*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

*::-webkit-scrollbar-thumb {
  background: var(--text-color);
  border: 10px;
}

*::-webkit-scrollbar-track {
  background: var(--secondary-color);
}

a {
  text-decoration: none;
  color: var(--text-color-second)
}
</style>