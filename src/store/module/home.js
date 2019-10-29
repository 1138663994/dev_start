const state = {
  count: ''
}

const mutations = {
  SET_COUNT (state, data) {
    state.count = data
  }
}

const actions = {
  setCount ({ commit }, params) {
    console.log('SET_COUNT', params)
    commit('SET_COUNT', params)
  }
}

export default {
  state,
  mutations,
  actions
}
