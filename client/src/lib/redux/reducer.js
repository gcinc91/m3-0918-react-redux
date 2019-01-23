
const initialStore = {
    user: null,
    favoritePokemon: null,
    lastPokemon: null,
    numClicks: 0
}

export const rootReducer = (store = initialStore, action) => {
    switch(action.type){
        case "INCREMENT_CLICKS":
            store = {
                ...store,
                numClicks: store.numClicks+1
            }
        break;
        case "SELECT_POKEMON":
            store = {
                ...store,
                favoritePokemon: action.pokemon,
                lastPokemon: action.pokemon.id
            }
        break;
        case "UNSELECT_POKEMON":
        store = {
            ...store,
            favoritePokemon: null,
            lastPokemon: null
        }
        break;
        default: return store
    }
    // For now, don't handle any actions
    // and just return the store given to us.
    return store
}