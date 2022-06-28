<template>
    <div class="container posts">
        <div class="posts__grid">
            <div>

                <div class="breadcrumb">
                    <Nuxt-link to="/">Home</Nuxt-link> / <Nuxt-link to="/blog">News</Nuxt-link>
                </div>
                <h2>News</h2>
                <div class="newsCardBig">
                    <Nuxt-link to="/blog/single-post" class="newsCardBig__thumb">
                        <img src="http://placehold.jp/865x466.png" />
                    </Nuxt-link>

                    <div class="newsCardBig__content">
                        <h3 class="newsCardBig__title">Featured Blog Post Title Will Be Placed Here</h3>
                        <date class="newsCardBig__date">March 1, 2021</date>
                        <div class="newsCardBig__excerpt">
                            <p>
                                Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor
                                nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed
                                dolor elementum imperdiet.
                            </p>
                        </div>

                    </div>
                </div>

                <div class="newsCardsSmall">
                    <div v-for="n in 4" class="newsCardSmall" :key="n">
                        <div class="newsCardSmall__thumb">
                            <img src="http://placehold.jp/422x393.png" />
                        </div>
                            <div class="newsCardSmall__content">

                                <h3 class="newsCardSmall__title">Featured Blog Post Title Will Be Placed Here</h3>
                            <date class="newsCardSmall__date">March 1, 2021</date>
                            <div class="newsCardSmall__excerpt">
                                <p>
                                    Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus
                                    tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet
                                    nulla sed dolor elementum imperdiet.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <PostsSidebar />
        </div>
    </div>
</template>

<script>
import PostsSidebar from '~/components/PostsSidebar.vue';
</script>