<template>
    <div class="w-screen h-screen">
        <div class="w-full h-full heropattern-tictactoe-primary flex flex-row">
            <div class="m-auto w-1/2 h-1/2 bg-white flex flex-row">
                <form class="m-auto">
                    <label class="flex flex-col">
                        <input type="text" class="w-64 my-4 h-12 rounded-3xl drop-shadow-md text-center text-lg"
                            placeholder="nome completo" />
                        <input type="email" class="w-64 my-4 h-12 rounded-3xl drop-shadow-md text-center text-lg"
                            placeholder="exemplo@exemplo.com" />
                        <input type="password" class="w-64 h-12 rounded-3xl drop-shadow-md text-center text-lg"
                            placeholder="senha" />
                        <input type="date" class="w-64 my-4 h-12 rounded-3xl drop-shadow-md text-center text-lg" />
                        <div class="flex flex-row mx-auto mt-">
                            <NuxtLink to="login">
                                <button class="text-primary w-24 h-12">Tem conta?</button>
                            </NuxtLink>
                            <NuxtLink to="login">
                                <button
                                    class="rounded-3xl bg-primary text-quartenary w-24 h-12 drop-shadow-md">Continuar</button>
                            </NuxtLink>
                        </div>
                    </label>
                </form>
                <div class="w-px h-3/4 bg-primary m-auto"></div>
                <img src="@/static/moonlight.svg" class="m-auto w-1/3" />
            </div>
        </div>
    </div>
</template>
<script src="./register.js"></script>