import http from "../http-common";

class UserService {
  findAll() {
    return http.get("/user");
  }

  findOne(nickname) {
    return http.get(`/user?${nickname}`);
  }

  create(data) {
    return http.post("/user", data);
  }

  update(id, data) {
    return http.put(`/user/${id}`, data);
  }

  delete(user) {
    return http.delete(`/user/${user}`);
  }

  deleteAll() {
    return http.delete(`/user`);
  }
}

export default new UserService();