document.querySelector<HTMLDivElement>('#blog')!.innerHTML = /*html*/`
    <div x-data="{gist: {data: {}}}" x-init="fetch('https://gistora.com/api/gists/' + getGistId())
        .then(response => response.json())
        .then(({data}) => {
            gist = {data: data}
            console.log(data)
        })">
        <h1 x-text="gist.data.attributes.title" class="px-3 font-bold text-3xl py-2 text-blue-900"></h1>
        <div class="container mx-auto py-3 px-4 overflow-hidden text-justify" x-show="Object.keys(gist.data).length !== 0"  x-html="gist.data.attributes.content">
        </div>
        <div class="containe mx-auto px-2 flex items-center justify-beteweeen">
            <p x-text="'Published on ' + new Date(gist.data.attributes.publishedAt).toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' })" class="text-2xl italic font-bold text-blue-900 px-3 py-3">Author</p>
        </div>
        <div class="w-screen h-screen flex items-center justify-center" x-show="Object.keys(gist.data).length === 0">
            <div class="w-24 h-24 bg-white border-solid border-4 border-blue-900 rounded-full animate-pulse flex items-center justify-center">
                <span class="font-bold text-blue-900">Loading...</span>
            </div>
        </div>
    </div>
`