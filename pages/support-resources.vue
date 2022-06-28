<template>
<div class="supportResourcesPage">
      <div class="interiorTitle">
    <div class="container">
      <h1>Support &amp; Resources</h1> 
      

    </div>
  </div>
  <div class="container">
                <div class="breadcrumb mt-var">
                    <Nuxt-link to="/">Home</Nuxt-link> / <span>Support &amp; Resources</span>
                </div>
  <div class="supportResourcesSection">
      <div class="supportResourcesSection__grid">
          <div class="supportResourcesSection__item" v-for="n in 8" :key="n">
              <img src="~/assets/images/icons/support_book.svg"/>
              <h4>Literature</h4>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.</p>
              <a href="#" class="supportResourcesSection__item__learnMore">Learn More</a>
        </div> 
    <div class="supportResourcesSection__warranty">
        <h3>
            <img src="~/assets/images/icons/helpme.svg"/>
            Warranty Information
        </h3>
        <a href="#">General Warranty Information</a>
        <a href="#">Understanding The Date Stamp</a>
        <a href="#">Recall Notices</a>
    </div> 
    </div>
            </div>
  </div>
</div>
</template>