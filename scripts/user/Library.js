class Library {
    createElement() {
        // DIV BARU BUAT LIBRARY DOANG
        this.element = document.createElement("div");
        this.element.classList.add("Library");
        this.element.innerHTML = (`
            <button class="back">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="card link-fa">
                <h3 class="title">By Zetachat</h3>
                <p class="desc">2022</p>
                <span>Link: <a href="https://www.solity.my.id/" target="_blank">https://www.solity.my.id/</a></span>
            </div>
            <div class="card link">
                <h3 class="title">Versi</h3>
                <p class="desc">0.2</p>
            </div>
            <div class="card link-fitur" target="_blank">
                <h3 class="title">Fitur Zetachat</h3>
                <span><a href="m/fitur/" target="_blank">View Fitur</a></span>
            </div>
        `);
    }
    clicked() { // U KNOW LAH
        const back = this.element.querySelector("button.back");
        const fa = this.element.querySelector(".card.link-fa");
        const fitur = this.element.querySelector(".card.link-fitur");

        back.onclick = () => new Dashboard().detectLastActivity();
        fa.onclick = () => window.open("https://www.solity.my.id/");
        fitur.onclick = () => window.open("m/fitur/");
    }
    init(container) { // OTOMATIS JALANKAN SETELAH DIPANGGIL
        new Landing().end();
        this.createElement();
        container.appendChild(this.element);
        this.clicked();
    }
}