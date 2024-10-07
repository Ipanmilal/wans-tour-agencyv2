<script setup lang="ts">
const id = useRoute ().params.id??""
const product = await useSupabaseClient().from("tb_destinasi").select("*").eq("id", id).single()
console.log("ngecek", product)
</script>


<template>
    <section class=" flex justify-center py-10 bg-white">
        <div class="container px-6">
            <div class="grid place-content-center md:flex md:items-center border-2 border-white">
                
                <div class="w-full md:w-1/2 pl-5 px-6">
                    <p class="text-xl text-slate-700 text-center md:text-start mb-3">{{ product.data.nama }}</p>
                    <h1 class="text-4xl font-bold text-center md:text-start text-slate-800 mb-3">{{ product.data.nama }}</h1>
                    <h3 class="text-xl md:text-4xl text-slate-700 text-center md:text-start mb-3 font-semibold">Rp.{{ product.data.harga }}</h3>
                    <p class="mb-10 text-slate-700">{{ product.data.deskripsi }}</p>
                    <p class="mb-10 text-slate-700">{{ product.data.info }}</p>
                    <div class="flex flex-col gap-4">
                        <!-- <NuxtLink to="/cart" class="w-full flex items-center gap-2 bg-blue-600 text-white py-3 justify-center rounded-lg cursor-pointer hover:bg-blue-600/80 transition duration-300 relative">
                            <i class="ri-shopping-cart-2-line"></i>
                            <span>Add to Cart</span>
                        </NuxtLink> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>