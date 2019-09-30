// import ajax from '@/utils/ajax'
import api from '@/api'
import ajax from '@/utils/ajax'
const cache = {}

// 获取固定下拉数据
export function getOptionsData () {
  return new Promise(function (resolve, reject) {
    if (cache.optionsData) {
      return resolve(JSON.parse(JSON.stringify(cache.optionsData)))
    }
    ajax({
      url: api.users.options
    }).then(res => {
      if (res.code === 200) {
        const data = res.data
        resolve(data)
      }
    })
  })
}

// 部门列表
export function getDepartData () {
  return new Promise(function (resolve, reject) {
    ajax({
      type: 'get',
      url: api.manage.apartments.list,
      params: {}
    }).then(res => {
      if (res.code === 200) {
        const list = res.data.apartments
        resolve(list)
      } else {
        reject(res.message)
      }
    })
    // setTimeout(() => {
    //   const data = [
    //     {
    //       id: '1',
    //       name: '电商事业部',
    //       children: [
    //         {
    //           id: '1-1',
    //           name: '产品组',
    //           children: [
    //             {
    //               id: '1-1-1',
    //               name: '产品1部'
    //             },
    //             {
    //               id: '1-1-2',
    //               name: '产品2部'
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       id: '2',
    //       name: '采购部',
    //       children: [
    //         {
    //           id: '2-1',
    //           name: '采购一部'
    //         },
    //         {
    //           id: '2-2',
    //           name: '采购二部'
    //         }
    //       ]
    //     }
    //   ]
    //   return resolve(data)
    // }, 100)
  })
}

// 根据部门id查岗位
export function getDepartJobData (id) {
  return new Promise(function (resolve, reject) {
    ajax({
      type: 'get',
      url: api.manage.posts.apartmentPosts,
      params: { id: id }
    }).then(res => {
      if (res.code === 200) {
        const list = res.data.posts
        list.forEach(v => {
          v.key = v.id
          v.value = v.name
        })
        resolve(list)
      } else {
        reject(res.message)
      }
    })
  })
}

// 岗位列表 必须带有key value
export function getJobData () {
  return new Promise(function (resolve, reject) {
    ajax({
      type: 'get',
      url: api.manage.posts.list,
      params: {}
    }).then(res => {
      if (res.code === 200) {
        const list = res.data.posts
        list.forEach(v => {
          v.key = v.id
          v.value = v.value
        })
        resolve(list)
      } else {
        reject(res.message)
      }
    })
  })
}

// 岗位详情

export function getJobDetail (id) {
  return new Promise(function (resolve, reject) {
    ajax({
      type: 'get',
      url: api.manage.posts.edit,
      params: {
        id
      }
    }).then(res => {
      if (res.code === 200) {
        resolve(res.data)
      } else {
        reject(res.message)
      }
    })
  })
}

// 职系
export function getGradeData () {
  return new Promise(function (resolve, reject) {
    ajax({
      type: 'get',
      url: api.manage.posts.systems,
      params: {}
    }).then(res => {
      if (res.code === 200) {
        const list = res.data.systems
        list.forEach(v => {
          v.key = v.id
          v.value = v.name
        })
        resolve(list)
      } else {
        reject(res.message)
      }
    })
  })
}

// 根据职系id查职级
export function getGradeLevelData (id) {
  return new Promise(function (resolve, reject) {
    ajax({
      type: 'get',
      url: api.manage.positions.systemClasses,
      params: { id: id }
    }).then(res => {
      if (res.code === 200) {
        const list = res.data.classes
        list.forEach(v => {
          v.key = v.id
          v.value = v.name
        })
        resolve(list)
      } else {
        reject(res.message)
      }
    })
  })
}

// 通讯录
export function getAddressesList (id) {
  return new Promise(function (resolve, reject) {
    ajax({
      type: 'get',
      url: api.addresses.list
    }).then(res => {
      if (res.code === 200) {
        resolve(res)
      } else {
        reject(res.message)
      }
    })
  })
}

// 个人信息
export function getUserInfo () {
  return new Promise(function (resolve, reject) {
    ajax({
      type: 'get',
      url: api.addresses.list
    }).then(res => {
      if (res.code === 200) {
        resolve(res)
      } else {
        reject(res.message)
      }
    })
    ajax({
      url: api.users.info
    }).then(res => {
      if (res.code === 200) {
        resolve(res)
      } else {
        reject(res.message)
      }
    })
  })
}
