import { mount } from '@vue/test-utils'
import LoginForm from '@/components/Forms/LoginForm.vue'

describe('LoginForm.vue', () => {
	test('snapshot', () => {
		const wrapper = mount(LoginForm)
		expect(wrapper).toMatchSnapshot()
	})
})
