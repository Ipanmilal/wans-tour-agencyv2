<script lang="ts" setup>
import { products } from '~/composables/constants/products';

const selectedCategory = ref(""); 
const allProducts = computed(() => {
	if (selectedCategory.value) {
		return products.filter((item) => item.category === selectedCategory.value);
	}
	return products;
});
</script>

<template>
	<div>
	Sewa Bus pariwisata
	<section class="bg-black flex items-center justify-center px-6">
		<div class="container">
			<div class="py-10">
				<div class="mb-6 flex justify-end gap-6">
					<DropDown @selected-category="selectedCategory = $event" />
				</div>
				<div class="gap-6 mx-auto sm:flex sm:flex-wrap justify-center font-inter">
					<template v-for="(item, index) in allProducts" :key="index">
						<MainmenuComponentFeatures product="item" class="mb-10 w-64"/>
					</template>
				</div>
			</div>
		</div>
	</section>
	</div>
</template>
