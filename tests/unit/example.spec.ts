import { mount } from '@vue/test-utils'
import TakeQuizzes from '@/views/take/TakeQuizzes.vue'

describe('TakeQuizzes.vue', () => {
  it('renders tab 1 TakeQuizzes', () => {
    const wrapper = mount(TakeQuizzes)
    expect(wrapper.text()).toMatch('Tab a Quiz')
  })
})
