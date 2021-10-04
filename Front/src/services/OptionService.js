import http from "../http-common";

class OptionService {
  findAll() {
    return http.get("/options");
  }

  findOne(uid) {
    return http.get(`/options/${uid}`);
  }

  create(data) {
    return http.post("/options", data);
  }

  update(id, data) {
    return http.put(`/options/${id}`, data);
  }

  delete(id) {
    return http.delete(`/options/${id}`);
  }

  deleteAll() {
    return http.delete(`/options`);
  }
}

export default new OptionService();