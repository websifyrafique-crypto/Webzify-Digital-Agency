import os
filepath = "src/pages/ServiceDetail.tsx"
if os.path.exists(filepath):
    with open(filepath, "r") as f:
        content = f.read()
    
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
    if anchor in content and "application/ld+json" not in content.split("<SEO")[1]:
        content = content.replace(anchor, anchor + insert)
        with open(filepath, "w") as f:
            f.write(content)
        print("Updated ServiceDetail.tsx")
