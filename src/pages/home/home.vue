<template>
  <div class="home">
    <el-row>        
        <el-col :span="24" style="padding-bottom: 2px;">
          <el-card>
            <div slot="header">个人信息</div>
            <div class='up'>
              <div class='my'>
                <img :src='imgUrl'>
              </div>             
              <div class='my-message'>
                <h1>员工：{{my_message.name}}</h1>
                <h1>性别：{{my_message.sex}}</h1>
                <h1>员工工号:{{my_message.num}}</h1>
                <h1>所属部门:{{my_message.from}}</h1>
                <h1>业务情况:{{my_message.achieve}}</h1>
              </div>             
            </div>           
          </el-card>
        </el-col>        
        <el-col :span="24" style="padding-bottom: 8px;">
          <el-card>
            <div slot="header">个人业绩报表</div>
            <chart ref="A" :options="optionsA" style="width: 100%;"></chart>
          </el-card>
        </el-col>      
      </el-row>         
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imgUrl: require('../../assets/img/head.jpg'),
        my_message: {
          name: '杨哈皮',
          sex: 'neutral',
          num: '04163055',
          from: '贷款部门',
          achieve: '未完成业务-20单'
        },
        optionsA: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          toolbox: {
            show: true,
            feature: {
              mark: {show: true},
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'value'
            }
          ],
          yAxis: [
            {
              type: 'category',
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              stack: '总量',
              itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
              data: null
            },
            {
              name: '邮件营销',
              type: 'bar',
              stack: '总量',
              itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
              data: null
            },
            {
              name: '联盟广告',
              type: 'bar',
              stack: '总量',
              itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
              data: null
            },
            {
              name: '视频广告',
              type: 'bar',
              stack: '总量',
              itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
              data: null
            },
            {
              name: '搜索引擎',
              type: 'bar',
              stack: '总量',
              itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
              data: null
            }
          ]
        }        
      }
    },
    mounted () {
      const chartA = this.$refs['A'];
      chartA.showLoading();
      this.axios.get('getBarData')
      .then(data => {
        console.log(data);
        if (data.errno === 0) {
          const options = data.data;
          chartA.mergeOptions({
            series: options.optionsA.series
          });         
          setTimeout(() => {
            chartA.hideLoading();           
          }, 1000);
        } else {
          chartA.hideLoading();         
          console.log(data.msg);
        }
      })
      .catch(error => {
        chartA.hideLoading();        
        console.log(error);
      });
    }
  }
</script>
<style lang="scss">
.up{
  text-align: center;
}
.my{
  float:left;
  border-radius:50%;
  border:2px solid silver;
  height:250px;
  width:250px;
  margin:50px 100px 50px 100px;
}
.my img{
  height:100%;
  width:100%;
  border-radius:50%;
}
.my-message{
  float:left;
  margin-left:20px;  
  width:500px;
  height:300px;
  text-align:left; 
  border-right:1px solid silver;
}
.is-selected {
    color: #1989FA;
  }
</style>

