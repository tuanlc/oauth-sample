<template>
  <div class="hello">
    <h1>OAuth Sample</h1>
    <button @click="login">Github</button>
  </div>
</template>

<script>
import { get } from 'axios';
const clientID = process.env.GITHUB_CLIENT_ID || 'test';
const redirectURI = process.env.REDICRECT_URI || 'http://localhost/callback';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    login() {
      get (
        `https://github.com/login/oauth/authorize?
        client_id=${clientID}&
        redirect_uri=${redirectURI}&
        scope=repo, user&
        allow_signup=true`,
        {
          withCridentials: true
        }
      )
      .then(data => console.log(data))
      .catch(err => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
