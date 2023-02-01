const { createApp } = Vue;

createApp({

    data() {

        return {
            emailAddress: [],
        };
    },

    methods: {

    },

    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(

                (resp) => {
                    console.log(resp);
                    console.log(resp.data);

                    this.emailAddress.push(resp.data.response);
                }

            );
        }
    }

}).mount('#app')