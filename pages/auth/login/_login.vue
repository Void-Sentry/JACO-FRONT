<template>
    <div class="w-screen h-screen flex flex-row-reverse">
        <div class="w-full h-full heropattern-tictactoe-primary flex flex-col">
            <div class="m-auto w-2/5 h-1/2 bg-white rounded-full">
                <img width="425" src="@/static/ovini.svg" />
            </div>
        </div>
        <div class="w-2/6 h-full flex flex-col bg-quartenary text-primary text-2xl">
            <div class="mt-auto mb-px mx-auto">
                <h1><span class="text-secondary">Acesse</span> ou <span class="text-secondary">cadastre</span><br /> uma
                    conta
                    <NuxtLink to="/"><span class="text-secondary">Jaco</span>!</NuxtLink>
                </h1>
            </div>
            <div class="mt-40 mb-px mx-auto">
                <input v-model="form.mail" type="email"
                    class="w-64 h-12 rounded-3xl drop-shadow-md text-center text-lg invalid:border-error"
                    placeholder="exemplo@exemplo.com" />
            </div>
            <div class="mt-4 mb-px mx-auto text-lg">
                <input v-model="form.pass" type="password" @keypress.enter="login"
                    class="w-64 h-12 rounded-3xl drop-shadow-md text-center text-lg" placeholder="senha" />
            </div>
            <div class="mt-8 mb-auto mx-auto text-lg">
                <NuxtLink to="register">
                    <button class="mr-px text-primary w-24 h-12">Cadastrar</button>
                </NuxtLink>
                <button class="ml-5 rounded-3xl bg-primary text-quartenary w-24 h-12 drop-shadow-md"
                    @click.stop="login">Entrar</button>
            </div>
        </div>
    </div>
</template>
<script src="./login.js"></script>