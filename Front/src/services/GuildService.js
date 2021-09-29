import http from "../http-common";

class GuildService {
  findAll() {
    return http.get("/guild");
  }

  findOne(uid) {
    return http.get(`/guild?uid=${uid}`);
  }

  create(data) {
    return http.post("/guild", data);
  }

  update(id, data) {
    return http.put(`/guild/${id}`, data);
  }

  delete(id) {
    return http.delete(`/guild/${id}`);
  }

  deleteAll() {
    return http.delete(`/guild`);
  }
}

export default new GuildService();