// packageBattle/components/circle/circle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    rightDeg: 45,
    leftDeg: 45,
    count: 0,
    flag: true,
    timer: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    countDown() {
      if(!this.data.flag) {
        clearTimeout(this.data.timer)
        return
      }
      const timer = setTimeout(()=>{
        this.setData({
          count: this.data.count + 1
        })
        if(this.data.rightDeg < 220) {
          this.setData({
            rightDeg: this.data.rightDeg + 36
          })
        }else {
          this.setData({
            leftDeg: this.data.leftDeg + 36
          })
        }
       
        if(this.data.count < 10) {
          this.countDown()
        }else {
          this.triggerEvent('finish', {count: this.data.count})
        }
      }, 1000)

      this.setData({
        timer: timer
      })
    }
  }
})
