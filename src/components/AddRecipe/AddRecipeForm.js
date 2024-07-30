// Komponent zawiera stan, który przechowuje wszystkie dane wypełnione przez użytkownika w formularzu.
// Komponent renderuje formularz z użyciem komponentów:
//  - RecipeDescriptionFields
//  - RecipeIngredientsFields
//  - RecipePreparationFields
// Wszystkie pola formularza są wymagane, walidowane i wyświetlają użytkownikowi odpowiednie informacje, jeśli wprowadzona wartość jest nieprawidłowa. Komponent renderuje przycisk Add, który wysyła żądanie utworzenia nowego przepisu z odpowiednimi danymi poprzez przesłanie formularza.
// Po pomyślnym wysłaniu żądania, przepis jest dodawany do listy własnych przepisów użytkownika. Następnie użytkownik powinien zostać przekierowany na stronę MyRecipesPage.
// Po wystąpieniu błędu w żądaniu, użytkownikowi zostanie wyświetlone odpowiednie powiadomienie push.
