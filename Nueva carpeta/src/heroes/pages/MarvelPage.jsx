import { Navbar } from "../../ui/components"
import { HeroesList } from "../components"

export const MarvelPage = () => {
  return (
    <>
    <h1>
        Marvel
    </h1>
    <hr />

    <HeroesList publisher={"Marvel Comics"}/>
    </>
  )
}

