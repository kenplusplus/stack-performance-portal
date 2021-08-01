import { createStore } from 'vuex'

const ModuleTdx = {
  state: () => ({
    '2021WW31': {
      '7-zip': 99,
      'MBW-128M': 97,
      'MBW-128M-F': 92,
      'CacheBench-R': 91,
      'CacheBench-W': 91,
      'CacheBench-RW': 82,
      'GlibC-cos': 95,
      'GlibC-exp': 93,
      'GlibC-ffs': 91,
      'GlibC-sin': 92,
      'GlibC-log2': 95,
      'GlibC-modf': 92,
      'GlibC-sinh': 95,
      'GlibC-sqrt': 90,
      'GlibC-tanh': 92,
      'GlibC-asinh': 92,
      'GlibC-atanh': 90,
      'GlibC-ffsll': 91,
      'GlibC-sincos': 92,
      'GlibC-pthread': 92,
      'Openssl-RSA': 97,
      'OSBench-CreateFile': 93,
      'OSBench-CreateThread': 92,
      'OSBench-LaunchProgram': 81,
      'OSBench-CreateProcess': 92,
      'OSBench-MemAlloc': 92,
      ctx_clock: 99,
      Apache: 89,
      'TFLite-Squeeze': 84,
      'TFLite-Inception': 95,
      'TFLite-NAS': 124,
      'TFLite-MobileF': 105,
      'TFLite-MobileQ': 103,
      'TFLite-ResNet': 96,
      Numpy: 100,
      VMBoot: 73,
      ContainerStart: 94,
      'Iperf-TCP': 73,
      FIO: 60,
      vsock: 3,
      'redis-set': 97,
      'redis-rpush': 98,
      'redis-spop': 91
    },
    '2021WW27': {
      '7-zip': 88,
      'MBW-128M': 94,
      'MBW-128M-F': 93,
      'CacheBench-R': 99,
      'CacheBench-W': 99,
      'CacheBench-RW': 84,
      'GlibC-cos': 101,
      'GlibC-exp': 100,
      'GlibC-ffs': 98,
      'GlibC-sin': 96,
      'GlibC-log2': 98,
      'GlibC-modf': 101,
      'GlibC-sinh': 101,
      'GlibC-sqrt': 100,
      'GlibC-tanh': 102,
      'GlibC-asinh': 99,
      'GlibC-atanh': 99,
      'GlibC-ffsll': 100,
      'GlibC-sincos': 101,
      'GlibC-pthread': 99,
      'Openssl-RSA': 99,
      'OSBench-CreateFile': 89,
      'OSBench-CreateThread': 86,
      'OSBench-LaunchProgram': 76,
      'OSBench-CreateProcess': 78,
      'OSBench-MemAlloc': 96,
      ctx_clock: 100,
      Apache: 79,
      'TFLite-Squeeze': 91,
      'TFLite-Inception': 89,
      'TFLite-NAS': 101,
      'TFLite-MobileF': 98,
      'TFLite-MobileQ': 98,
      'TFLite-ResNet': 96,
      Numpy: 98,
      VMBoot: 74
    },
    '2021WW21': {
      '7-zip': 89,
      'MBW-128M': 96,
      'MBW-128M-F': 95,
      'CacheBench-R': 98,
      'CacheBench-W': 98,
      'CacheBench-RW': 82,
      'GlibC-cos': 99,
      'GlibC-exp': 99,
      'GlibC-ffs': 100,
      'GlibC-sin': 99,
      'GlibC-log2': 99,
      'GlibC-modf': 100,
      'GlibC-sinh': 99,
      'GlibC-sqrt': 100,
      'GlibC-tanh': 99,
      'GlibC-asinh': 99,
      'GlibC-atanh': 99,
      'GlibC-ffsll': 100,
      'GlibC-sincos': 99,
      'GlibC-pthread': 100,
      'Openssl-RSA': 98,
      'OSBench-CreateFile': 87,
      'OSBench-CreateThread': 98,
      'OSBench-LaunchProgram': 76,
      'OSBench-CreateProcess': 75,
      'OSBench-MemAlloc': 91,
      ctx_clock: 101,
      Apache: 77,
      'TFLite-Squeeze': 97,
      'TFLite-Inception': 98,
      'TFLite-NAS': 98,
      'TFLite-MobileF': 98,
      'TFLite-MobileQ': 98,
      'TFLite-ResNet': 96,
      Numpy: 98,
      VMBoot: 89
    },
    '2021WW18': {
      '7-zip': 75,
      'GlibC-cos': 86,
      'GlibC-exp': 78,
      'GlibC-ffs': 71,
      'GlibC-sin': 84,
      'GlibC-log2': 91,
      'GlibC-modf': 56,
      'GlibC-sinh': 82,
      'GlibC-sqrt': 68,
      'GlibC-tanh': 86,
      'GlibC-asinh': 83,
      'GlibC-atanh': 83,
      'GlibC-ffsll': 74,
      'GlibC-sincos': 84,
      'GlibC-pthread': 44,
      'Openssl-RSA': 85,
      'OSBench-CreateFile': 50,
      'OSBench-CreateThread': 40,
      'OSBench-LaunchProgram': 64,
      'OSBench-CreateProcess': 62,
      'OSBench-MemAlloc': 69,
      ctx_clock: 98,
      Apache: 14,
      'TFLite-Squeeze': 80,
      'TFLite-Inception': 79,
      'TFLite-NAS': 81,
      'TFLite-MobileF': 80,
      'TFLite-MobileQ': 80,
      'TFLite-ResNet': 79,
      Numpy: 75,
      VMBoot: 42
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
