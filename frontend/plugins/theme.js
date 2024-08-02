export default defineNuxtPlugin(() => {
  return {
    provide: {
      theme: {
        getTheme() {
          if (import.meta.client) {
            return localStorage.getItem("theme");
          } else {
            return undefined;
          }
        },

        setTheme(value) {
          if (import.meta.client) {
            return localStorage.setItem("theme", value);
          }
        },
      },
    },
  };
});
