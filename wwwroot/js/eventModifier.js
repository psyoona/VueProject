let eventModifier = Vue.createApp({
	data() {
		return {
			data1: 0,
			data2: 0,
			result1: 0,
			inOutCss: 'out'
		}
	},
	methods: {
		method1: function () {
			alert('method1');
		},
		method2: function () {
			alert('method2');
		}
	},
	
}).mount('#eventModifier');