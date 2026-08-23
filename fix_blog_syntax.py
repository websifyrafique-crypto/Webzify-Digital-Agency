import re

with open("src/data/blog.ts", "r") as f:
    content = f.read()

# I used double quotes in my Python script:
# 'emerging <a href="/services/website-designing" class="text-blue-600 hover:underline">website design trends</a>'
# The excerpt string itself was in double quotes: excerpt: "..."
# That caused `excerpt: "... <a href="..." ..."` which breaks syntax.
# To fix this, I will just change the href and class to use single quotes across the file where it caused issues, OR I'll just change the entire file's double quotes to single quotes inside the a tags.
content = content.replace('<a href="/services/website-designing" class="text-blue-600 hover:underline">', "<a href='/services/website-designing' class='text-blue-600 hover:underline'>")
content = content.replace('<a href="/services" class="text-blue-600 hover:underline">', "<a href='/services' class='text-blue-600 hover:underline'>")
content = content.replace('<a href="/services/seo-services" class="text-blue-600 hover:underline">', "<a href='/services/seo-services' class='text-blue-600 hover:underline'>")
content = content.replace('<a href="/services/e-commerce-website" class="text-blue-600 hover:underline">', "<a href='/services/e-commerce-website' class='text-blue-600 hover:underline'>")
content = content.replace('<a href="/services/website-development" class="text-blue-600 hover:underline">', "<a href='/services/website-development' class='text-blue-600 hover:underline'>")

with open("src/data/blog.ts", "w") as f:
    f.write(content)

