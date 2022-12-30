var page = new Vue({
    el: "#root",
    data: {
        swiper: [],
        pets: []
    },
    beforeCreate: function () {
        that = this;
        axios.get('/swiper/findAll')
            .then(function (response) {
                that.swiper = response.data.data
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/pets/findAll')
            .then(function (response) {
                that.pets = response.data.data
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    },
    methods: {
    }
})
