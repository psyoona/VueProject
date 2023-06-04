let computedTest = Vue.createApp({
	data() {
		return {
			a1: 250,
			a2: 300,
			a3: 0
		}
	},
	methods: {
		test_method: function () {
			console.log('test method');
			return this.a1 + this.a2;
		},
		setValue: function () {
			this.a1 = 1000;
			this.a2 = 2000;
		},
		getRandomMethod: function () {
			console.log('random method');
			return Math.random();
		}
	},
	computed: {
		test_computed: function () {
			console.log('test computed');
			return this.a1 + this.a2;
		},
		getRandomComputed: function () {
			console.log('random computed');
			return Math.random();
		}
	}
}).mount('#computedTest');