import React from "react";
import { X, Clock, Flame, CheckCircle, ListOrdered } from "lucide-react";

export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 bg-slate-800 text-slate-400 hover:text-slate-100 rounded-xl transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-4xl p-3 bg-slate-950 rounded-2xl border border-slate-800">
            {recipe.image}
          </span>
          <div>
            <span className="text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-mono">
              {recipe.category}
            </span>
            <h2 className="text-xl font-bold text-slate-100 mt-1">
              {recipe.title}
            </h2>
            <div className="flex items-center space-x-4 mt-2 text-xs text-slate-400">
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Prep: {recipe.prepTime}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>{recipe.calories}</span>
              </span>
              <span className="text-slate-500 font-medium">
                Difficulty: {recipe.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Ingredients & Instructions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
          {/* Ingredients */}
          <div>
            <h3 className="text-sm font-bold text-slate-200 mb-3 flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span>Ingredients</span>
            </h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800 flex items-start space-x-2"
                >
                  <span className="text-amber-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-sm font-bold text-slate-200 mb-3 flex items-center space-x-2">
              <ListOrdered className="w-4 h-4 text-cyan-400" />
              <span>Instructions</span>
            </h3>
            <ol className="space-y-3">
              {recipe.instructions.map((step, idx) => (
                <li
                  key={idx}
                  className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800 flex items-start space-x-2.5"
                >
                  <span className="font-mono text-cyan-400 font-bold">
                    {idx + 1}.
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
