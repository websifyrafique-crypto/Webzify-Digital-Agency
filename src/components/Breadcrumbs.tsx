import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const schemaList = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 2,
    "name": item.label,
    "item": item.path ? `https://webzify.com${item.path}` : undefined
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://webzify.com/"
      },
      ...schemaList
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <nav aria-label="Breadcrumb" className={`flex items-center justify-center md:justify-start text-sm font-medium mb-6 overflow-x-auto whitespace-nowrap pb-2 md:pb-0 ${className}`}>
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity flex items-center">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 opacity-40" />
              {item.path ? (
                <Link to={item.path} className="opacity-70 hover:opacity-100 transition-opacity">
                  {item.label}
                </Link>
              ) : (
                <span className="font-bold opacity-100" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
