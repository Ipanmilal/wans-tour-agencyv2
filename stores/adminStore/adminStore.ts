import { defineStore } from "pinia";
interface AdminData {
    id_admin : number;
    password : string;
    nama: string;
    email : string;
    level : string;
}

export const useAdminStore = defineStore('tb_admin', ()=> {
    const admin = ref<AdminData[] | null>([])
    
    // menampilkan data tabel admin
    const getAdmin = async () =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <AdminData[]> ('rest/v1/tb_admin', {
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
        admin.value=data.value
    } 
    // menampilkan data tabel admin end

    // menambahkan data tabel admin
    const addAdmin = async (password: string, nama: string, email: string, level: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <AdminData[]> ('rest/v1/tb_admin', {
            baseURL:baseurl,
            method: 'post',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                password : password,
                nama : nama,
                email : email,
                level : level,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        
    } 
    // menambahkan data tabel admin end

    // mengubah data tabel admin 
    const updateAdmin = async (id_admin: number, password: string, nama: string, email: string, level:string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <AdminData[]> (`rest/v1/tb_admin?id=eq.${id_admin}`, {
            baseURL:baseurl,
            method: 'patch',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                password : password,
                nama : nama,
                email : email,
                level : level,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        admin.value = data.value
    } 
    // mengubah data tabel admin end


    // menghapus data tabel admin
    const deleteAdmin = async (id_admin: number) => {
        const { baseurl, apikey, secretkey } = useAppConfig()
    
        const { data, error } = await useFetch<AdminData[]>(`rest/v1/tb_admin?id=eq.${id_admin}`, {
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
      // menghapus data tabel admin end

    return {
        getAdmin,
        addAdmin,
        updateAdmin,
        deleteAdmin,
        isOpen : false,
       
    }

    
})