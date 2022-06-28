<template>

            <div class="postsSidebar">
                <div class="postsSidebar__forms">
                    <h3>
                        Sign up for updates 
                    </h3>
                        <form>
                            <label><img src="~/assets/images/icons/envelope-blk.png"/>Enter Email</label>
                            <input name="email" type="text" />
                        </form>
                    <h3>
                        Search News
                    </h3>
                        <form>
                            <label><img src="~/assets/images/icons/search-blk.png"/>Enter Keywords</label>
                            <input name="email" type="text" />
                        </form>
                </div> 
                    <div class="postsSidebar__featuredPosts">
                        <h3 class="postsSidebar__featuredPosts__heading underlines">
                            Featured Posts
                        </h3> 
                        <a href="postsSidebar__featuredPosts__postsLink" v-for="n in 4" :key="n">
                            <h4 class="postsSidebar__featuredPosts__postTitle">
                                Blog Post Title Goes Right Here With Two Lines Of Content.
                            </h4>
                            <date class="postsSidebar__featuredPosts__postDate">
                                March 1, 2021
                            </date>
                        </a>

                    </div>
                    <div class="postsSidebar__followUs">
                        <h3 class="underlines">
                            Follow Us
                        </h3>
                        <div class="postsSidebar__followUs__links">

                            <a href="#" class="postsSidebar__followUs__links__link" v-for="n in 3" :key="n">
                            <img src="~/assets/images/icons/instagram.png">
                        </a>
                        </div>
 
                    </div>

            </div>
            
            </template>