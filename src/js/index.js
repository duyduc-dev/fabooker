import app from './app';

const bootstrap = () => {
  app().init();
  requestIdleCallback(() => {
    Alpine.start();
  });
};

bootstrap();
