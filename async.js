const async = (callback) => setTimeout(callback, 100);

const doSomething = () => {
  const increment = (n, i = 0) => {
    if (i < n) {
      console.log(i);
      async(() => increment(n, i + 1));
    }
  };
  async(() => increment(10));
  async(() => increment(10));
};
doSomething();