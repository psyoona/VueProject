let watchVue = Vue.createApp({
	data() {
		return {
			show1: true,
			show2: true,
			show3: true,
			status: ''
		}
	},
	methods: {
		setShow1: function () {
			if (this.show1) {
				this.show1 = false;
			} else {
				this.show1 = true;
			}
		},
		setShow2: function () {
			if (this.show2) {
				this.show2 = false;
			} else {
				this.show2 = true;
			}
		},
		setShow3: function () {
			if (this.show3) {
				this.show3 = false;
			} else {
				this.show3 = true;
			}
		},
		beforeEnter: function () {
			this.status = '나타나기 전';
		},
		enter: function () {
			this.status = '나타나는 중';
		},
		afterEnter: function () {
			this.status = '나타난 후';
		},
		enterCancelled: function () {
			this.status = '나타나는 과정 취소';
		},
		beforeLeave: function () {
			this.status = '사라지기 전';
		},
		leave: function () {
			this.status = '사라지는 중';
		},
		afterLeave: function () {
			this.status = '사라진 후';
		},
		leaveCancelled: function () {
			this.status = '사라지는 과정 취소';
		}
	}
}).mount('#vueTest');