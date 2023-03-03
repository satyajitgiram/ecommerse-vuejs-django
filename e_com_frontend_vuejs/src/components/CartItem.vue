<template>
    <tr v-for=" item in initialItems">
        <td><router-link :to="item.product.get_absolute_url">{{ item.product.name }}</router-link></td>
        <td>${{ item.product.price }}</td>
        <td>{{ item.quantity }}</td>
        <td>${{ getItemTotal(item)}}</td>
        <td><button class="delete"></button></td>
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
mounted(){
    console.log(this.item, this.initialItem);
},
methods:{
    getItemTotal(item){
        console.log(item)
        for(let i in ){
            console.log(i[0],"Arrraay   ")
        }

       this.item.quantity * this.item.product
    }
},
}
</script>
<style>
</style>