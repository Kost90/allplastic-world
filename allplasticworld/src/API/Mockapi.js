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

  async updateCurrent({ signal, id, body }) {
    return await this.fetch({ path: `current/${id}`, signal, method:'PUT', body:JSON.stringify(body) });
  }

  async updateMonth({ signal, id, body }) {
    return await this.fetch({ path: `month/${id}`, signal, method:'PUT', body:JSON.stringify(body) });
  }
}

export default new MockAPI(mockAPIurl);
