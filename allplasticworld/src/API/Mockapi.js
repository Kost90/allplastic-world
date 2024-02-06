import { API } from "./Api";
import { mockAPIurl } from "./constants";

// нет єкспорта правильного

class MockAPI extends API {
  constructor(url) {
    super(url);
  }

  async getCurrent({ signal }) {
    const response = await this.fetch({ path: "current", signal });

    return response.slice(0, 20);
  }

  async getMonth({ signal }) {
    return await this.fetch({ path: "month", signal });
  }

  async getAlltime({ signal }) {
    return await this.fetch({ path: "alltime", signal });
  }

  async updateCurrent({ id, body }) {
    const controller = new AbortController();
    const signal = controller.signal;
    return await this.fetch({
      path: `current/${id}`,
      method: "PUT",
      body: body,
      signal: signal,
    });
  }

  async updateMonth({ id, body }) {
    const controller = new AbortController();
    const signal = controller.signal;
    return await this.fetch({
      path: `month/${id}`,
      method: "PUT",
      body: body,
      signal,
    });
  }

  async updateAlltime({ id, body }) {
    const controller = new AbortController();
    const signal = controller.signal;
    return await this.fetch({
      path: `alltime/${id}`,
      method: "PUT",
      body: body,
      signal,
    });
  }
}

export default new MockAPI(mockAPIurl);
