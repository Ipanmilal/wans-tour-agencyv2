import { defineStore } from "pinia";
interface IPercobaan {
    id: number
    nama: string
    alamat: string
    no_hp: string
}

export const usePercobaanStore = defineStore('percobaan', ()=> {
    const percobaan = ref<IPercobaan[] | null>([])
    
    // menampilkan data
    const getPercobaan = async () =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <IPercobaan[]> ('rest/v1/percobaan', {
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
        percobaan.value=data.value
    } 

    // menambahkan data
    const addPercobaan = async (percobaan: string, percobaan1: string, percobaan2: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <IPercobaan[]> ('rest/v1/percobaan', {
            baseURL:baseurl,
            method: 'post',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                nama: percobaan,
                alamat: percobaan1,
                no_hp: percobaan2,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        
    } 

    // Edit data
    const updatePercobaan = async (id: number, nama: string, alamat: string, no_hp:string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <IPercobaan[]> (`rest/v1/percobaan?id=eq.${id}`, {
            baseURL:baseurl,
            method: 'patch',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                nama: nama,
                alamat: alamat,
                no_hp: no_hp
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        percobaan.value = data.value
    } 
    //hapus data
    const deletePercobaan = async (id: number) => {
        const { baseurl, apikey, secretkey } = useAppConfig()
    
        const { data, error } = await useFetch<IPercobaan[]>(`rest/v1/percobaan?id=eq.${id}`, {
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
        percobaan,
        getPercobaan,
        addPercobaan,
        updatePercobaan,
        isOpen : false,
        deletePercobaan
    }

    
})