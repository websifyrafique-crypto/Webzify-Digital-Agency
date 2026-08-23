with open("src/pages/Home.tsx", "r") as f:
    content = f.read()

content = content.replace("{post.title}</h3>", "</h2>")

# The only place it should actually be {post.title}</h3> is:
# <h3 className="text-xl font-bold text-blue-950 line-clamp-2 leading-tight">
#   {post.title}
# </h2>  <-- wait, I replaced this originally with {post.title}</h3>, so it became:
# <h3 ...>
#   {post.title}
# {post.title}</h3>

# So first replace ALL "{post.title}</h3>" with "</h2>"
# Then replace:
#                     <h3 className="text-xl font-bold text-blue-950 line-clamp-2 leading-tight">
#                       {post.title}
#                     </h2>
# with
#                     <h3 className="text-xl font-bold text-blue-950 line-clamp-2 leading-tight">
#                       {post.title}
#                     </h3>

with open("src/pages/Home.tsx", "w") as f:
    f.write(content)

with open("src/pages/Home.tsx", "r") as f:
    content = f.read()

content = content.replace('                    <h3 className="text-xl font-bold text-blue-950 line-clamp-2 leading-tight">\n                      {post.title}\n                    </h2>', '                    <h3 className="text-xl font-bold text-blue-950 line-clamp-2 leading-tight">\n                      {post.title}\n                    </h3>')

with open("src/pages/Home.tsx", "w") as f:
    f.write(content)
