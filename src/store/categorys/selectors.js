export const selectCategoryModule = (state) => state.category;

export const selectCategorys = (state) => Object.values(selectCategoryModule(state).entities);

export const selectCategorysBookIds = (state, categoryId) => selectCategoryModule(state).entities[categoryId].books;