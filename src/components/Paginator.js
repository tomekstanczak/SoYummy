// Komponent subskrybuje liczbę elementów z własnej kolekcji przepisów użytkownika w store.
// Jeśli:
//  - Liczba = 0 komponent nie jest renderowany,
//  - Liczba > 0 komponent renderuje się odzwierciedlając liczbę stron, która pochodzi z backendu.
// Kliknięcie przycisków zmienia wartość strony przechowywaną w parametrach paska adresu.
// Przyciski prev i next odpowiednio zmniejszają i zwiększają wartość strony.
// Jeśli użytkownik znajduje się na pierwszej lub ostatniej stronie, przycisk prev lub next staje się odpowiednio nieaktywny.
