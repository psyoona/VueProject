let eventVue = Vue.createApp({
	data() {
		return {
			data1: 0,
			data2: 0,
			result1: 0,
			inOutCss: 'out'
		}
	},
	methods: {
		btnEvent: function () {
			alert('hi~');
		},
		imageEvent: function () {
			alert('image click event');
		},
		addNumber: function () {
			this.result1 = this.data1 + this.data2;
		},
		inEvent: function (){
			this.inOutCss = 'in'
		},
		outEvent: function () {
			this.inOutCss = 'out'
		}
	},
	
}).mount('#eventVueTest');