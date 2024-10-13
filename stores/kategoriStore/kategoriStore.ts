import { defineStore } from "pinia";
export interface KategoriData {
    id_kategori : number;
    nama_kategori: string;
    keterangan_kategori: string;
}

export const useKategoriStore = defineStore('tb_kategori', ()=> {
    const kategori = ref<KategoriData[] | null>([])
    
    // menampilkan data tabel kategori
    const getKategori = async () =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <KategoriData[]> ('rest/v1/tb_kategori', {
            baseURL:baseurl,
            method: 'get',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            }
        })
        console.log(apikey)
        console.log(secretkey)
        console.log("value", data.value)
        console.log("error", error.value)
        kategori.value=data.value
    } 
    // menampilkan data tabel kategori end

    // menambahkan data tabel kategori
    const addKategori = async (nama_kategori: string, keterangan_kategori: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <KategoriData[]> ('rest/v1/tb_kategori', {
            baseURL:baseurl,
            method: 'post',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                nama_kategori: nama_kategori,
                keterangan_kategori: keterangan_kategori,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        
    } 
    // menambahkan data tabel kategori end

    // mengubah data tabel kategori 
    const updateKategori = async (id_kategori: number, nama_kategori: string, keterangan_kategori: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <KategoriData[]> (`rest/v1/tb_kategori?id_kategori=eq.${id_kategori}`, {
            baseURL:baseurl,
            method: 'patch',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                nama_kategori: nama_kategori,
                keterangan_kategori: keterangan_kategori,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        kategori.value = data.value
    } 
    // mengubah data tabel kategori end


    // menghapus data tabel kategori
    const deleteKategori = async (id_kategori: number) => {
        const { baseurl, apikey, secretkey } = useAppConfig()
    
        const { data, error } = await useFetch<KategoriData[]>(`rest/v1/tb_kategori?id_kategori=eq.${id_kategori}`, {
          baseURL: baseurl,
          method: 'delete',
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${secretkey}` 
          }
        })
    
        if (error.value) {
          console.error(error.value)
          return
        }
      }
      // menghapus data tabel kategori end

    return {
        kategori,
        getKategori,
        addKategori,
        updateKategori,
        deleteKategori,
        isOpen : false,
       
    }

    
})