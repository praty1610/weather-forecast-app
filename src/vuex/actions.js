export const addCity = (context, payload) => {
    context.commit('SAVE_CITY_TO_CITIES_ARRAY', payload)
};

export const deleteCity = (context, payload) => {
    context.commit('DELETE_CITY_FROM_CITIES_ARRAY', payload)
}
