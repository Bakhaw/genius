import axios from 'axios';
import _ from 'underscore';

export default {
  config: {
    API_ENDPOINT: 'api.genius.com',
    CLIENT_ID:
      'Z3eZm0g3ayYdYT68KeSbk4dJ95RnCJieT2aEj4OVAZg15Tz1ZtliYHJZGDEztrgA',
    CIENT_SECRET:
      'xs5eI1aQrHSL3zCsLhNBYBqn7aiQ-78G1p74mt6Z78za3YKJyGXr67SYbNghAaB047ktzuZKiurnICTt9cME_Q',
    CLIENT_ACCESS_TOKEN:
      'wY8xvv_dnm0LNzPUW5lILt6QNqcEqLW_P3wr_bsCzp-GSwdZigO3FCm89nHA1yxS'
  },
  methods: {
    SEARCH: async (query, accessToken) => {
      const url = `https://api.genius.com/search?q=${query}&access_token=${accessToken}`;
      const request = await axios.get(url);
      const { hits } = await request.data.response;

      const artists = [];
      hits.forEach(hit => {
        const artistObj = hit.result.primary_artist;

        if (_.findWhere(artists, artistObj) == null) {
          artists.push(artistObj);
        }
      });

      return { artists, hits };
    },
    GET_ARTIST: async (artistId, accessToken) => {
      const url = `https://api.genius.com/artists/${artistId}?access_token=${accessToken}`;
      const request = await axios.get(url);
      const { artist } = await request.data.response;
      return artist;
    },
    GET_ARTIST_SONGS: async (artistId, page, accessToken) => {
      const url = `https://api.genius.com/artists/${artistId}/songs?sort=popularity&page=${page}&access_token=${accessToken}`;
      const request = await axios.get(url);
      const { songs } = await request.data.response;
      return songs;
    }
  }
};
