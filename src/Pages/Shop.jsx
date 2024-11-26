import { Hero } from "../Components/Hero/Hero.jsx";
import { NewCollection } from "../Components/NewCollections/NewCollections.jsx";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter.jsx";
import { Offer } from "../Components/Offers/Offers.jsx";
import { Popular } from "../Components/Popular/Popular.jsx";

export const Shop=()=>{
    return <>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollection/>
        <NewsLetter/>
    </>
}