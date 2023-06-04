let attributeBindTest = Vue.createApp({
	data() {
		return {
			string1: '문자열',
			link: 'http://yoonslab.com/Laboratory/Tetris',
			imgsrc: '../images/logo.png',
			imgWidth: '200',
			css1Name: 'css1',
			css2Name: 'css2',
			isCss1: false,
			isCss2: false
		}
	},
	methods: {
		setImageWidth: function () {
			this.imgWidth = '400';
			console.log('setImageWidth');
		},
		resetImageWidth: function () {
			this.imgWidth = '200';
			console.log('resetImageWidth');
		},
		setCss1: function () {
			this.isCss1 = true;
			this.isCss2 = true;
		},
		removeCss: function () {
			this.isCss1 = false;
			this.isCss2 = false;
		}
	}
}).mount('#attributeBindTest');