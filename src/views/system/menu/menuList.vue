<template>
  <el-main>
    <!-- 新增按钮-->
    <el-button type="success" icon="el-icon-plus" @click="openAddWindow()"
      >新增</el-button
    >

    <!-- 数据表格-->
    <el-table
      style="width: 100%; margin-top: 20px"
      :height="tableHeight"
      :data="menuList"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
      :border="true"
      stripe
    >
      <el-table-column prop="label" label="菜单名称"></el-table-column>
         
      <el-table-column prop="type" label="菜单类型" align="center">
        <template slot-scope="scope">
          <el-tag size="normal" v-if="scope.row.type === 0">目录</el-tag>
          <el-tag size="normal" type="success" v-else-if="scope.row.type === 1"
            >菜单</el-tag
          >
          <el-tag size="normal" type="warning" v-else>按钮</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="icon" label="图标" align="center">
         <template slot-scope="scope">
               <i
            :class="scope.row.icon"
            v-if="scope.row.icon.includes('el-icon')"
          >
          </i>
               <svg-icon v-else: icon-class="scope.row.icon"></svg-icon>
              </template
        >
      </el-table-column>
      <el-table-column prop="name" label="路由名称"></el-table-column>
      <el-table-column prop="path" label="路由地址"></el-table-column>
      <el-table-column prop="url" label="组件路径"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import menuApi from "@/api/menu";
export default {
  name: "menuList",
  data() {
    return {
      menuList: [], //数据列表
      tableHeight: 0, //表格高度
    };
  },
  //初始化时调用
  created() {
    //查询菜单列表
    this.search();
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 100;
    });
  },
  mounted() {},
  methods: {
    /**
     * 查询菜单列表
     */
    async search() {
      //发送查询请求
      let res = await menuApi.getMenuList();
      //判断是否成功
      if (res.success) {
        this.menuList = res.data;
      }
    },
    /**
     * 打开新增窗口
     */
    openAddWindow() {},
  },
};
</script>
<style lang="scss" scoped></style>
