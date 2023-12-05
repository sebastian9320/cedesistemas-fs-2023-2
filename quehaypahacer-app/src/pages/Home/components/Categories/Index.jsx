import styled from "styled-components"
import { Category } from "../Category"
import {
  IoMusicalNotesOutline,
  IoColorPaletteOutline,
  IoFastFoodOutline,
  IoLaptopOutline
} from 'react-icons/io5'
import { useContext, useState } from "react"
import { CategoryContext } from "../../../../context/CategoryContext"

const categoriesList = [
  {
    id: 1,
    name: 'Gastronomía',
    icon: <IoFastFoodOutline/>
  },
  {
    id: 2,
    name: 'Arte',
    icon: <IoColorPaletteOutline/>
  },
  {
    id: 3,
    name: 'Musica',
    icon: <IoMusicalNotesOutline/>
  },
  {
    id: 4,
    name: 'Moda',
    icon: <IoMusicalNotesOutline/>
  },
  {
    id: 5,
    name: 'Geek',
    icon: <IoLaptopOutline/>
  },
]

const CategoriesContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 15px;
`

export const Categories = () => {

  const {categoryState, onChangeCategory: onChangeCategoryContext } = useContext(CategoryContext)
  //const [categorySelected, setCategorySelected] = useState(ALL_CATEGORIES)

  const onChangeCategory = (newCategoryId) => {
    //setCategorySelected(categorySelected === newCategoryId ? ALL_CATEGORIES : newCategoryId)
    onChangeCategoryContext(newCategoryId);
  }



  return (
    <CategoriesContainer>
      {
        /*categoriesList.map(({id, name, icon, color}) => {
          return(
            <Category key={id} name={name} icon={icon} color={color}/>
          )
        })*/

        categoriesList.map( item => {
          return(
            <Category key={item.id}
              isActive={categoryState.categorySelected === item.id}
              {...item}
              onChangeCategory={onChangeCategory}
            />
          )
        })
      }
    </CategoriesContainer>
  )
}



