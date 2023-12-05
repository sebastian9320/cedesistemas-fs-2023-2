import { Layout } from "../../components/Layout"
import { Categories } from "./components/Categories/Index"
import { TopEvents } from "./components/TopEvents"
import { CategoryContextStore } from "../../context/CategoryContext"
import { useCurrentPosition } from "../../hooks/useCurrentPosition"

export const Home = () => {

  const { longitude, latitude } = useCurrentPosition()

  return (
    <Layout>
      <CategoryContextStore>
        <Categories/>
        <p>{longitude} {latitude} </p>
        <TopEvents/>
      </CategoryContextStore>
    </Layout>
  )
}
