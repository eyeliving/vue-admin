import axios from '@/tools/axios';

const user = {
  state: {
    token: localStorage.getItem('Admin-Token') || '',
    username: '',
    usermaps: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_USERMAPS: (state, maps) => {
      state.usermaps = maps
    }
  },

  actions: {
    Login({ commit }, {username, password}) {
    	return axios.post('/api/user/login', {
				username: username,
				password: password
			}).then((r) => {
				if(r.code === 0) {
					localStorage.setItem('Admin-Token', r.token)
					commit('SET_TOKEN', r.token)
				}
				return r
			})
    },


    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return axios.post('/api/user/info').then((r) => {
				commit('SET_USERMAPS', r.maps)
			})
    },
		// 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        localStorage.removeItem('Admin-Token')
        resolve()
      })
    },
    
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_USERMAPS', [])
          localStorage.removeItem('Admin-Token')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    
  }
}

export default user
