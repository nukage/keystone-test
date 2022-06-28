<template>
<div class="contactPage">
  <div class="interiorTitle">
    <div class="container">
      <h1>Contact Us</h1> 
      <p>We’re here to help and provide answers to any questions you may have. We look forward to hearing from you.</p>

    </div>
  </div>
 <div class="container">
 

                    <div class="breadcrumb mt-var">
                    <Nuxt-link to="/">Home</Nuxt-link> / <span>Contact Us</span>
                </div>
  <section class="contactSection">
    <div class="contactSection__colOne">
      <form class="contactSection__form defaultForm">
        <div class="contactSection__form__grid">
          <div v-for="n in 6" class="contactSection__form__item" :key="n">
            <label for="firstname">Form Label</label> 
            <input type="text" name="firstname" id="firstname" />
          </div>
 
 
        </div>
        <div class="contactSection__form__bottom">
          <label for="message">Message</label>
          <textarea class="contactSection__form__bottom__textarea" placeholder="Please provide the information you have about the product (e.g., product name, part number, size, etc.)." />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
    <div class="colTwo">
      <h4>Address</h4>
      <h5>Keystone Technologies</h5>
      <p>2750 Morris Rd<br/>Lansdale, PA 19446</p>
      <p><strong>Phone: </strong><a href="tel:8004642680">800.464.2680</a></p>
      <p><strong>Fax: </strong><a href="tel:8889660556">888.966.0556</a></p>
      <p><strong>Email: </strong><a href="mailto:info@keystonetech.com">info@keystonetech.com</a></p>
    </div>
  </section>
 </div>
 <div class="contactLinks">
  <div class="container"> 
    <div class="contactLinks__grid">
      <div class="contactLinks__item" v-for="n in 3" :key="n">
        <h3>Free Samples</h3>
        <img class="underlines" src="~/assets/images/card-underline.svg"/>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
        </p>
        <a href="#" class="contactLinks__item__btn">Visit Sample Page <img src="~/assets/images/chevron-right-primary.svg"></a>
      </div>
    </div>  
  </div>
 </div>
  </div>
  </template>

<script>

export default {
  head() {
    return {
      title: 'Contact Page'
    }
  },
  methods:{
    message(){
      console.log('this is a message');
    }
  },
  mounted(){
    console.log('this is the index page')
  }
}

</script>
