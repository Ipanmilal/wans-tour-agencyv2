import { defineStore } from "pinia";
interface TransaksiData {
    id_transaksi : number;
    id_tiket : number;
    id_user : number;
    tgl_pesan : string;
    jumlah_bayar : string;
    id_biroperjalanan: number;
}

export const useTransaksiStore = defineStore('tb_transaksi', ()=> {
    const transaksi = ref<TransaksiData[] | null>([])
    
    // menampilkan data tabel transaksi
    const getTransaksi = async () =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <TransaksiData[]> ('rest/v1/tb_transaksi', {
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
        transaksi.value=data.value
    } 
    // menampilkan data tabel transaksi end

    // menambahkan data tabel transaksi
    const addTransaksi = async (id_tiket: number, id_user: number, tgl_pesan: string, jumlah_bayar: string, id_biroperjalanan: number ) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <TransaksiData[]> ('rest/v1/tb_transaksi', {
            baseURL:baseurl,
            method: 'post',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                id_tiket : id_tiket,
                id_user : id_user,
                tgl_pesan : tgl_pesan,
                jumlah_bayar : jumlah_bayar,
                id_biroperjalanan : id_biroperjalanan,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        
    } 
    // menambahkan data tabel transaksi end

    // mengubah data tabel transaksi 
    const updateTransaksi = async (id_transaksi: number, id_tiket: number, id_user: number, tgl_pesan: string, jumlah_bayar: string, id_biroperjalanan: number) =>{
        const { baseurl, apikey, secretkey} = useAppConfig()

        const { data, error } = await useFetch <TransaksiData[]> (`rest/v1/tb_transaksi?id_transaksi=eq.${id_transaksi}`, {
            baseURL:baseurl,
            method: 'patch',
            headers: {
                apikey: apikey,
                Authorization: `Bearer ${secretkey}`
            },
            body: {
                id_tiket : id_tiket,
                id_user : id_user,
                tgl_pesan : tgl_pesan,
                jumlah_bayar : jumlah_bayar,
                id_biroperjalanan : id_biroperjalanan,
            }
        })
        if(error.value){
            console.error(error.value)
            return
        }
        transaksi.value = data.value
    } 
    // mengubah data tabel transaksi end


    // menghapus data tabel transaksi
    const deleteTransaksi = async (id_transaksi: number) => {
        const { baseurl, apikey, secretkey } = useAppConfig()
    
        const { data, error } = await useFetch<TransaksiData[]>(`rest/v1/tb_transaksi?id_transaksi=eq.${id_transaksi}`, {
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
      // menghapus data tabel transaksi end

    return {
        transaksi,
        getTransaksi,
        addTransaksi,
        updateTransaksi,
        deleteTransaksi,
        isOpen : false,
       
    }

    
})