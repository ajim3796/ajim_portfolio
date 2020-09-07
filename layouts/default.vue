<template>
  <div class="scroll flex flex-col min-h-screen">
    <div class="flex flex-wrap justify-center">
      <header class="p-5 lg:w-64">
        <div class="flex flex-col">
          <div class="flex items-center">
            <div class="bg-center bg-cover w-16 h-16 rounded-full shadow photo"></div>
            <h1 class="mx-5 font-bold text-xl">ajim</h1>
          </div>
          <p class="mt-5 text-xs text-justify">
            エンジニアを目指しています。Vue.js や Nuxt.js はさわり始めたばかりです。
            Pythonをよく使っています。競技プログラミングもかじっています。
          </p>
        </div>
        <div class="flex justify-around mt-5 text-xs">
          <nuxt-link to="/">
            <button>
              <fa-layers full-width class="fa-2x block mx-auto mb-1">
                <fa :icon="faHome" />
              </fa-layers>Home
            </button>
          </nuxt-link>
          <a href="https://twitter.com/ajim3796" target="_blank" rel="noopener noreferrer">
            <button>
              <fa-layers full-width class="fa-2x block mx-auto mb-1">
                <fa :icon="faTwitter" />
              </fa-layers>Twitter
            </button>
          </a>
          <a href="https://github.com/ajim3796" target="_blank" rel="noopener noreferrer">
            <button>
              <fa-layers full-width class="fa-2x block mx-auto mb-1">
                <fa :icon="faGithub" />
              </fa-layers>GitHub
            </button>
          </a>
        </div>
        <input
          type="text"
          placeholder="Keywords"
          class="p-2 mt-5 bg-gray-300 text-xs rounded w-full focus:outline-none"
          v-model="keyword"
          @keypress.enter="$router.push('/search/' + keyword)"
        />
      </header>
      <main class="pt-5 w-full lg:w-8/12 xl:max-w-5xl">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default {
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    faHome() {
      return faHome;
    },
    faTwitter() {
      return faTwitter;
    },
    faGithub() {
      return faGithub;
    },
  },
};
</script>

<style>
html {
  font-family: -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
    sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
.photo {
  min-width: 4rem;
  min-height: 4rem;
  background-image: url("~static/46803786.png");
}
button:focus {
  outline: none;
}
</style>
