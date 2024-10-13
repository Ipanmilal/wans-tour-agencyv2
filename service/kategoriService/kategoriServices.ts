// services/kategoriService.ts
import type {
    KategoriData,
  } from "~/stores/kategoriStore/kategoriStore";
  
export const getKategoriService = async () => {
    const { baseurl, apikey, secretkey } = useAppConfig();
    const { data, error } = await useFetch<KategoriData[]>('rest/v1/tb_kategori', {
        baseURL: baseurl,
        method: 'get',
        headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretkey}`,
        },
    });

    if (error.value) {
        console.error(error.value);
        return null;
    }
    return data.value;
};

export const addKategoriService = async (nama_kategori: string, keterangan_kategori: string) => {
    const { baseurl, apikey, secretkey } = useAppConfig();
    const { data, error } = await useFetch<KategoriData[]>('rest/v1/tb_kategori', {
        baseURL: baseurl,
        method: 'post',
        headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretkey}`,
        },
        body: {
            nama_kategori,
            keterangan_kategori,
        },
    });

    if (error.value) {
        console.error(error.value);
        return null;
    }
    return data.value;
};

export const updateKategoriService = async (id_kategori: number, nama_kategori: string, keterangan_kategori: string) => {
    const { baseurl, apikey, secretkey } = useAppConfig();
    const { data, error } = await useFetch<KategoriData[]>(`rest/v1/tb_kategori?id=eq.${id_kategori}`, {
        baseURL: baseurl,
        method: 'patch',
        headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretkey}`,
        },
        body: {
            nama_kategori,
            keterangan_kategori,
        },
    });

    if (error.value) {
        console.error(error.value);
        return null;
    }
    return data.value;
};

export const deleteKategoriService = async (id_kategori: number) => {
    const { baseurl, apikey, secretkey } = useAppConfig();
    const { data, error } = await useFetch<KategoriData[]>(`rest/v1/tb_kategori?id=eq.${id_kategori}`, {
        baseURL: baseurl,
        method: 'delete',
        headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretkey}`,
        },
    });

    if (error.value) {
        console.error(error.value);
        return null;
    }
    return data.value;
};
