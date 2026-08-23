import os
filepath = "src/data/blog.ts"
if os.path.exists(filepath):
    with open(filepath, "r") as f:
        content = f.read()
    
    # Internal linking for Blog 1
    content = content.replace(
        "A professional website acts as your 24/7 digital storefront.",
        'A <a href="/services/website-designing" class="text-blue-600 hover:underline">professional website</a> acts as your 24/7 digital storefront.'
    )
    content = content.replace(
        "effective digital marketing strategy.",
        'effective <a href="/services" class="text-blue-600 hover:underline">digital marketing strategy</a>.'
    )
    
    # Internal linking for Blog 2
    content = content.replace(
        "emerging website design trends",
        'emerging <a href="/services/website-designing" class="text-blue-600 hover:underline">website design trends</a>'
    )
    
    # Internal linking for Blog 3
    content = content.replace(
        "Search Engine Optimization is the most cost-effective",
        '<a href="/services/seo-services" class="text-blue-600 hover:underline">Search Engine Optimization</a> is the most cost-effective'
    )
    
    # Internal linking for Blog 4
    content = content.replace(
        "turn your e-commerce visitors into paying customers",
        'turn your <a href="/services/e-commerce-website" class="text-blue-600 hover:underline">e-commerce visitors</a> into paying customers'
    )
    
    # Internal linking for Blog 5
    content = content.replace(
        "A slow website costs you customers",
        'A slow website costs you customers. Our <a href="/services/website-development" class="text-blue-600 hover:underline">website development</a> focuses on performance.'
    )
    
    # Internal linking for Blog 6
    content = content.replace(
        "Local SEO is critical.",
        '<a href="/services/seo-services" class="text-blue-600 hover:underline">Local SEO</a> is critical.'
    )

    with open(filepath, "w") as f:
        f.write(content)
    print("Updated blog.ts with internal links.")

