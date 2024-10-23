import React, { PropsWithChildren } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./github";
import { RickAndMortyPage } from "./rick-and-morty";
import { DetailPage } from "./detail";


export const SelectedItemContext = React.createContext(null);

const SelectedItemProvider : React.FC<PropsWithChildren> = ({children}) => {
  
  const [selectedItem, setSelectedItem] = React.useState({
    name: "Kalen",
    imageUrl: "https://pbs.twimg.com/profile_images/1226801813200003072/vRYcr7BK_400x400.jpg",
    description: undefined
  });
  
  return (<SelectedItemContext.Provider value={{selectedItem, setSelectedItem}}>
      {children}
    </SelectedItemContext.Provider>)
};

export const App = () => {
  return (
    <>
      <SelectedItemProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/rick-and-morty" element={<RickAndMortyPage />} />
          </Routes>
        </Router>
      </SelectedItemProvider>
    </>
  );
};
