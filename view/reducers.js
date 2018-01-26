
const drinkingArr = ['芝士莓果','绿妍', '满杯红柚', '金凤龙王', '汉堡包', '咦怎么可能那么多喜茶喝过呢','薯条','吃屎吧', '哪有那么多喜茶喝哈哈哈', '啊啊啊'];

export default function reducer(state = {count: 0, drinking:'喝什么呢'}, action){
    const count = state.count;
    const drinking = state.drinking;
    switch(action.type){
        case 'ADD_COUNT':
            return {count: count + 1}
        case 'REDUCE_COUNT':
            return {count: count - 1}
        case 'XI_DRINKING':
            return {drinking: drinkingArr[Math.ceil(Math.random()*10)]}
        default:
            return state;
    }
}