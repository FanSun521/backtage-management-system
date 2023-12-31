import Mock from "mockjs";
import mockData from "../data/mockData.js";
import mockUserData from "../data/mockUserData.js";
import mockPermission from "../data/mockPermission.js";
Mock.mock("/api/home/getData", "get", mockData.getStatisticalData);
Mock.mock(/\/api\/user\/getUserList/, "get", mockUserData.getUserList);
Mock.mock("/api/user/createUser", "post", mockUserData.createUser);
Mock.mock("/api/user/deleteUser", "post", mockUserData.deleteUser);
Mock.mock("/api/user/batchremove", "post", mockUserData.batchremove);
Mock.mock("/api/user/updateUser", "post", mockUserData.updateUser);
Mock.mock("/api/login", "post", mockPermission.getMenu);
