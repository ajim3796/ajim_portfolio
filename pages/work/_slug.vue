<template>
  <div>
    <div
      class="h-64 my-6 bg-cover bg-center shadow-lg"
      :style=" 'background-image: url(' + work.fields.image.fields.file.url + ')' "
    ></div>
    <p class="text-center text-4xl">{{ work.fields.title }}</p>
    <nuxt-link :to=" '/category/' + work.fields.category.sys.id ">
      <p class="text-center text-sm">{{ work.fields.subtitle }}</p>
    </nuxt-link>
    <div class="flex justify-center mb-5">
      <li
        v-for="tag in work.fields.tag"
        :key="tag.sys.id"
        class="list-none text-xs m-1 bg-gray-200 p-1 rounded"
        @click="$router.push('/tag/'+tag.sys.id)"
      >{{ tag.fields.name }}</li>
    </div>
    <div class="content" v-html="$md.render(work.fields.content)"></div>
  </div>
</template>

<style>
.content h1 {
  font-weight: bold;
  font-size: 1.2rem;
  margin: 25px 0;
  border-bottom: 2px solid #000;
}
.content h2 {
  font-weight: bold;
  font-size: 1rem;
  margin: 20px 0;
  border-bottom: 1px solid #eee;
}
.content h3 {
  font-weight: bold;
  font-size: 0.8rem;
  margin: 15px 0;
}
.content a {
  color: blue;
}
.content li {
  list-style: disc;
}
.content code {
  background: #eee;
  padding: 0;
}
.content pre code {
  background: none;
  padding: 0;
}
.content pre {
  background: #000;
  color: #fff;
  padding: 5px;
}
</style>

<script>
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { createClient } from "~/plugins/contentful.js";
// import Prism from "~/plugins/prism";
const client = createClient();
export default {
  asyncData({ params }) {
    return Promise.all([
      client.getEntries({
        content_type: "work",
        "fields.slug": params.slug, // 取得対象をslugフィールドがURL内のslugパラメータと等しいものに限定
      }),
    ])
      .then(([works]) => {
        return {
          work: works.items[0], // 取得した配列データの初めの１つを変数workに入れる
        };
      })
      .catch(console.error);
  },
  mounted() {
    // Prism.highlightAll();
  },
  computed: {
    faLink() {
      return faLink;
    },
    faGithub() {
      return faGithub;
    },
  },
};
</script>
