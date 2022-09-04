<script>
import axios from "axios";
export default {
  data: function () {
    return {
      product: {},
    };
  },

  created: function () {
    this.showProduct();
  },
  methods: {
    showProduct: function () {
      axios.get("/products/" + this.$route.params.id + ".json").then((response) => {
        this.product = response.data;
        console.log("Product Info", this.product);
      });
    },
  },
};
</script>

<template>
  <div class="products-show">
    <h1>{{ product.name }}</h1>
    <img v-bind:src="product.image_1" v-bind:alt="product.name" />
    <img v-bind:src="product.image_2" v-bind:alt="product.name" />
    <img v-bind:src="product.image_3" v-bind:alt="product.name" />
    <h2>{{ product.price }}</h2>
    <p>{{ product.description }}</p>
    <div>
      <a href="/products">Back to All Products</a>
    </div>
  </div>
</template>

<style>
img {
  margin: auto;
  width: 400px;
  height: 400px;
}
</style>
