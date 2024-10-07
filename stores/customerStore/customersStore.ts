import { defineStore } from "pinia";
interface CustomerData {
    id_user : number;
    no_ktp : number;
    nama: string;
    alamat : string;
    kota_asal : string;
    jenis_kelamin : string;
    no_telepon: string
}

export const useCustomerStore = defineStore('tb_customer', ()=> {
    const customer = ref<CustomerData[] | null>([])
    
    // menampilkan data tabel customer
    const getCustomer = async () =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <CustomerData[]> ('rest/v1/tb_customer', {
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
        customer.value=data.value
    } 
    // menampilkan data tabel customer end

    // menambahkan data tabel customer
    const addCustomer = async (no_ktp: number, nama: string, alamat: string, kota_asal: string, jenis_kelamin: string, no_telepon: string ) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <CustomerData[]> ('rest/v1/tb_customer', {
            baseURL:baseurl,
            method: 'post',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                no_ktp : no_ktp,
                nama : nama,
                alamat : alamat,
                kota_asal : kota_asal,
                jenis_kelamin : jenis_kelamin,
                no_telepon : no_telepon,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        
    } 
    // menambahkan data tabel customer end

    // mengubah data tabel customer 
    const updateCustomer = async (id_user: number, no_ktp: number, nama: string, alamat: number, kota_asal: string, jenis_kelamin: string, no_telepon: string) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <CustomerData[]> (`rest/v1/tb_customer?id=eq.${id_user}`, {
            baseURL:baseurl,
            method: 'patch',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                no_ktp : no_ktp,
                nama : nama,
                alamat : alamat,
                kota_asal : kota_asal,
                jenis_kelamin : jenis_kelamin,
                no_telepon : no_telepon,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        customer.value = data.value
    } 
    // mengubah data tabel customerr end


    // menghapus data tabel customer
    const deleteCustomer = async (id_user: number) => {
        const { baseurl, apikey, secretkey } = useAppConfig()
    
        const { data, error } = await useFetch<CustomerData[]>(`rest/v1/tb_customer?id=eq.${id_user}`, {
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
      // menghapus data tabel customer end

    return {
        getCustomer,
        addCustomer,
        updateCustomer,
        deleteCustomer,
        isOpen : false,
       
    }

    
})