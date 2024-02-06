class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }
    render(id) {
        let mainRef = document.getElementById(id);
        mainRef.innerHTML = `<article>
                                       <div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
                                            <div class="info" style="display:none;">
                                                 <span>&phone; ${this.phone}</span>
                                                 <span>&#9993; ${this.email}</span>
                                            </div>
                             </article>`;
        let buttonRef = document.querySelector("button");
        buttonRef.addEventListener("click", showInfo);

        function showInfo() {
            let divRef = document.querySelector(".info");
            if (divRef.style.display == "none") {
                divRef.style.display = "block";
            } else {
                divRef.style.display = "none";
            }
        }
    }
    get online() {
        return this._online;
    }
    set online(online) {
        this._online = online;
        this.checkOnline();
    }
    checkOnline() {
        let divRef1 = document.querySelector(".title");
        if (this.online == true) {
            divRef1.classList.add("online");
        } else {
            divRef1.classList.remove("online");
        }
    }
}
let contact = new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com");
contact.render("main");
setTimeout(() => contact.online = true, 2000);