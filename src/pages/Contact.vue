<template>
    <div class="container-page">
        <div class="page-header container-flex">
            <h1 class="page-title">Get in touch with me!</h1>
        </div>

        <div class="container-flex column fullheight">
            <form class="contact-form container-flex column" @submit.prevent="sendEmail">
                <div class="form-input">
                    <input type="hidden" value="Lily" name="to_name"/>
                </div>
                <div class="form-input">
                    <label for="name">Name *</label>
                    <input v-model="from_name" id="name" placeholder="Your name... " required autocomplete="off" name="from_name"/>
                </div>
                <div class="form-input">
                    <label for="email">Email *</label>
                    <input v-model="from_email" id="email" placeholder="Your email..." required name="from_email"/>
                </div>
                <div class="form-input">
                    <label for="message">Message *</label>
                    <textarea v-model="message" id="message" required placeholder="Your message..." name="message"></textarea>
                </div>

                <button type="submit">Send</button>
                <p id="popup" style="opacity: 0">Email Sent!</p>
            </form>
        </div>
    </div>
</template>
      
<script>
import emailjs from '@emailjs/browser';

export default {
    name: "ContactVue",
    created() {
        document.title="Contact | Lily Dosedel"
    },
    data() {
        return {
            from_name: "",
            from_email: "",
            message: "",
        }
    },
    methods: {
    sendEmail(e) {
        try {
            emailjs.sendForm("service_7yb38ys","template_vtjrpr9", e.target,
            "Ko8zdPaMimYBcfLTm", {
                to_name: "Lily",
                from_name: this.from_name,
                from_email: this.from_email,
                message: this.message
            })
            this.from_name = "";
            this.from_email = "";
            this.message = "";
            this.togglePopup();
        } catch(error) {
            console.log({error});
        }
    },
    togglePopup() {
        document.getElementById("popup").style.opacity=1;
        setTimeout(() => {
            this.closePopup()
        }, 2000)
    },
    closePopup() {
        document.getElementById("popup").style.opacity=0;
    }
  }
}
</script>
    
<style scoped>
.fullheight {
    height: auto !important;
}

#popup {
    margin-top: 10px;
    color: lightgreen;
    font-size: 1.2rem;
    transition: 0.25s;
}

@media only screen and (max-width: 550px) {
    .contact-form {
        width: 100%;
    }
}
</style>