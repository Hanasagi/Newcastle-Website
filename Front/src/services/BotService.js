import http from "../http-common";

class BotService {
  findAll() {
    return http.get("/bot");
  }

  findOne(name) {
    return http.get(`/bot?${name}`);
  }

  create(data) {
    return http.post("/bot", data);
  }

  update(id, data) {
    return http.put(`/bot/${id}`, data);
  }

  delete(id) {
    return http.delete(`/bot/${id}`);
  }

  deleteAll() {
    return http.delete(`/bot`);
  }
}

export default new BotService();