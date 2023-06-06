let inlineStyle = Vue.createApp({
	data() {
		return {
			backgroundColorValue: 'red',
			colorValue: 'yellow',
			styleValue: {
				backgroundColor: 'red',
				color: 'yellow'
			}
		}
	},
	methods: {
		setInlineStyle: function () {
			this.backgroundColorValue = 'yellow',
			this.colorValue = 'red'
		},
		setStyleValue: function () {
			this.styleValue = {
				backgroundColor: 'yellow',
				color: 'red'
			}
		}
	},
	
}).mount('#inlineTest');