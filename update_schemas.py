import os
import json

# Home.tsx -> LocalBusiness Schema
if os.path.exists("src/pages/Home.tsx"):
    with open("src/pages/Home.tsx", "r") as f:
        content = f.read()
    
    if "application/ld+json" not in content:
        schema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Webzify",
            "image": "https://webzify-digital-agency.vercel.app/logo.png",
            "url": "https://webzify-digital-agency.vercel.app",
            "telephone": "+923000000000",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lahore",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "addressCountry": "PK"
            },
            "description": "Professional website design, web development, e-commerce and SEO services in Lahore. Webzify helps businesses build a strong online presence.",
            "sameAs": [
                "https://facebook.com/webzify",
                "https://instagram.com/webzify",
                "https://linkedin.com/company/webzify"
            ]
        }
        schema_str = f'<script type="application/ld+json">{{JSON.stringify({json.dumps(schema)})}}</script>'
        
        # Insert after <SEO ... />
        parts = content.split('/>', 1) # Note: this is risky if SEO isn't the first self-closing tag, let's use a better anchor
        
        anchor = '<SEO \n        title="Web Design & Digital Marketing Agency in Lahore | Webzify"\n        description="Professional website design, web development, e-commerce and SEO services in Lahore. Webzify helps businesses build a strong online presence."\n      />'
        if anchor in content:
            content = content.replace(anchor, anchor + f"\n      {schema_str}")
            with open("src/pages/Home.tsx", "w") as f:
                f.write(content)
            print("Updated Home.tsx schema")
        else:
            print("Anchor not found in Home.tsx")

# BlogDetail.tsx -> Article Schema
if os.path.exists("src/pages/BlogDetail.tsx"):
    with open("src/pages/BlogDetail.tsx", "r") as f:
        content = f.read()
    
    if "Article" not in content and "application/ld+json" not in content.split("<SEO")[1]:
        anchor = 'type="article"\n      />'
        
        insert = """
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": [post.image],
          "datePublished": post.date,
          "dateModified": post.date,
          "author": [{
              "@type": "Person",
              "name": post.author
          }],
          "publisher": {
            "@type": "Organization",
            "name": "Webzify",
            "logo": {
              "@type": "ImageObject",
              "url": "https://webzify-digital-agency.vercel.app/logo.png"
            }
          }
        })}
      </script>"""
        if anchor in content:
            content = content.replace(anchor, anchor + insert)
            with open("src/pages/BlogDetail.tsx", "w") as f:
                f.write(content)
            print("Updated BlogDetail.tsx schema")

# ServiceDetail.tsx -> Service Schema
if os.path.exists("src/pages/ServiceDetail.tsx"):
    with open("src/pages/ServiceDetail.tsx", "r") as f:
        content = f.read()
    
    if "Service" not in content.split("application/ld+json")[-1] and "application/ld+json" not in content.split("<SEO")[1]:
        anchor = 'description={service.description}\n      />'
        insert = """
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Webzify"
          },
          "description": service.description
        })}
      </script>"""
        if anchor in content:
            content = content.replace(anchor, anchor + insert)
            with open("src/pages/ServiceDetail.tsx", "w") as f:
                f.write(content)
            print("Updated ServiceDetail.tsx schema")

