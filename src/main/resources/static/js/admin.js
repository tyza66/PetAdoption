var page = new Vue({
    el: "#root",
    data: {
        username: "",
        password: "",
        notLogined: true,
        ZStableData: [],
        ZSdialogFormVisible: false,
        ZSupdateForm: {
            "id": 0,
            "jieshao": "",
            "name": "",
            "touxiang": ""
        },
        LYtableData: [],
        YBtableData: [],
        YStableData: []
    },
    beforeCreate: function () {
        that = this;
        axios.get('/admin/logined')
            .then(function (response) {
                if (response.data.data.username != null) {
                    that.notLogined = false;
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/adoption/findNotPass')
            .then(function (response) {
                that.LYtableData = response.data.data
                that.$forceUpdate()
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/pets/findAll')
            .then(function (response) {
                that.ZStableData = response.data.data
                that.$forceUpdate()
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/adoption/findNoPass')
            .then(function (response) {
                that.YBtableData = response.data.data
                that.$forceUpdate()
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        axios.get('/adoption/findPass')
            .then(function (response) {
                that.YStableData = response.data.data
                that.$forceUpdate()
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
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
        },
        ZSdelete(id) {
            this.$confirm('此操作将永久删除该宠物展示记录，是否确定?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                axios.get('/pets/delete?id=' + id)
                    .then(function (response) {
                        if (response.data.code == 0) {
                            that.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            axios.get('/pets/findAll')
                                .then(function (response) {
                                    that.ZStableData = response.data.data
                                    that.$forceUpdate()
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                });
                        }
                        else {
                            that.$message.error('修改失败');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                    });

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        ZSupdate(row) {
            this.ZSupdateForm.id = row.id
            this.ZSupdateForm.name = row.name
            this.ZSupdateForm.jieshao = row.jieshao
            this.ZSupdateForm.touxiang = row.touxiang
            this.ZSdialogFormVisible = true
        },
        ZSupdateQ() {
            this.ZSdialogFormVisible = false
            this.$message({
                type: 'info',
                message: '已取消修改'
            });
        },
        ZSupdateY() {
            that = this;
            axios.post('/pets/update', {
                "id": that.ZSupdateForm.id,
                "jieshao": that.ZSupdateForm.jieshao,
                "name": that.ZSupdateForm.name,
                "touxiang": that.ZSupdateForm.touxiang
            })
                .then(function (response) {
                    if (response.data.code == "0") {
                        that.$message({
                            message: '修改成功',
                            type: 'success'
                        })
                        that.ZSdialogFormVisible = false
                        axios.get('/pets/findAll')
                            .then(function (response) {
                                that.ZStableData = response.data.data
                                that.$forceUpdate()
                            })
                            .catch(function (error) {
                                console.log(error);
                            })
                            .finally(function () {
                            });
                    }
                    else {
                        that.$message.error('修改失败');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        LYnoPass(id){

        },
        LYPass()
    }
})