<template>
    <section>
        <Header />

        <slot />

        <Footer />
    </section>
</template>

<script>
import Header from '~/components/baseComponent/header/Header.vue'
import Footer from '~/components/baseComponent/footer/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Add any additional styles here */
</style>