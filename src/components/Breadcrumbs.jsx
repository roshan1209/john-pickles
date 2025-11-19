import Link from "next/link";

export default function Breadcrumbs({ paths }) {
    return (
        <div className="flex flex-wrap gap-2 mb-8 text-sm">
            {paths.map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
          {item.href ? (
              <Link href={item.href} className="text-stone-600 hover:text-blue-800 hover:underline">
                  {item.label}
              </Link>
          ) : (
              <span className="text-stone-600">{item.label}</span>
          )}
            {idx < paths.length - 1 && (
                <span className="text-stone-400">/</span>
            )}
        </span>
            ))}
        </div>
    );
}
