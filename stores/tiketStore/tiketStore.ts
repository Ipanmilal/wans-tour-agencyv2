import { defineStore } from "pinia";
interface TiketData {
    id_tiket : number;
    id_wisata : number;
    jenis_tiket : string;
}

export const useTiketStore = defineStore('tb_tiket', ()=> {
    const tiket = ref<TiketData[] | null>([])
    
    // menampilkan data tabel tiket
    const getTiket = async () =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <TiketData[]> ('rest/v1/tb_tiket', {
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
        tiket.value=data.value
    } 
    // menampilkan data tabel tiket end

    // menambahkan data tabel tiket
    const addTiket = async (id_wisata: number, jenis_tiket: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <TiketData[]> ('rest/v1/tb_tiket', {
            baseURL:baseurl,
            method: 'post',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                id_wisata : id_wisata,
                jenis_tiket : jenis_tiket,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        
    } 
    // menambahkan data tabel tiket end

    // mengubah data tabel tiket 
    const updateTiket = async (id_tiket: number, id_wisata: number, jenis_tiket: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <TiketData[]> (`rest/v1/tb_tiket?id_tiket=eq.${id_tiket}`, {
            baseURL:baseurl,
            method: 'patch',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                id_wisata : id_wisata,
                jenis_tiket : jenis_tiket,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        tiket.value = data.value
    } 
    // mengubah data tabel tiket end


    // menghapus data tabel tiket
    const deleteTiket = async (id_tiket: number) => {
        const { baseurl, apikey, secretkey } = useAppConfig()
    
        const { data, error } = await useFetch<TiketData[]>(`rest/v1/tb_tiket?id_tiket=eq.${id_tiket}`, {
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
      // menghapus data tabel tiket end

    return {
        tiket,
        getTiket,
        addTiket,
        updateTiket,
        deleteTiket,
        isOpen : false,
       
    }

    
})