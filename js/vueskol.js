var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Tham'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
      this.sayHello();
    },
    sayHello: function() {
        console.log("Hello sir");
    }
  }
});

var appHooks = new Vue({
  el: '#app-hooks',
  data: {
    message: 'hello'
  },
  created: function() {
    console.log("Created callback");
  },
  mounted: function() {
    console.log("Mounted callback");
    this.message = "changed";
  },
  updated: function() {
    console.log("Updated callback");
  },
  destroyed: function() {
    console.log("Destroyed callback");
  }
});

var appHooks = new Vue({
  el: '#app-conditional',
  data: {
    ok: true
  }
});

Vue.component('welcome', {
  template: '<div>Welcome to Vue world!</div>'
});

var appCustom = new Vue({
  el: '#app-custom'
});