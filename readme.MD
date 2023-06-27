
# FigozoGist Blog

FigozoGist is a blog that contains articles called gists about Queritel Corp and her products



# Development Approach
I first looked online to get some inspiration for the design of the Blog. When I found one that was pleasing to me, I setup the project directly with Vite and began developing. Because It was  just a blog, I did not find it necessary to include multiple pages and so ended up with just two main pages(The list of blogs and gist details). I did it this way because the blog was farely simple and it did not make sense to me at the time to make it complex for usecases that might not be implemented. This also makes it easier to move things around in case I want to add more complexity to it in the future

# Challenges Faced

Because it was my first time workng with AlpineJs, it took some getting used to before I could get things done. Also, because I rarely build sites with plain vanilla Javascript, I found myself repeating some sections that would have better been reusable components. 
Also I did not completely implement the internationalization feature with Strapi. The correct data was being fetched as per the chosen language but the UI wasn't updated accordingly but I wanted to submit what I had already and could always make the necessary updates later


# Future Recommendations
For a blog like this where there might be multiple recommendations, I think it will make sense to use something like Astro which gives us the ability to have reusable components without any framework. Also, its incredible flexibility allows for the possibility to add other frameworks to the same project in the future without breaking anything and with little stress. 
