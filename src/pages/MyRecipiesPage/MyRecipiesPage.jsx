// Ułożyć podrrzędne komponenty strony (wersja mobilna, tabletowa i desktopowa):
// - MainPageTitle - uniwersalny komponent tytułu strony;
// - MyRecipesList - komponent z listą własnych przepisów użytkownika;
// - Paginator - komponent do przełączania między stronami.

// import MainPageTitle from "../../components/Common/MainPageTitle/MainPageTitle";
// import MyRecipesList from "../../components/MyRecipies/MyRecipiesList";

// const MyRecipesPage = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     // Fetch user's recipes from the API or other data source
//     const fetchRecipes = async () => {
//       // This is just a placeholder for the actual API call
//       const response = await fetch(
//         `https://api.example.com/user/recipes?page=${currentPage}`
//       );
//       const data = await response.json();
//       setRecipes(data.recipes);
//       setTotalPages(data.totalPages);
//     };

//     fetchRecipes();
//   }, [currentPage]);

//   const handleRecipeClick = (recipeId) => {
//     // Navigate to the recipe page
//     console.log("Recipe clicked:", recipeId);
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <>
//       <MainPageTitle title={"My recipes"} />
//       <MyRecipesList />
//     </>
//   );
// };

// export default MyRecipesPage;

// const MyRecipesPage = () => {};
// export default MyRecipesPage;
