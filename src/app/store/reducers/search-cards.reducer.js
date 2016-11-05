"use strict";
var search_cards_actions_1 = require("../../actions/search-cards.actions");
var INIT_STATE = {
    searching: false,
    keyword: '',
    items: []
};
function searchCards(state, action) {
    if (state === void 0) { state = INIT_STATE; }
    switch (action.type) {
        case search_cards_actions_1.SEARCH_CARDS_ACTIONS.SEARCH_CARDS_REQUEST:
            return Object.assign({}, state, {
                searching: true,
                keyword: action.payload,
                items: state.items
            });
        case search_cards_actions_1.SEARCH_CARDS_ACTIONS.SEARCH_CARDS_FETCH_RESULT:
            var items = action.payload.items;
            return Object.assign({}, state, {
                searching: state.searching,
                keyword: state.keyword,
                items: items
            });
        default:
            return state;
    }
}
exports.searchCards = searchCards;
//# sourceMappingURL=search-cards.reducer.js.map