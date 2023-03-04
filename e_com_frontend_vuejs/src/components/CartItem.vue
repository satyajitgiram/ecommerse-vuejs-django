<template>
    <tr v-for="item in item">
        <td><router-link :to="item.product.get_absolute_url">{{ item.product.name }}</router-link></td>
        <td>$ {{ item.product.price }}</td>
        <td>
            {{ item.quantity }}
            <a @click="incrementQuantity(item)">+</a>
            <a @click="decrementQuantity(item)">-</a>
        </td>
        <td>$ {{ getItemTotal(item)}}</td>
        <td><button class="delete" @click="removeFromCart(item)"></button></td>
    </tr>
</template>

<script>
    export default{
        name:"CartItem",
        props:{
            initialItems: Object
        },
        computed:{
            item(){
                return this.initialItems
            }
        },
        data(){
            return{
                item: this.initialItems
            }
        },
        methods:{
            getItemTotal(item){
                console.log(item.product.price)
                return (item.quantity * item.product.price).toFixed(2)
            },
            incrementQuantity(item){
                item.quntity += 1;
                this.updateCart()
            },

            decrementQuantity(item){
                item.quntity -= 1;
                if (this.quntity ===0 ){
                    this.$emit('removeFromCart', item)
                }
                this.updateCart()
            },

            updateCart(){
                localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
            },
            removeFromCart(item){
                this.$emit('removeFromCart', item)
                this.updateCart()
            }
        },
    }   
</script>