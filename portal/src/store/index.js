import { createStore } from 'vuex'

const ModuleTdx = {
  state: () => ({
    '2021WW31': {
      '7-zip': 99,
      'MBW-128M': 97,
      'MBW-128M-F': 92
    }
  }),
  mutations: {

  },
  actions: {

  },
  getters: {
    tdx_releases (state) {
      console.log(Object.keys(state))
      return Object.keys(state)
    }
  }
}

const ModuleSgx = {
  state: () => ({

  }),
  mutations: {

  },
  actions: {

  },
  getters: {

  }
}

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tdx: ModuleTdx,
    sgx: ModuleSgx
  }
})
