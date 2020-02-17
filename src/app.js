import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Buy Food", isComplete: true},
        {name: "Clean House", isComplete: false},
        {name: "Book Holiday", isComplete: true }
      ]
    },
    methods: {
      saveNewItem: function() {
        this.items.push({
          name: this.newItem,
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
