<template>
  <div class="flex flex-wrap justify-center grid md:grid-cols-2 gap-5">
    <Item v-for="work in works" :key="work.sys.id" :work="work" />
  </div>
</template>

<script>
import Item from "@/components/Item";
import { createClient } from "~/plugins/contentful.js";
const client = createClient();
export default {
  components: {
    Item,
  },
  asyncData() {
    return Promise.all([
      client.getEntries({
        content_type: "work", // workタイプの記事データを全取得
        order: "-fields.date", // Date順に並べる
      }),
    ])
      .then(([works]) => {
        return {
          works: works.items, // 取得したデータを配列worksに入れる
        };
      })
      .catch(console.error);
  },
};
</script>

<style>
</style>
