import React from "react";
import { Utensils, Heart } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab, favoritesCount }) {
  return (
    <header className="border-b border-slate-800 bg-slate-900/60 sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Utensils className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-100 tracking-tight">
              Recipe Vault
            </h1>
            <p className="text-xs text-slate-400">Interactive Meal Explorer</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
              activeTab === "all"
                ? "bg-amber-500 text-slate-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            All Recipes
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
              activeTab === "favorites"
                ? "bg-rose-500 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Favorites ({favoritesCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}
