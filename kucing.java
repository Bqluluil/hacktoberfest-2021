package com.zaki;

public class Kucing {

    public String warna = "orange";
    public int jumlah_kaki = 4;
    public String jenis_ekor = "panjang";
    public String makanan_kesukaan = "ikan";

    public Kucing(String warna){
        this.warna = warna;
    }
    public Kucing(int jumlah_kaki,String jenis_ekor_kucing){
        this.jumlah_kaki = jumlah_kaki;
        jenis_ekor = jenis_ekor_kucing;
    }

    public String bersuara(){  // method function
        return "meong...";
    }

    public void berburu(String makanan){ // method prosedur
        System.out.println("berburu "+makanan);
    }
}
