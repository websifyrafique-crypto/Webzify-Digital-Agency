import os

filepath = "src/App.tsx"
if os.path.exists(filepath):
    with open(filepath, "r") as f:
        content = f.read()
    
    if "NotFound" not in content:
        # Add import
        content = content.replace("import { Contact } from './pages/Contact';", "import { Contact } from './pages/Contact';\nimport { NotFound } from './pages/NotFound';")
        
        # Add route
        route_str = '<Route path="*" element={<NotFound />} />\n      </Route>'
        content = content.replace("</Route>", route_str, 1) # only replace the first occurrence (which is the closing Route tag for MainLayout)
        
        with open(filepath, "w") as f:
            f.write(content)
        print("Updated App.tsx")
