export const CATEGORIES_DICT = {
  1: 'Arte',
  2: 'Gastronómico',
  3: 'Música',
  4: 'Moda',
  5: 'Geek'
}

export const getCategoryText = (id) => {
  return CATEGORIES_DICT[id] || 'Sin Categoría';
}
