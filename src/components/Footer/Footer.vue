<template>
    <footer>
        <div>
            <p>
                Dúvidas? Ligue <a :href="formattedPhoneNumber">{{ phoneNumber }}</a>
            </p>
            <div class="container">
                <ul class="links-help">
                    <li v-for= "link in links" :key="link.id">
                        <a :href="link.url">{{ link.text }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'NxFooter',
  data () {
    return {
      phoneNumber: '0800 591 8942'
    }
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  computed: {
    formattedPhoneNumber () {
      return `tel:${this.phoneNumber.replace(/\D/g, '')}`
    }
  }
}
</script>
<style src="./styles.scss" scoped lang="scss"></style>
