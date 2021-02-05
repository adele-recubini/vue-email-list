// Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.
// La chiamata ajax vi ritornerà ogni volta un'email random.



// VUEJS ---------------------------------------------------------
new Vue({
  el: '#app',
  data: {
    emailGenerate:[]
  },
  mounted() {
    const self = this;
    // faccio la chiamata e la faccio girare per dieci volte
    for (var i = 0; i < 10; i++){

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(risposta) {
        console.log(risposta.data.response);
        if (!self.emailGenerate.includes(risposta.data.response)) {
          self.emailGenerate.push(risposta.data.response)
        }

      });
    }
  }

})
Vue.config.devtools = true


// if (!self.emailGenerate.includes(risposta.data.response)) {
//   self.emailGenerate.push(risposta.data.response)
// }
