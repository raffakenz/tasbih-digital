let hitungan = 0

function tambahHitungan() {
    hitungan++
    document.getElementById('penghitung').textContent = hitungan
}

function enter(event) {
    if(event.key === 'Enter') {
        tambahHitungan()
    }
}