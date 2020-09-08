<template>
  <div>
    <nuxt-link :to=" '/category/' + work.fields.category.sys.id ">
      <div
        class="bg-gray-700 m-2 px-3 py-1 rounded text-white"
      >{{ work.fields.category.fields.name }}</div>
    </nuxt-link>
    <p class="text-center text-4xl font-bold">{{ work.fields.title }}</p>
    <p class="text-center text-xl text-gray-600 mt-5">{{ work.fields.subtitle }}</p>
    <div class="flex justify-center mt-5">
      <li
        v-for="tag in work.fields.tag"
        :key="tag.sys.id"
        class="bg-gray-200 list-none m-1 p-1 rounded cursor-pointer"
        @click="$router.push('/tag/'+tag.sys.id)"
      >{{ tag.fields.name }}</li>
    </div>
    <div class="content mt-10" v-html="$md.render(work.fields.content)"></div>
  </div>
</template>

<style>
.content h1 {
  font-weight: bold;
  font-size: 2rem;
  margin: 1.5rem 0;
  border-bottom: 2px solid rgb(150, 150, 150);
}
.content h2 {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 20px 0;
  border-bottom: 1px solid rgb(150, 150, 150);
}
.content h3 {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
}
.content a {
  color: rgb(68, 125, 190);
}
.content a:hover {
  text-decoration: underline;
}
.content li {
  list-style: disc;
}
.content p {
  margin-bottom: 1rem;
}
.content p code {
  background-color: rgb(230, 230, 230);
  border-radius: 4px;
  margin: 0 0.2rem;
  padding: 0 0.2rem;
}
.content pre {
  font-family: monospace, monospace;
  margin-bottom: 1rem;
}
.content blockquote {
  border-left: 5px solid #ddd;
  color: #777;
  padding: 1em;
  padding-right: 0;
  margin: 1.5em 0;
}
.content img {
  margin-top: 1rem;
}
</style>

<script>
import { createClient } from "~/plugins/contentful.js";
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
