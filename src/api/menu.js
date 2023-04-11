import { param } from '@/utils';
import http from '@/utils/request'
import { getMenuList } from './user';


export default {
    /**
     * 查询菜单列表
     * @param params 
     * @returns 
     */
    async getMenuList(params){
        return await http.get("/api/permission/list",params);
    }
    
}