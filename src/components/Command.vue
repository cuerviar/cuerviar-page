<script setup>
import { useThemeStore } from "../stores/store";
// como usa props, se usa setup
const props = defineProps(['command'])
const themeStore = useThemeStore();

import { ref } from "vue";
const isHovered = ref(false);
const isHoveredCopy = ref(false);

const copyToClipboard = async () => {
    const plainText = props.command.replace(/<br\s*\/?>/gi, "\n");
    try {
        await navigator.clipboard.writeText(plainText);
    } catch (err) {
        console.error("Error al copiar: ", err);
    }
};
//#18181b
</script>

<template>
    <div id="container" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <code v-html="props.command" :style="{backgroundColor: themeStore.theme == 'light' ? '#020617' : '#18181b'}"></code>
        <div id="copy-container" :style="{ display: isHovered ? 'flex' : 'none'}" @mouseenter="isHoveredCopy = true"
            @mouseleave="isHoveredCopy = false" @click="isHoveredCopy = false; copyToClipboard();">
            <div id="copy"></div>
        </div>
        <div id="copy-text" :style="{ display: isHoveredCopy ? 'flex' : 'none' }">Copiar</div>
    </div>
</template>

<style scoped>
#container {
    width: 100%;
    position: relative;
}

code {
    display: block;
    width: 100%;
    background-color: #020617;
    color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: auto;
    white-space: pre;
}

#copy-container {
    cursor: pointer;
    user-select: none;
    width: 2rem;
    height: 2rem;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0.5rem;
    top: 0.5rem;
    border-radius: 10px;
    border: 0.5px solid #61646e;
    transition: all .3s ease-in-out;
}

#copy-container:hover {
    background-color: #282b3a;
}

#copy {
    width: 1rem;
    height: 1rem;
    background-image: url("/copy.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

#copy-text {
    display: none;
    color: #FFFFFF;
    font-size: 12px;
    width: 4rem;
    height: 1.5rem;
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 0.5rem;
    top: 3rem;
    border-radius: 5px;
    border: transparent;
    background-color: #334155;
    user-select: none;
}
</style>