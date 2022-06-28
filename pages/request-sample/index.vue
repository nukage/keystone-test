<template>
<div class="requestSamplePage">
    <div class="interiorTitle">
        <div class="container">
            <h1>Request A Free Sample</h1>
            <p>We’re happy to provide samples<br/> for whichever product you’d like </p>
        </div>
    </div>
    <div class="container">
        <div class="breadcrumb mt-var">
            <Nuxt-link to="/">Home</Nuxt-link> / <span>Support &amp; Resources</span>
        </div>
                <section class="requestSampleSection">
                    <form action="" class="requestSampleSection__form grid grid-cols-2 gap-4 mb-40 defaultForm">
                        <div class="requestSampleSection__form__item col-span-2">
                        <label for="which-product">Which product would you like?*</label>
                        <textarea id="which-product" name="which-product" />
                        </div>
                        <div v-for="n in 8" class="requestSampleSection__form__item" :key="n">
                           <label>Field Label</label>
                           <input type="text"/>  
                        </div>
                        <div class="requestSampleSection__form__item col-span-2">
                            <label for="">Address</label>
                            <input type="text"/>  
                            
                        </div>
                        <div class="requestSampleSection__form__item col-span-2 ">
                            <input type="text"/>  
                        </div>
                        <div v-for="n in 4" class="requestSampleSection__form__item  " :key="n">
                            <input type="text"/>
                        </div>
                        <div class="text-18 text-[#3c3c3c] col-span-2">
                            *Physical address to ship sample to. No P.O. boxes.
                        </div>
                        <button class="w-[250px] inline-block">SUBMIT</button>
                        
                    </form>
                </section>
    </div>
</div>
</template>