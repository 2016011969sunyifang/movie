export default {
    addCityCount(state, step) {
        state.count += step;
        console.log(state);
    },
    addCity(state, step) {
        state.city = step;
    },
    addCityId(state, id) {
        state.cityId = id;
    },
    usermobile(state, step) {
        console.log('进入usermobile里面了')
        state.usermobile = step
    }
}