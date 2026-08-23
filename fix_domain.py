import os

domain_old = "https://webzify.com"
domain_new = "https://webzify-digital-agency.vercel.app"

files_to_fix = [
    "public/sitemap.xml",
    "public/robots.txt",
    "src/components/SEO.tsx"
]

for filepath in files_to_fix:
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            content = f.read()
        
        content = content.replace(domain_old, domain_new)
        
        with open(filepath, "w") as f:
            f.write(content)
        print(f"Fixed {filepath}")
