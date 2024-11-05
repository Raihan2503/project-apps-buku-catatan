function formatDate (dateString)  {
    const date = new Date(dateString);
    const options = {
        weekday: 'long',     // Menampilkan nama hari
        year: 'numeric',     // Menampilkan tahun
        month: 'long',       // Menampilkan nama bulan
        day: 'numeric'       // Menampilkan tanggal
    };
    return date.toLocaleDateString('id-ID', options);
}

export {formatDate};