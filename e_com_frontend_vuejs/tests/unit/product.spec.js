
import { mount } from '@vue/test-utils';
import Product from '@views/Product.vue';


describe('Product.vue', () =>{
    it("rendering The product page", () =>{
        const wrapper = mount(Product, {
            props:{
                msg : "hello friends"
            },
        });
        expect(wrapper.text()).toContain("Hello friends")
    })
})

