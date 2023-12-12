/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");

const router = express.Router();

const token = {
  admin: "admin",
  editor: "editor",
};

router.post("/login", (req, res) => {
  if (["admin", "editor"].includes(req.body?.name)) {
    setTimeout(() => {
      res.send({
        code: 0,
        data: {
          token: token[req.body.name],
        },
      });
    }, 2000);
  } else {
    res.send({
      code: -1,
      message: "没有此用户",
    });
  }
});

router.post("/refreshToken", (req, res) => {
  res.send({
    code: 0,
    data: {
      token: 'zlzllzl',
    },
  });
});

router.post("/getUserInfo", (req, res) => {
  res.send({
    code: 0,
    data: {
      avatar: "https://static.isme.top/images/avatar.jpg",
      email: "Ronnie@123.com",
      id: 1,
      name: "大脸怪(admin)",
      role: ['admin']
    },
  });
});

router.get("/", (req, res) => {
  res.send('ok666');
});

router.post("/getTreeRole", (req, res) => {
  res.send({
    code: 0,
    data: {
      "code": 0,
      "message": "OK",
      "data": [
        {
          "id": 2,
          "name": "系统管理",
          "code": "SysMgt",
          "type": "MENU",
          "parentId": null,
          "path": null,
          "redirect": null,
          "icon": "i-fe:grid",
          "component": null,
          "layout": null,
          "keepAlive": null,
          "method": null,
          "description": null,
          "show": true,
          "enable": true,
          "order": 2,
          "children": [
            {
              "id": 1,
              "name": "资源管理",
              "code": "Resource_Mgt",
              "type": "MENU",
              "parentId": 2,
              "path": "/pms/resource",
              "redirect": null,
              "icon": "i-fe:list",
              "component": "/src/views/pms/resource/index.vue",
              "layout": null,
              "keepAlive": null,
              "method": null,
              "description": null,
              "show": true,
              "enable": true,
              "order": 6
            },
            {
              "id": 3,
              "name": "角色管理",
              "code": "RoleMgt",
              "type": "MENU",
              "parentId": 2,
              "path": "/pms/role",
              "redirect": null,
              "icon": "i-fe:user-check",
              "component": "/src/views/pms/role/index.vue",
              "layout": null,
              "keepAlive": null,
              "method": null,
              "description": null,
              "show": true,
              "enable": true,
              "order": 2,
              "children": [
                {
                  "id": 5,
                  "name": "分配用户",
                  "code": "RoleUser",
                  "type": "MENU",
                  "parentId": 3,
                  "path": "/pms/role/user/:roleId",
                  "redirect": null,
                  "icon": "i-fe:user-plus",
                  "component": "/src/views/pms/role/role-user.vue",
                  "layout": null,
                  "keepAlive": null,
                  "method": null,
                  "description": null,
                  "show": false,
                  "enable": true,
                  "order": 1
                }
              ]
            },
            {
              "id": 4,
              "name": "用户管理",
              "code": "UserMgt",
              "type": "MENU",
              "parentId": 2,
              "path": "/pms/user",
              "redirect": null,
              "icon": "i-fe:user",
              "component": "/src/views/pms/user/index.vue",
              "layout": null,
              "keepAlive": true,
              "method": null,
              "description": null,
              "show": true,
              "enable": true,
              "order": 3,
              "children": [
                {
                  "id": 13,
                  "name": "创建新用户",
                  "code": "AddUser",
                  "type": "BUTTON",
                  "parentId": 4,
                  "path": null,
                  "redirect": null,
                  "icon": null,
                  "component": null,
                  "layout": null,
                  "keepAlive": null,
                  "method": null,
                  "description": null,
                  "show": true,
                  "enable": true,
                  "order": 1
                }
              ]
            }
          ]
        },
        {
          "id": 6,
          "name": "业务示例",
          "code": "Demo",
          "type": "MENU",
          "parentId": null,
          "path": null,
          "redirect": null,
          "icon": "i-fe:grid",
          "component": null,
          "layout": null,
          "keepAlive": null,
          "method": null,
          "description": null,
          "show": true,
          "enable": true,
          "order": 1,
          "children": [
            {
              "id": 7,
              "name": "图片上传",
              "code": "ImgUpload",
              "type": "MENU",
              "parentId": 6,
              "path": "/demo/upload",
              "redirect": null,
              "icon": "i-fe:image",
              "component": "/src/views/demo/upload/index.vue",
              "layout": "empty",
              "keepAlive": true,
              "method": null,
              "description": null,
              "show": true,
              "enable": true,
              "order": 2
            }
          ]
        },
        {
          "id": 8,
          "name": "个人资料",
          "code": "UserProfile",
          "type": "MENU",
          "parentId": null,
          "path": "/profile",
          "redirect": null,
          "icon": "i-fe:user",
          "component": "/src/views/profile/index.vue",
          "layout": null,
          "keepAlive": null,
          "method": null,
          "description": null,
          "show": false,
          "enable": true,
          "order": 99
        },
        {
          "id": 9,
          "name": "基础功能",
          "code": "Base",
          "type": "MENU",
          "parentId": null,
          "path": "/base",
          "redirect": null,
          "icon": "i-fe:grid",
          "component": null,
          "layout": null,
          "keepAlive": null,
          "method": null,
          "description": null,
          "show": true,
          "enable": true,
          "order": 0,
          "children": [
            {
              "id": 10,
              "name": "基础组件",
              "code": "BaseComponents",
              "type": "MENU",
              "parentId": 9,
              "path": "/base/components",
              "redirect": null,
              "icon": "i-me:awesome",
              "component": "/src/views/base/index.vue",
              "layout": null,
              "keepAlive": null,
              "method": null,
              "description": null,
              "show": true,
              "enable": true,
              "order": 1
            },
            {
              "id": 11,
              "name": "Unocss",
              "code": "Unocss",
              "type": "MENU",
              "parentId": 9,
              "path": "/base/unocss",
              "redirect": null,
              "icon": "i-me:awesome",
              "component": "/src/views/base/unocss.vue",
              "layout": null,
              "keepAlive": null,
              "method": null,
              "description": null,
              "show": true,
              "enable": true,
              "order": 2
            },
            {
              "id": 12,
              "name": "KeepAlive",
              "code": "KeepAlive",
              "type": "MENU",
              "parentId": 9,
              "path": "/base/keep-alive",
              "redirect": null,
              "icon": "i-me:awesome",
              "component": "/src/views/base/keep-alive.vue",
              "layout": null,
              "keepAlive": true,
              "method": null,
              "description": null,
              "show": true,
              "enable": true,
              "order": 3
            },
            {
              "id": 14,
              "name": "图标 Icon",
              "code": "Icon",
              "type": "MENU",
              "parentId": 9,
              "path": "/base/icon",
              "redirect": null,
              "icon": "i-fe:feather",
              "component": "/src/views/base/unocss-icon.vue",
              "layout": "default",
              "keepAlive": null,
              "method": null,
              "description": null,
              "show": true,
              "enable": true,
              "order": 1
            },
            {
              "id": 15,
              "name": "MeModal",
              "code": "TestModal",
              "type": "MENU",
              "parentId": 9,
              "path": "/testModal",
              "redirect": null,
              "icon": "i-me:dialog",
              "component": "/src/views/base/test-modal.vue",
              "layout": null,
              "keepAlive": null,
              "method": null,
              "description": null,
              "show": true,
              "enable": true,
              "order": 5
            }
          ]
        }
      ],
      "originUrl": "/role/permissions/tree"
    }
  });
});

module.exports = router;
