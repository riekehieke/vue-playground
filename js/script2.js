var one = new Vue({
  el: '#app1',
  data: {
    title: 'Vue App One'
  },
  computed: {
    greets: function () {
      return 'Hello from App One';
    }
  }
})

var two = new Vue({
  el: '#app2',
  data: {
    title: 'Vue App Two'
  },
  computed: {
    greets: function () {
      return 'Yo Dudes, this is App Two speaking!';
    }
  },
  methods: {
    changeTitle: function () {
      one.title = "Haha I changed the title!";
    }
  }
})

two.title = "Changed from outside.";



Vue.component('greeting', {
  template: '<p>Hey there, I am a reusable component. My name is {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
  data: function () {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function () {
      this.name = "Mario";
    }
  }
})
new Vue({
  el: '#app3',
  data: {

  }
})

new Vue({
  el: '#app4',
  data: {

  }
})

var