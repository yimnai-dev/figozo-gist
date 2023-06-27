document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/`
      <div class="container mx-auto py-3" x-data="{ posts: { data: [], loading: true } }" x-init="fetchGists($data)" x-show="posts.data.length !== 0">
      <section class="w-full flex md:flex-row flex-col items-start justify-center md:space-x-3 space-x-0 md:space-y-0 space-y-3 py-3 min-h-[50vh] px-3" x-data="{categories: {data: []}}" x-init="fetch('https://gistora.com/api/categories')
      .then(response => response.json())
      .then(({data}) => categories = {data})">
        <div class="w-full h-full py-2 flex flex-col space-y-3">
          <template x-show="!posts.loading" x-for="post in posts.data.slice(1, 3)" :key="post.id">
            <article class="w-full min-h-fit flex flex-row items-start justify-center space-x-3 cursor-pointer" @click="window.location.href='/src/blog.html?id=' + post.id">
              <img src="https://hips.hearstapps.com/hmg-prod/images/lago-1257-home-office-36e8-with-air-desk-1593015859.jpg" alt="" class="rounded-md w-1/2 h-40 object-cover object-center">
              <div class="w-1/2 flex flex-col items-start cursor-pointer">
                <span class="text-white bg-blue-900 rounded-md px-2 py-1" x-text="categories.data.find(category => category.id === post.id).attributes.name">Category</span>
                <span class="text-blue-900 font-bold text-2xl" x-text="post.attributes.title"></span>
                <span class="text-black italic font-light" x-text="new Date(post.attributes.publishedAt).toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' })"></span>
                <span class="text-black font-Roboto text-xl" x-text="post.attributes.excerpt"></span>
              </div>
            </article>
          </template>
        </div>
      </section>
      <div class="container py-[0.5px] mx-auto bg-blue-900"></div>
      <section class="container mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-blue-900 py-3">Figozo Gists</h1>
        <div class="w-full py-2 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 ">
          <template x-for="post in posts.data" :key="post.id">
            <article class="rounded-md px-2 cursor-pointer" @click="window.location.href='/src/blog.html?id=' + post.id">
              <img src="https://media.istockphoto.com/id/1212010350/photo/busy-modern-open-plan-office-with-staff.jpg?s=612x612&w=0&k=20&c=kxsJIaVwIE0H_uYDBpJQa3rWEY1EhEj7Hv13DEzCmMI=" class="rounded-md"/>
              <div class="flex flex-col items-start w-full cursor-pointer pt-2">
                <span class="font-bold text-2xl font-Roboto text-blue-950" x-text="post.attributes.title"></span>
                <p class="text-black" x-text="post.attributes.excerpt">...</p>
              </div>
            </article>
          </template>
        </div>
      </section>
      <div class="w-screen h-screen flex items-center justify-center" x-show="posts.data.length === 0">
      <div class="w-24 h-24 bg-white border-solid border-4 border-blue-900 rounded-full animate-pulse flex items-center justify-center">
          <span class="font-bold text-blue-900">Loading...</span>
      </div>
  </div>
    </div>
`

