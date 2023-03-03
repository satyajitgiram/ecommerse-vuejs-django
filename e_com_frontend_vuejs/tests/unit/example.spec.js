import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


// describe("Product.vue", () =>{
//     it("rendering The product page", () =>{
//         const wrapper = mount(Product, {
//             data(){
//                 return {
//                     product: {},
//                     quantity:2,
//                 }
//             },
//         });
//         expect(wrapper.text()).toContain(2)
//     })
// })