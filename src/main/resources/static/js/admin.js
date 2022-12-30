var page = new Vue({
    el: "#root",
    data: {
        username: "",
        password: "",
        notLogined: true
    },
    beforeCreate: function () {
        that = this;
    },
    methods: {
        login() {
            that = this;
            axios.post('/admin/login', {
                "id": 0,
                "password": that.password,
                "perminssion": 0,
                "username": that.username
            })
                .then(function (response) {
                    if (response.data.code == "0") {
                        that.$message({
                            message: '登陆成功',
                            type: 'success'
                        })
                        that.notLogined = false;
                    }
                    else {
                        that.$message.error('登陆失败');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})