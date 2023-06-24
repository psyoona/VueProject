// Vue3에서 directive 사용법이 변경되었다.
// 아래 코드는 Vue3 기준으로 작성되었다.

let vueApp = Vue.createApp({
	data() {
		return {
			a1: 'a1',
			a2: 'a2',
			a3: 'gg',
			array1: [10, 20, 30, 40, 50]
		}
	},
	methods: {

	},
	directives: {
		focus2: {
			created: function () {
				console.log('created');
			},
			beforMount: function () {
				console.log('beforMount');
			},
			mounted: function (el) {
				el.focus();
			},
			beforeUpdate: function () {
				console.log('beforeUpdate');
			},
			updated: function () {
				console.log('updated');
			},
			beforeUnmount: function () {
				console.log('beforeUnmount');
			},
			unmounted: function () {
				console.log('unmounted');
			}
		},
		test2: {
			mounted: function (el, binding, vnode) {
				console.log(el);
				console.log('binding.name: ' + binding.name);
				console.log('binding.value: ' + binding.value);
				console.log('binding.arg: ' + binding.arg);

				console.log('binding.modifiers.a1: ' + binding.modifiers.a1);
				console.log('binding.modifiers.a2: ' + binding.modifiers.a2);
				console.log('binding.modifiers.a3: ' + binding.modifiers.a3);
				console.log('binding.modifiers.a4: ' + binding.modifiers.a4);

				console.log(vnode.el);
			}
		}
	}
});

vueApp.directive('focus', {
	mounted: function (el) {
		console.log('focus..');
		el.focus();
	}
});

vueApp.mount('#vueTest');