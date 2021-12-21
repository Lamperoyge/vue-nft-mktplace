<template>
  <Header />
  <router-view />
</template>

<script>
import Header from './components/header';
import './index.css';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
