import { defineStore } from "pinia";
interface BiroperjalananData {
    id_biroperjalanan : number;
    id_user : number;
    nama : string;
    alamat : string;
    telp: string;
}

export const useBiroperjalananStore = defineStore('tb_biropejalanan', ()=> {
    const biroperjalan = ref<BiroperjalananData[] | null>([])
    
    // menampilkan data tabel biroperjalanan
    const getBiroperjalanan = async () =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <BiroperjalananData[]> ('rest/v1/tb_biropejalanan', {
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
        biroperjalan.value=data.value
    } 
    // menampilkan data tabel biroperjalanan end

    // menambahkan data tabel biroperjalanan
    const addBiroperjalanan = async (id_user: number, nama: string, alamat: string, telp: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <BiroperjalananData[]> ('rest/v1/tb_biropejalanan', {
            baseURL:baseurl,
            method: 'post',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                id_user : id_user,
                nama : nama,
                alamat : alamat,
                telp : telp,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        
    } 
    // menambahkan data tabel biroperjalanan end

    // mengubah data tabel birroperjalanan 
    const updateBiroperjalanan = async (id_biroperjalanan: number, id_user: number, nama: string, alamat: string, telp: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <BiroperjalananData[]> (`rest/v1/tb_biropejalanan?id_biroperjalanan=eq.${id_biroperjalanan}`, {
            baseURL:baseurl,
            method: 'patch',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                id_user : id_user,
                nama : nama,
                alamat : alamat,
                telp : telp,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        biroperjalan.value = data.value
    } 
    // mengubah data tabel birroperjalanan end


    // menghapus data tabel biroperjalanan
    const deleteBiroperjalanan = async (id_biroperjalanan: number) => {
        const { baseurl, apikey, secretkey } = useAppConfig()
    
        const { data, error } = await useFetch <BiroperjalananData[]> (`rest/v1/tb_biropejalanan?id_biroperjalanan=eq.${id_biroperjalanan}`, {
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
      // menghapus data tabel biroperjalanan end

    return {
        biroperjalan,
        getBiroperjalanan,
        addBiroperjalanan,
        updateBiroperjalanan,
        deleteBiroperjalanan,
        isOpen : false,
       
    }

    
})