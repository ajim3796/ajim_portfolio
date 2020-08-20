<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-grow flex-wrap justify-around mx-auto max-w-screen-xl">
      <header class="px-5 w-full lg:w-1/4">
        <div class>
          <div class="flex mt-5 items-center">
            <div class="bg-center bg-cover w-16 h-16 mr-2 rounded-full shadow photo"></div>
            <div>
              <h1 class="font-bold">ajim</h1>
              <p
                class="text-xs text-justify"
              >エンジニアを目指しています。Vue.js や Nuxt.js はさわり始めたばかりです。Pythonをよく使っています。競技プログラミングもかじっています。</p>
            </div>
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
            class="bg-gray-300 p-2 text-xs rounded w-full mt-5 focus:outline-none"
            v-model="keyword"
            @keypress.enter="$router.push('/search/' + keyword)"
          />
        </div>
      </header>
      <main class="px-5 w-full lg:w-3/4">
        <nuxt />
      </main>
    </div>
    <footer class="bg-gray-200 p-2 text-center text-base">
      <div>&copy; 2020 ajim</div>
    </footer>
  </div>
</template>

<script>
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    faTwitter() {
      return faTwitter;
    },
    faGithub() {
      return faGithub;
    },
    faHome() {
      return faHome;
    },
  },
};
</script>

<style>
/* main {
  max-width: 550px;
} */
.photo {
  min-width: 4rem;
  min-height: 4rem;
  background-image: url("~static/46803786.png");
}
button:focus {
  outline: none;
}
</style>
