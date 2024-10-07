import { defineStore } from "pinia";
interface WisataData {
    id_wisata : number;
    id_kategori : number;
    id_user : number;
    nama_wisata : string;
    alamat_wisata : string;
    fasilitas: string
    gambar: string;
    id_biroperjalanan: number;
}

export const useWisataStore = defineStore('tb_wisata', ()=> {
    const wisata = ref<WisataData[] | null>([])
    
    // menampilkan data tabel wisata
    const getWisata = async () =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <WisataData[]> ('rest/v1/tb_wisata', {
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
        wisata.value=data.value
    } 
    // menampilkan data tabel wisata end

    // menambahkan data tabel wisata
    const addWisata = async (id_kategori: number, id_user: number, nama_wisata: string, alamat_wisata: string, fasilitas: string, id_biroperjalanan: number ) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <WisataData[]> ('rest/v1/tb_wisata', {
            baseURL:baseurl,
            method: 'post',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                id_kategori : id_kategori,
                id_user : id_user,
                id_biroperjalanan : id_biroperjalanan,
                nama_wisata : nama_wisata,
                alamat_wisata : alamat_wisata,
                fasilitas : fasilitas,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        
    } 
    // menambahkan data tabel wisata end

    // mengubah data tabel wisata 
    const updateWisata = async (id_wisata: number, id_kategori: number, id_user: number, nama_wisata: string, alamat_wisata: string, fasilitas: string, id_biroperjalanan: number) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <WisataData[]> (`rest/v1/tb_wisata?id=eq.${id_wisata}`, {
            baseURL:baseurl,
            method: 'patch',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                id_kategori : id_kategori,
                id_user : id_user,
                id_biroperjalanan : id_biroperjalanan,
                nama_wisata : nama_wisata,
                alamat_wisata : alamat_wisata,
                fasilitas : fasilitas,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        wisata.value = data.value
    } 
    // mengubah data tabel wisata end


    // menghapus data tabel wisata
    const deleteWisata = async (id_wisata: number) => {
        const { baseurl, apikey, secretkey } = useAppConfig()
    
        const { data, error } = await useFetch<WisataData[]>(`rest/v1/tb_wisata?id=eq.${id_wisata}`, {
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
      // menghapus data tabel wisata end

    return {
        getWisata,
        addWisata,
        updateWisata,
        deleteWisata,
        isOpen : false,
       
    }

    
})