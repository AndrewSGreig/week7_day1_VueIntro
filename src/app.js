import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Buy Food", priority: "high", isComplete: true},
        {name: "Clean House", priority: "low", isComplete: false},
        {name: "Book Holiday", priority: "high", isComplete: true }
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        console.log(this.priority);
        this.items.push({
          name: this.newItem,
          priority: this.priority,
          isComplete: false
        });
        this.newItem = "";
      },
      completeItem: function(index) {
        this.items[index].isComplete = true;
      }
    }
  });
});
