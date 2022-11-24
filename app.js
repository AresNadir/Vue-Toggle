const app = Vue.createApp ({
  data() {
    return {
      spanASelected: true,
      expandIcon: '+',
    };
  },
  methods: {
    spanSelected() {
        this.spanASelected = !this.spanASelected;
        if(this.spanASelected === true ) {
          this.expandIcon = '+';
        } else {
          this.expandIcon = '-';
        }
    }
  },
});


app.mount('#toggleDiv');