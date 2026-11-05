import React, { useState, useEffect } from "react";
import { SAMPLE_RECIPES } from "./data/mockRecipes";
import Navbar from "./components/Navbar";
import FilterControls from "./components/FilterControls";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";

export default function App() {
  const [recipes] = useState(SAMPLE_RECIPES);
  const [activeTab, setActiveTab] = useState("all"); // 'all' or 'favorites'
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("recipe_vault_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipe_vault_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const categories = ["All", ...new Set(recipes.map((r) => r.category))];

  const handleToggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter recipes based on tab, search term, and category
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesTab = activeTab === "all" || favorites.includes(recipe.id);
    const matchesCategory =
      selectedCategory === "All" || recipe.category === selectedCategory;
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    return matchesTab && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-2">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-100">
            Explore Recipes
          </h2>
          <p className="text-sm text-slate-400">
            Discover delicious meals, check ingredients, and save your
            favorites.
          </p>
        </div>

        <FilterControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isFavorite={favorites.includes(recipe.id)}
                onToggleFavorite={handleToggleFavorite}
                onSelectRecipe={setSelectedRecipe}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-500 text-sm">
            No recipes found matching your criteria.
          </div>
        )}
      </main>

      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />

      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        Recipe Vault &copy; 2026 — Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
