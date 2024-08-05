// Komponent Header renderuje:
//   - Logo - przekierowuje użytkownika na stronę główną;
//   - Navigation - nawigacja autoryzowanego użytkownika;
//   - UserLogo - przycisk otwierający okno modalne edytujące dane użytkownika;
//   - ThemeToggler - komponent do przełączania motywu.

import UserLogo from "./UserLogo/UserLogo";

// *W wersji mobilnej blok nawigacyjny i przełącznik motywu są otwierane za pomocą hamburger menu, które wyskakuje z góry i jest na całej wysokości urządzenia użytkownika.
const Header = () => {
  return (
    <div>
      <UserLogo />
    </div>
  );
};

export default Header;
