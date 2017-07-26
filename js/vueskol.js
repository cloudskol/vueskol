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
})