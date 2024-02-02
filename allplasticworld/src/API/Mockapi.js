import { API } from './Api';
import { mockAPIurl } from './constants';

// нет єкспорта правильного

class MockAPI extends API {
  constructor(url) {
    super(url)
  }

  async getCurrent({ signal }) {
    const response = await this.fetch({ path: 'current', signal })

    return response.slice(0, 20)
  }

  async getMonth({ signal }) {
    return await this.fetch({ path: 'mounth', signal })
  }

  async updateCurrent({ signal, id }) {
    return await this.fetch({ path: `current/${id}`, signal })
  }

  async updateMonth({ signal, id }) {
    return await this.fetch({ path: `mounth/${id}`, signal })
  }
}

export default new MockAPI(mockAPIurl)