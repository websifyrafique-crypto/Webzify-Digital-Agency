import os

pages = [
    {
        "file": "src/pages/About.tsx",
        "import": "import { Breadcrumbs } from '../components/Breadcrumbs';\n",
        "anchor": "<div className=\"container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl\">\n",
        "insert": "          <Breadcrumbs items={[{ label: 'About Us' }]} className=\"justify-center\" />\n"
    },
    {
        "file": "src/pages/Contact.tsx",
        "import": "import { Breadcrumbs } from '../components/Breadcrumbs';\n",
        "anchor": "<div className=\"container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl\">\n",
        "insert": "          <Breadcrumbs items={[{ label: 'Contact Us' }]} className=\"justify-center\" />\n"
    },
    {
        "file": "src/pages/Services.tsx",
        "import": "import { Breadcrumbs } from '../components/Breadcrumbs';\n",
        "anchor": "<div className=\"container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl\">\n",
        "insert": "          <Breadcrumbs items={[{ label: 'Services' }]} className=\"justify-center\" />\n"
    },
    {
        "file": "src/pages/Blog.tsx",
        "import": "import { Breadcrumbs } from '../components/Breadcrumbs';\n",
        "anchor": "<div className=\"container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl\">\n",
        "insert": "          <Breadcrumbs items={[{ label: 'Blog' }]} className=\"justify-center\" />\n"
    }
]

for p in pages:
    if os.path.exists(p["file"]):
        with open(p["file"], "r") as f:
            content = f.read()
        
        if "Breadcrumbs" not in content:
            # Add import after SEO
            content = content.replace("import { SEO } from '../components/SEO';", "import { SEO } from '../components/SEO';\n" + p["import"])
            
            # Add component
            content = content.replace(p["anchor"], p["anchor"] + p["insert"])
            
            with open(p["file"], "w") as f:
                f.write(content)
            print(f"Updated {p['file']}")

