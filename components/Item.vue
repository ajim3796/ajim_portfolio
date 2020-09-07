<template>
  <div class="shadow-lg w-full">
    <nuxt-link :to=" '/category/' + work.fields.category.sys.id ">
      <div
        class="absolute bg-gray-700 border border-4 border-white m-2 px-3 py-1 rounded text-white text-sm"
      >{{ work.fields.category.fields.name }}</div>
    </nuxt-link>
    <nuxt-link :to=" '/work/' + work.fields.slug ">
      <div
        class="w-full h-64 bg-center bg-cover"
        :style=" 'background-image: url(' + work.fields.image.fields.file.url + ')' "
      ></div>
      <div class="mt-4 mx-4">{{ work.fields.title }}</div>
    </nuxt-link>
    <div class="mt-4 mx-4 text-xs">{{ work.fields.subtitle }}</div>
    <div class="flex mx-2 my-4">
      <li
        v-for="tag in work.fields.tag"
        :key="tag.sys.id"
        class="mx-2 px-2 py-1 list-none text-xs bg-gray-200 rounded cursor-pointer"
        @click="$router.push('/tag/'+tag.sys.id)"
      >{{ tag.fields.name }}</li>
    </div>
  </div>
</template>

<script>
export default {
  props: ["work"],
};
</script>
