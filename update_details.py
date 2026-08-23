import os

# Blog Detail
if os.path.exists("src/pages/BlogDetail.tsx"):
    with open("src/pages/BlogDetail.tsx", "r") as f:
        content = f.read()
    
    if "Breadcrumbs" not in content:
        content = content.replace("import { SEO } from '../components/SEO';", "import { SEO } from '../components/SEO';\nimport { Breadcrumbs } from '../components/Breadcrumbs';\n")
        
        anchor = "<Link to=\"/blog\" className=\"inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 mb-8 transition-colors\">\n              <ArrowLeft className=\"w-4 h-4\" /> Back to Blog\n            </Link>"
        insert = """            <div className="-mt-4 mb-4">
              <Breadcrumbs items={[{ label: 'Blog', path: '/blog' }, { label: post.title }]} className="!text-gray-500 [&_a]:!text-gray-500 hover:[&_a]:!text-blue-600 [&_span.text-white]:!text-gray-900" />
            </div>
"""
        content = content.replace(anchor, insert + anchor)
        
        with open("src/pages/BlogDetail.tsx", "w") as f:
            f.write(content)
        print("Updated BlogDetail.tsx")

# Service Detail
if os.path.exists("src/pages/ServiceDetail.tsx"):
    with open("src/pages/ServiceDetail.tsx", "r") as f:
        content = f.read()
    
    if "Breadcrumbs" not in content:
        content = content.replace("import { SEO } from '../components/SEO';", "import { SEO } from '../components/SEO';\nimport { Breadcrumbs } from '../components/Breadcrumbs';\n")
        
        anchor = "<div className=\"container mx-auto px-4 md:px-6 relative z-10\">\n          <div className=\"max-w-4xl mx-auto\">\n            <Link to=\"/services\" className=\"inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 transition-colors font-semibold\">\n              <ArrowLeft className=\"w-4 h-4\" /> Back to Services\n            </Link>"
        insert = """            <div className="mb-4">
              <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: service.title }]} />
            </div>
"""
        content = content.replace(anchor, anchor + "\n" + insert)
        
        with open("src/pages/ServiceDetail.tsx", "w") as f:
            f.write(content)
        print("Updated ServiceDetail.tsx")

