import http from "../http-common";

class UserService {
  findAll() {
    return http.get("/user");
  }

  findOne(nickname) {
    return http.get(`/user?nickname=${nickname}`);
  }

  create(data) {
    return http.post("/user", data);
  }

  update(id, data) {
    return http.put(`/user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/user/${id}`);
  }

  deleteAll() {
    return http.delete(`/user`);
  }
}

export default new UserService();