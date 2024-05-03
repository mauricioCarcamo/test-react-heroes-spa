import { Routes, Route } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";

const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/*" element={ <HeroesRoutes /> }/>
      <Route path="login" element={<LoginPage />}/>
    </Routes>
    </>
    
  )
}

export default AppRouter
