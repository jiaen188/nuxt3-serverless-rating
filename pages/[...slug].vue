
<template> 
<div id="app">
    <div class="emoji-wrapper overflow-hidden row-span-2 p-1" ref="emojiWrapper">
        <div v-for="emoji in emojis" :key="emoji" class="emoji w-18 h-18 flex justify-center items-center snap-y mb-2 text-7xl">
            {{ emoji }}
        </div> 
    </div>
    <div class="text-center leading-8">Your vote: ?</div>
    <div class="rating flex-row-reverse justify-center items-center" @change="onChange">
        <input type="radio" class="mask mask-star-2 w-10 h-10" v-for="item in 5" :class="{active: 6 - item == myRate}" @click="myRate = item" :value="6 - item" v-model="myRate">
    </div>
    <div class="col-span-2 text-center pt-1"><nuxt-link to="/ranks">ranks</nuxt-link></div>
</div>
</template>

<script setup lang="ts">
const emojis = ['🙃', '😞', '🧐', '😀', '🥳']
const emojiWrapper = ref<HTMLDivElement>()
function onChange ():void {
    if(!emojiWrapper.value) return 
    emojiWrapper.value.scrollTo({
        top: myRate.value * emojiWrapper.value.clientHeight,
        behavior: 'smooth'
    })

}
const myRate = ref<number>(0)
</script>
