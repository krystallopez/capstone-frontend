<script>
import axios from "axios";
export default {
  data: function () {
    return {
      products: [],
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts: function () {
      axios.get("/products.json").then((response) => {
        this.products = response.data;
        console.log("products index", this.products);
      });
    },
  },
};
</script>

<template>
  <div class="products-index">
    <h1>All Products</h1>
    <div v-for="product in products" v-bind:key="product.id">
      <h2>{{ product.name }}</h2>
      <img v-bind:src="product.image_1" v-bind:alt="product.name" />
      <img v-bind:src="product.image_2" v-bind:alt="product.name" />
      <img v-bind:src="product.image_3" v-bind:alt="product.name" />
      <p>{{ product.price }}</p>
      <p>{{ product.description }}</p>
      <a v-bind:href="`/products/${product.id}`">To Product</a>
    </div>
  </div>
</template>

<style scoped>
img {
  margin: auto;
  width: 400px;
  height: 400px;
}
</style>
