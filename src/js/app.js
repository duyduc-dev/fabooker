// import Swiper styles

const app = () => {
  const setState = (key, value) => {
    if (typeof key !== 'string') return;
    Alpine.store(key, value);
  };

  return {
    globalState: () => {},

    header: () => {},

    footer: () => {},

    home: () => {},

    init() {
      this.globalState();
      this.home();
      this.footer();
    },
  };
};

export default app;
