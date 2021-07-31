<template>
  <div class="app-wrapper">
    <div class="nav-container">
      <div id="menu" :class="{ active: isActive }">
        <el-menu mode="horizontal" @select="handleSelect" :router="true">
          <el-menu-item id="logo" index="/" :route="{ name: 'Home' }">
            <logo></logo>
          </el-menu-item>
          <el-menu-item index="/tdx" :route="{ name: 'TDX' }">
            TDX
          </el-menu-item>
          <el-menu-item index="/sgx" :route="{ name: 'SGX' }">
            SGX
          </el-menu-item>
          <el-menu-item index="/about" :route="{ name: 'About' }">
            About
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'

export default {
  name: 'App',
  components: {
    Logo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.main-container {
  text-align: center;
  min-height: 50vh;
}
</style>
