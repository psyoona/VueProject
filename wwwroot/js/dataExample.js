let vueTest = Vue.createApp({
	data() {
		return {
			value1: 100,
			obj1: {

			},
			counter: 0,
			newValue: 0,
			oldValue: 0
		}
	},
	methods: {
		setValue1: function () {
			this.value1 = 1000;
		},
		setValue2: function () {
			this.obj1['value2'] = 2000;
		},
		getValue1: function () {
			return this.value1;
		},
		getValue2: function () {
			return this.obj1.value2;
		},
		addCounter: function () {
			this.counter++;
		}
	}
});

let initialize = vueTest.mount('#vueTest');

initialize.$watch('counter', function (newValue, oldValue) {
	this.newValue = newValue;
	this.oldValue = oldValue;
});