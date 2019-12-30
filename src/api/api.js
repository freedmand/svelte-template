import { Svue } from 'svue';

export const api = new Svue({
  data() {
    return {
      x: 1,
      y: 2,
    };
  },
  computed: {
    sum(x, y) {
      return x + y;
    }
  }
});

export const API = {

};
