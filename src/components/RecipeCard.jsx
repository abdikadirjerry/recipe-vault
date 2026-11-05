import React from "react";
import { Clock, Flame, Heart, BookOpen } from "lucide-react";

export default function RecipeCard({
  recipe,
  isFavorite,
  onToggleFavorite,
  onSelectRecipe,
}) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between group">
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl p-2 bg-slate-950 rounded-xl border border-slate-800">
            {recipe.image}
          </span>
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            className={`p-2 rounded-xl border transition-colors ${
              isFavorite
                ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
                : "bg-slate-800/50 border-slate-700/50 text-slate-500 hover:text-slate-300"
            }`}
            title={isFavorite ? "Remove from favorites" : "Save to favorites"}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Category Badge */}
        <span className="text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-md font-mono">
          {recipe.category}
        </span>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-100 mt-2 group-hover:text-amber-400 transition-colors">
          {recipe.title}
        </h3>

        {/* Details */}
        <div className="flex items-center space-x-4 mt-3 text-xs text-slate-400">
          <div className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            <span>{recipe.calories}</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onSelectRecipe(recipe)}
        className="mt-5 w-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-semibold py-2 rounded-xl transition-all flex items-center justify-center space-x-1.5"
      >
        <BookOpen className="w-3.5 h-3.5" />
        <span>View Recipe</span>
      </button>
    </div>
  );
}
