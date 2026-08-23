import os
import re

files_to_update = [
    {
        "file": "src/pages/Home.tsx",
        "title": "Web Design & Digital Marketing Agency in Lahore | Webzify",
        "desc": "Professional website design, web development, e-commerce and SEO services in Lahore. Webzify helps businesses build a strong online presence."
    },
    {
        "file": "src/pages/About.tsx",
        "title": "About Webzify | Digital Marketing & Web Design Agency",
        "desc": "Learn about Webzify, our web design, development, SEO and digital marketing expertise and how we help businesses grow online."
    },
    {
        "file": "src/pages/Services.tsx",
        "title": "Web Design, SEO & Digital Marketing Services | Webzify",
        "desc": "Explore Webzify services including website design, web development, e-commerce websites, SEO and digital marketing solutions."
    },
    {
        "file": "src/pages/Contact.tsx",
        "title": "Contact Webzify | Web Design & SEO Agency in Lahore",
        "desc": "Contact Webzify for professional website design, development, e-commerce and SEO services for your business."
    }
]

for item in files_to_update:
    filepath = item["file"]
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            content = f.read()
        
        # Replace title
        content = re.sub(r'title="[^"]*"', f'title="{item["title"]}"', content, count=1)
        # Replace description
        content = re.sub(r'description="[^"]*"', f'description="{item["desc"]}"', content, count=1)
        
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Updated {filepath}")
