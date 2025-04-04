import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Watch from "./watch";
import Details from "./details";
import AnimeList from "./animelist";

export default function Router() {
    return (
        <BrowserRouter basename="/" >
            <Routes>
               <Route index element={<Home />} />
               <Route path="/watch/:aniId" element={<Watch />}  />
               <Route path="/details/:id" element={<Details />} />
               <Route path="/:mix/:page?" element={<AnimeList />} />
            </Routes>
        </BrowserRouter>
    )
}