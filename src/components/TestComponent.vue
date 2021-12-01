<template>
  <div>
    <h1>All OKAY</h1>
    <ChildComponent
      :number = "numbers"
      @datasended ="calculate"
    />
    <input type="number" v-model="first_number">
    <input type="text" v-model="operator" maxlength="1">
    <input type="number" v-model="second_number">
    <button v-on:click="calculate" >Calcul4ate</button>
    <p>{{result}}</p>

    <p v-show=""></p>
  </div>
</template>

<script>

import ChildComponent from "./ChildComponent";

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      numbers: 15,
      first_number: '',
      operator: '',
      second_number: '',
      result: '',
    }
  },
  // watch: {
  //   // text: (e) => {
  //   //   console.log(e);
  //   // }
  // },
  methods : {
    calculate(argument) {
      // switch (this.operator){
      //   case '+':
      //     return this.result = Number(this.first_number) + Number(this.second_number);
      //   case '-':
      //     return this.result = Number(this.first_number) - Number(this.second_number);
      //   case '/':
      //     return  this.result = Number(this.first_number) / Number(this.second_number);
      //   case '*':
      //     return this.result = Number(this.first_number) * Number(this.second_number);
      //     default:
      //       console.log('error');
      //       break;
      // }
      console.log(argument);

      console.log('b' + 'a' + + 'a')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
