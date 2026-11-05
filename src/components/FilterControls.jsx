import React from "react";
import { Search } from "lucide-react";

export default function FilterControls({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-6 bg-slate-900/40 p-4 rounded-2xl border border-slate-800">
      {/* Search Input */}
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
        <input
          type="text"
          placeholder="Search recipes or ingredients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
              selectedCategory === category
                ? "bg-amber-500/20 border border-amber-500/40 text-amber-400"
                : "bg-slate-800/60 border border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
