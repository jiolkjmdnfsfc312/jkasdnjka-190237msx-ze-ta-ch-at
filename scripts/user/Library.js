class Library {
    createElement() {
        // DIV BARU BUAT LIBRARY DOANG
        this.element = document.createElement("div");
        this.element.classList.add("Library");
        this.element.innerHTML = (`
            <button class="back">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="card link-fitur" target="_blank">
                <h3 class="title">Fitur Zetachat</h3>
            </div>
            <div class="card link">
                <h3 class="title">Versi</h3>
                <p class="desc">1.5</p>
            </div>
            <div class="card link">
                <p class="desc">&copy; 2022 Zetachat</p>
            </div>
        `);
    }
    clicked() { // U KNOW LAH
        const back = this.element.querySelector("button.back");
        const fa = this.element.querySelector(".card.link-fa");
        const fitur = this.element.querySelector(".card.link-fitur");

        back.onclick = () => new Dashboard().detectLastActivity();
        fitur.onclick = () => window.open("m/fitur/");
        fa.onclick = () => window.open("https://www.solity.my.id/");
    }
    init(container) { // OTOMATIS JALANKAN SETELAH DIPANGGIL
        new Landing().end();
        this.createElement();
        container.appendChild(this.element);
        this.clicked();
    }
}