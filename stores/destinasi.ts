import { defineStore } from "pinia";
interface IDestinasi {
    id: number
    nama: string
    jumlah_seat: number
    harga: string
    deskripsi: string
    info: string
}

export const useDestinasiStore = defineStore('tb_destinasi', ()=> {
    const destinasi = ref<IDestinasi[] | null>([])
    
    // menampilkan data
    const getDestinasi = async () =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <IDestinasi[]> ('rest/v1/tb_destinasi', {
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
        destinasi.value=data.value
    } 

    // menambahkan data
    const addDestinasi = async (nama: string, jumlah_seat: number, harga: string, deskripsi: string, info: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <IDestinasi[]> ('rest/v1/tb_destinasi', {
            baseURL:baseurl,
            method: 'post',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                nama: nama,
                jumlah_seat: jumlah_seat,
                harga: harga,
                deskripsi: deskripsi,
                info: info,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        
    } 

    // Edit data
    const updateDestinasi = async (id: number, nama: string, jumlah_seat: number, harga: string, deskripsi: string, info: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <IDestinasi[]> (`rest/v1/tb_destinasi?id=eq.${id}`, {
            baseURL:baseurl,
            method: 'patch',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                nama: nama,
                jumlah_seat: jumlah_seat,
                harga: harga,
                deskripsi: deskripsi,
                info: info
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        destinasi.value = data.value
    } 
    //hapus data
    const deleteDestinasi = async (id: number) => {
        const { baseurl, apikey, secretkey } = useAppConfig()
    
        const { data, error } = await useFetch<IDestinasi[]>(`rest/v1/tb_destinasi?id=eq.${id}`, {
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

     //hapus data

    return {
        destinasi,
        getDestinasi,
        addDestinasi,
        updateDestinasi,
        isOpen : false,
        deleteDestinasi
    }

    
})