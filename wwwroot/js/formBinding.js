let formBinding = Vue.createApp({
	data() {
		return {
			input1: '',
			input2: '',
			input3: false,
			input4: false,
			input5: false,
			input6: false,
			input7: false,
			input8: false,
			radio1: '',
			select1: 'item2',
			input11: '',
			input12: '',
			input13: '',
		}
	},
	methods: {
		checkType: function () {
			alert(typeof(this.input12));
		}
	},
	
}).mount('#formBindingTest');