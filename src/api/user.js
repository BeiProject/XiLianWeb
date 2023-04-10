import { param } from '@/utils';
import http from '@/utils/request'

/**
 * 用户登录方法
 * @param  data 
 * @returns 
 */
export async function login(data) {
  return await http.login("/api/user/login",data);
}

/**
 * 获取登录用户信息和权限信息
 * @param  token 
 * @returns 
 */
export async function getInfo() {
  return await http.get("/api/sysUser/getInfo",null);
}

/**
 * 退出登录
 * @returns 
 */
export async function logout() {
  return await http.post("/api/sysUser/loginOut",param)
}
