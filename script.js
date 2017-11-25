new Vue({
  el: '#app1',
  data: {
    name: 'Rieke',
    job: 'Irgendwas mit Medien',
    website: 'http://riekehelmers.com',
    websiteTag: '<a href="riekehelmers.com">Nochmal meine Website</a>'
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
})

new Vue({
  el: '#app2',
  data: {
    age: 20,
    x: 0,
    y: 0
  },
  methods: {
    add: function (inc) {
      this.age += inc;
    },
    substract: function (dec) {
      this.age -= dec;
    },
    updateXY: function () {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert('You clicked me!');
    }
  }
})

new Vue({
  el: '#app3',
  data: {
    name: '',
    age: ''
  },
  methods: {
    logName: function () {
      console.log('You entered your name.')
    },
    logAge: function () {
      console.log('You entered your age.')
    }
  }
})

new Vue({
  el: '#app4',
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  methods: {
    /*addToA: function () {
      return this.a + this.age;
    },
    addToB: function () {
      return this.b + this.age;
    }*/
  },
  computed: {
    addToA: function () {
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function () {
      console.log('addToB');
      return this.b + this.age;
    }
  }
})